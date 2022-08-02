import Image from "next/image";
import React from "react";
import styled from "styled-components";
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import design5 from "../assets/design5.png";
import design6 from "../assets/design6.png";
//import design7 from "../assets/design7.png";
//import design8 from "../assets/design8.png";

function Designs() {
  return (
    <Div>
      <div className="design1">
        <Image src={design1} alt="design" />
      </div>
      <div className="design2">
        <Image src={design2} alt="design" />
      </div>
      <div className="design3">
        <Image src={design3} alt="design" />
      </div>
      <div className="design4">
        <Image src={design4} alt="design" />
      </div>
      <div className="design5">
        <Image src={design5} alt="design" />
      </div>
      <div className="design6">
        <Image src={design6} alt="design" />
      </div>
      {/* <div className="design7">
        <Image src={design7} alt="design" />
      </div>
      <div className="design8">
        <Image src={design8} alt="design" />
      </div> */}
    </Div>
  );
}

export default Designs;

const Div = styled.div`
  position: relative;
  z-index: -1;

  .design1 {
    position: absolute;
    right: 0;
    top: 7rem;
    width: 12rem;
  }
  .design2 {
    position: absolute;
    left: 0;
    top: 4rem;
    width: 8rem;
  }
  .design3 {
    position: absolute;
    left: 0;
    top: 32rem;
    width: 8rem;
  }
  .design4 {
    position: absolute;
    right: 0;
    top: 60rem;
    width: 8rem;
  }
  .design5 {
    position: absolute;
    left: 2rem;
    top: 85rem;
    width: 6rem;
  }
  .design6 {
    position: absolute;
    right: 0;
    top: 78rem;
    width: 12rem;
  }
  .design7 {
    position: absolute;
    left: 0;
    top: 100rem;
    width: 8rem;
  }
  .design8 {
    position: absolute;
    top: 105rem;
    width: 8rem;
    right: 0;
  }
  @media screen and (min-width: 280px) and (max-width: 1140px) {
    display: none;
  }
`;
