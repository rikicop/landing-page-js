import Image from "next/image";
import React from "react";
import styled from "styled-components";
import background from "../../assets/portfolio.jpg";

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="background">
        <Image src={background} alt="" />
      </div>
      <div className="content">
        <h1>Buy Premium Pan Free Hand Toast!</h1>
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
          molestias!
        </h2>
        <button>Buy Now</button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 80vh;
  position: relative;
  border-radius: 5rem;
  &:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .background {
    display: flex; /* fill & center */
    justify-content: center; /* fill & center */
    align-items: center; /* fill & center */
    height: 100%;
    min-width: 100%;
    overflow: hidden;
    border-radius: 2rem;
    img {
      flex-shrink: 0; /* fill & center  */
      min-height: 100%; /* fill & center  */
      min-height: 100%; /* fill & center  */
      border-radius: 2rem;
      filter: brightness(60%);
      transition: 0.8s ease-in-out;
      object-fit: fill;
    }
  }
  .content {
    position: absolute;
    top: 25%;
    left: 10%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-size: 3rem;
      width: 60%;
    }
    h2 {
      width: 60%;
    }
    button {
      border: none;
      padding: 1rem 4rem;
      font-size: 1.4rem;
      color: white;
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: linear-gradient(to right, #fc4958, #e85d04);
      text-transform: uppercase;
      &:hover {
        background: linear-gradient(to right, #e85d04, #fc4958);
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    /* display: none; */
    .content {
      h1 {
        width: 90%;
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.2em;
        width: 90%;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
  @media screen and (min-width: 1500px) and (max-width: 3296px) {
    /* display: none; */
    .content {
      left: 30%;
      h1 {
        width: 90%;
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.2em;
        width: 90%;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
`;
