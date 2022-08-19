import React from "react";
//import planeta from "../../assets/background.png";
//import imageHero from "../../assets/home4.png";
//import { RiWhatsappFill } from "react-icons/ri";
import { Button, CursoSection } from "./RespElements";

//context API
import { useGlobalContext } from "../slugContext";

//Interface
interface RespProps {
  topLine?: string;
  img?: any;
  alt?: string;
}


const Resp = ({img,alt,topLine}:RespProps) => {
  //context API
  const { checkout , setCheckout } = useGlobalContext();
  console.log("CHECKOUT in SingleCurso: ", checkout);
  return (
    <CursoSection id="hero">
      <div className="text">
        <h1>
          <span className="highlight">{topLine} </span>es tu estrategia de
          publicidad.
        </h1>
        <p>
          Empresa orientada a la publicidad,
          <span className="highlight">exterior visual </span>y
          <span className="highlight"> medios alternativos</span>
        </p>
          <Button value="Inscríbete" onClick={() => setCheckout(true)}>Inscríbete</Button>        
      </div>
      <div className="image">
        <img src={img} alt={alt} />
      </div>
    </CursoSection>
  );
};

export default Resp;


