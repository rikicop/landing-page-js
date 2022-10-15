// MODULES
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

//DATA STATIC
import { homeObjOne, homeObjFour } from "../DataHero";

// COMPONENTS
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Acerca from "../components/Acerca";
import Navbar from "components/Navbar";
import PortfolioList from "components/PortfolioList";
//import CardList from "../components/CardList"; este es el blog, por ahora, no se va a utilizar




export default function Home({ posts: posts, cursos: cursos }: any) {
  const [mappedPosts, setMappedPosts] = useState([]);
  const [mappedCursos, setMappedCursos] = useState([]);
  console.log(mappedPosts);
  useEffect(() => {
    if (posts.length && cursos.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "rfzuszbb",
        dataset: "production",
      });
      const imgBuilderc = imageUrlBuilder({
        projectId: "rfzuszbb",
        dataset: "production",
      });
      setMappedPosts(
        posts.map((p: any) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          };
        })
      );
      setMappedCursos(
        cursos.map((c: any) => {
          return {
            ...c,
            mainImage: imgBuilderc.image(c.mainImage).width(500).height(250),
          };
        }
        )
      );
    } else {
      setMappedPosts([]);
      setMappedCursos([]);
    }
  }, [posts, cursos]);
  return (
    <>
      <WhatsAppButton />
      <Navbar />
      <Hero {...homeObjOne} />
      <Acerca {...homeObjFour} />
      <Services />
       {/* Cursos */}
      {mappedCursos.length ? (
        <PortfolioList data={mappedCursos} title="Curso" />
      ) : (
        <p>No Courses found</p>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = encodeURIComponent('*[_type == "post"]');
  const queryc = encodeURIComponent('*[_type == "curso"]');
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;
  const urlc = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${queryc}`;
  const result = await fetch(url).then((res) => res.json());
  const resultc = await fetch(urlc).then((res) => res.json());
  if (!result.result || !result.result.length || !resultc.result || !resultc.result.length) {
    return {
      props: {
        posts: [],
        cursos: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
        cursos: resultc.result,
      },
    };
  }
};
