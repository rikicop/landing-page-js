import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../components/Hero";
// About from "../components/About";
import Services from "../components/Services";
import Acerca from "../components/Acerca";

import { homeObjOne, homeObjFour } from "../DataHero";
//import { articles } from "../data";

import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import CardList from "../components/CardList";
import Navbar from "components/Navbar";
import CursoList from "components/CursoList";

export default function Home({ posts: posts, cursos: cursos }: any) {
  const [mappedPosts, setMappedPosts] = useState([]);
  const [mappedCursos, setMappedCursos] = useState([]);
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
      {/* Problemas Contenido Topline muy largo */}
      {/* <About {...homeObjTwo} />  */}
      <Acerca {...homeObjFour} />
      <Services />
      {/* Blogs */}
      {mappedPosts.length ? (
        <CardList data={mappedPosts} title="Blog" />
      ) : (
        <p>No posts found</p>
      )}
       {/* Cursos */}
      {mappedCursos.length ? (
        <CursoList data={mappedCursos} title="Curso" />
      ) : (
        <p>No Courses found</p>
      )}
      {/* <Portfolio />
      <Testimonials />
      <Products />
      <Newsletter />
      <Blogs /> */}
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
