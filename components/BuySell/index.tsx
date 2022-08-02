import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BuySell2 from "../../assets/buy-sell-2.png";
import BuySell3 from "../../assets/buy-sell-3.png";

const BuySell = () => {
  return (
    <Section>
      <div className="row">
        <div className="col" id="buySell2">
          <div className="image-wrapper">
            <Image src={BuySell2} alt="BuySell2" />
          </div>
          <div className="text">
            <h2>
              Incorporamos <span> estrategias </span>
              de comunicación<span> tecnología</span>y recurso humano calificado
            </h2>
          </div>
        </div>
        <div className="col" id="buySell3">
          <div className="text">
            <h2>
              Publicidad <span>comunicacional</span> de
              <span> calidad</span>, servicio personal calificado
            </h2>
          </div>
          <div className="image-wrapper">
            <Image src={BuySell3} alt="BuySell3" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BuySell;

const Section = styled.section`
  margin: 6rem 10rem;
  .row {
    display: flex;
    gap: 8rem;
    flex-direction: column;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        height: 60vh;
      }
      h2 {
        font-size: 3rem;
        span {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 2rem;
      .col {
        flex-direction: column;
        text-align: center;
        img {
          height: 10rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;
