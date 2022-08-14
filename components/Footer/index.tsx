import React from "react";
import logo_text from "../../assets/Recurso 7@4x.png";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LowerFooter, Section, ImgContainer, BrandContainer, ContactContainer, Title } from "./FooterElements";

export default function Footer() {
  

  return (
   <>
    <Section id ="footer">
      <BrandContainer>
        <ImgContainer>
          <Image src={logo_text} className="img_logo" alt="Footer Logo" height={50} width={200} />
        </ImgContainer>

        <ul>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
        </ul>

      </BrandContainer>  

      {/* <div className="about container">
        <div className="title"><h3>About us</h3></div>
        <p>
          
        </p>
      </div> */}

      <ContactContainer>

        <Title>
          <h2>Contact us</h2>
        </Title>

        <p>+34 654 765 456</p>
        <p>soporte@dukleen.com</p>

      </ContactContainer>

    </Section>


    <LowerFooter>
      <h2>© 2020 Dukleen. All rights reserved {/* <span>Educación en Línea</span> */}</h2>
    </LowerFooter>
   </>
  );
}

