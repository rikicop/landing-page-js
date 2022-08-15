import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../assets/Logo nuevo 1.png";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { Link as LinkScroll } from "react-scroll";

import {Fade as Efecto} from "react-reveal";

// Styled Components
import { Nav, LinksContainerNav, TextLogoNav, LogoImg } from "../Navbar/NavbarElements.jsx"

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <Nav>
      <div className="brand">
        <LogoImg className="logo">
          <Image
            src={logo}
            alt="Dukleen"
            className="brandLogo"
            height={50}
            width={50}
          />
        </LogoImg>

        <TextLogoNav>
          <Efecto left cascade duration={3000}>DUKLEEN</Efecto>
        </TextLogoNav>

        <div className="toggle">
          {navState ? (
            <BsToggleOn
              onClick={() => setNavState(false)}
              color="var(--primary-color)"
            />
          ) : (
            <BsToggleOff
              onClick={() => setNavState(true)}
              color=" var(--primary-color)"
            />
          )}
        </div>
      </div>
      <LinksContainerNav className={`links ${navState ? "show" : "hide"}`}>
        <ul>
          <LinkScroll
            to="hero"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li><Efecto left cascade>Principal</Efecto></li>
          </LinkScroll>
          <LinkScroll
            to="blog"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li><Efecto left cascade duration={2000}>Blog</Efecto></li>
          </LinkScroll>

          <LinkScroll
            to="servicios"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li><Efecto left cascade>Servicios</Efecto></li>
          </LinkScroll>

          <LinkScroll
            to="footer"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li><Efecto left cascade>Contacto</Efecto></li>
          </LinkScroll>
        </ul>
      </LinksContainerNav>
    </Nav>
  );
};

export default Navbar;
