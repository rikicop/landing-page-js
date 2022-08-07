import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";


const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      <meta
        name="keywords"
        content="cursos, python, javascript, programacion, educacion, react, django, next, informatica"
      />
      <meta
        name="description"
        content="Cursos de programacion en python, javascript, html, css"
      />
      <meta charSet="utf-8" />
      
      <title>Dukleen</title>
    </Head>
  );
};

export default Meta;
