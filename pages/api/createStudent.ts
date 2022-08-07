// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "v1",
};

const client = sanityClient(config);

export default async function createStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email } = JSON.parse(req.body);
  try {
    await client.create({
      _type: "student",
      curso: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "No se pudo crear el estudiante", err });
  }
  console.log("Estudiante creado");
  res.status(200).json({ message: "Estudiante creado" });
}
