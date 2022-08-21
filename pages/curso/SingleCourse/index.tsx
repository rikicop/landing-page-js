import React from "react";
import { Button, CheckCircle, CursoSection } from "./SingleCElements";

//context API
import { useGlobalContext } from "../slugContext";

//Interface
interface RespProps {
  topLine?: string;
  img?: any;
  alt?: string;
}


const SingleCourse = ({img,alt,topLine}:RespProps) => {
  //context API
  const { checkout , setCheckout } = useGlobalContext();
  console.log("CHECKOUT in SingleCurso: ", checkout);
  return (
    <CursoSection id="hero">
      <div className="text">
        <h1>
          <span className="highlight">{topLine} </span>es el curso que estás 
          buscando
        </h1>
        <p>
          Empresa orientada a la publicidad,
          <span className="highlight"> exterior visual </span>y
          <span className="highlight"> medios alternativos</span>
        </p>
        <ul>
         <li><CheckCircle /><span>Curso de 4 semanas</span></li>
         <li><CheckCircle /><span>Clases en vivo</span></li>
         <li><CheckCircle /><span>Clases grabadas</span></li>  
        </ul>
          <Button value="Inscríbete" onClick={() => setCheckout(true)}>Inscríbete</Button>        
      </div>
      <div className="image">
        <img src={img} alt={alt} />
      </div>
    </CursoSection>
  );
};

export default SingleCourse;


