import Image from "next/image";
import React from "react";
import styled from "styled-components";
import background from "../../assets/portfolio.jpg";
export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="background">
        <Image src={background} alt="" />
        <div className="content">
          <h1>Buy Premium Pan Free Hand Toast!</h1>
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
            molestias!
          </h2>
          <button>Buy Now</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
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
    position: relative;
    height: 100%;
    max-width: 80%;
    overflow: hidden;
    border-radius: 1rem;
    object-position: center;
    display: inline-block;
    margin: auto;
    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      font-weight: bold;
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
        padding: 1rem 3rem;
        font-size: 1.2rem;
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
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    height: 100%;
    .background {
      /* display: none; */
      .content {
        top: 60%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        h1 {
          width: 90%;
          font-size: 1rem;
        }
        h2 {
          font-size: 1em;
          width: 90%;
        }
        button {
          padding: 1rem 1rem;
          font-size: 0.8rem;
        }
      }
    }
  }
`;
