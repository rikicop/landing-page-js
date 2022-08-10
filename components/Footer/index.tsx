import React from "react";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LowerFooter, Section } from "./FooterElements";

export default function Footer() {
  

  return (
   <div className="footer">
    <Section id ="footer">
      <div className="brand container">
        <div className="img_container">
          <Image src={logo} className="img_logo" alt="Footer Logo" height={120} width={400} />
        </div>       
        <p>
          From Tron to Narnya, the idea to suddenly be transferred in another
        </p>
        <ul>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
          <li><FaTwitter/></li>
        </ul>
      </div>  
      <div className="about container">
        <div className="title"><h3>About us</h3></div>
        <p>
          From Tron to Narnya, the idea to suddenly be transferred in another
          world, where you could move, feel, interact and communicate is a
          recurring theme in books, animes and movies.
        </p>
      </div>
      <div className="contact container">
        <div className="title"><h3>Contact us</h3></div>
        <p> +34 654 765 456</p>
        <p> dukleen@gmail.com </p>
        <p> @dukleen </p>
        <p> 412 Street, Gorund Floor, Ciudad Ojeda </p>
      </div>
    </Section>
    <LowerFooter className="lower__footer">
      <h2>© 2020 Dukleen. All rights reserved <span>Educación en Línea</span></h2>
    </LowerFooter>
   </div>
  );
}

