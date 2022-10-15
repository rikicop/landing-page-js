// MODULES
//import imageUrlBuilder from "@sanity/image-url";
//import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

//DATA STATIC
import { homeObjOne } from "../DataHero";

// COMPONENTS
//import WhatsAppButton from "../components/WhatsAppButton";
//import Services from "../components/Services";
//import Acerca from "../components/Acerca";
//import CardList from "../components/CardList"; este es el blog, por ahora, no se va a utilizar
import Hero from "../components/Hero";
import Navbar from "components/Navbar";
import Features from "components/Features";
import PortfolioList from "components/PortfolioList";
//Sanity Client
import { sanityClient,urlFor } from "sanity";
import { Project } from "typings";

// TYPES
interface Props {
  projects: [Project];
}

export default function Home({projects}: Props) {
  console.log(projects);
 

  return (
    <>
    {/*<WhatsAppButton />*/}
      <Navbar />
      <Hero {...homeObjOne} />
      {/*<Acerca {...homeObjFour} />*/}
      <Features/>
    {/* <Services />*/}
    {/* Portfolio */}
      {<PortfolioList data={projects} title="Cursos" />}
    {/*End Porfolio */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const query = `*[_type == "project"]{
  _id,
  title,
  slug,
  body,
  technologies,
  github,
  vercel
}`;
  
  const projects = await sanityClient.fetch(query);

  
  if(!projects.length){
    return{
      notFound:true,
    }
  }else{
    return{
      props:{
        projects,
      }
    }
  }

  }
