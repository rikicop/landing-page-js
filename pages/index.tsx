// MODULES
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

//DATA STATIC
import { homeObjOne, homeObjFour } from "../DataHero";

// COMPONENTS
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../components/Hero";
//import Services from "../components/Services";
import Acerca from "../components/Acerca";
//import CardList from "../components/CardList"; este es el blog, por ahora, no se va a utilizar
import Navbar from "components/Navbar";
import CursoList from "components/CursoList";
import Features from "components/Features";


export default function Home({cursos: cursos }: any) {
  const [mappedCursos, setMappedCursos] = useState([]);
  useEffect(() => {
    if ( cursos.length) {
      //imgBuilder es una funcion que se encarga de construir la url de la imagen
      //necesario en sanity para que se pueda acceder a la imagen
      const imgBuilderc = imageUrlBuilder({
        projectId: "rfzuszbb",
        dataset: "production",
      });
      
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
      
      setMappedCursos([]);
    }
  }, [cursos]);
  return (
    <>
     {/*  <WhatsAppButton /> */}
      <Navbar />
      <Hero {...homeObjOne} />
      <Acerca {...homeObjFour} />
      <Features/>
   {/*    <Services /> */}
       {/* Cursos */}
       {mappedCursos.length ? (
        <CursoList data={mappedCursos} title="Portfolio" />
      ) : (
        <p>No Courses found</p>
      )} 
       {/*End Cursos */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const queryc = encodeURIComponent('*[_type == "curso"]');
 
  const urlc = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${queryc}`;
  
  const resultc = await fetch(urlc).then((res) => res.json());
  if (!resultc.result || !resultc.result.length) {
    return {
      props: { 
        cursos: [],
      },
    };
  } else {
    return {
      props: { 
        cursos: resultc.result,
      },
    };
  }
};
