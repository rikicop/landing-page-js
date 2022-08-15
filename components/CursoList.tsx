import { IndexPageProps } from "../Interfaces";
//import styles from "../styles/Card.module.css";
import styled from "styled-components";
import CursoItem from "./CursoItem";
const Slide = require("react-reveal/Slide");


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
  gap: 2rem;
  justify-content: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 30rem));
    padding: 1rem;
  }
`;

const Title = styled.h1`
  margin-top: 7rem;
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  align-self: center;
  text-align: center;
`;

const CursoList = ({ data, title }: IndexPageProps) => {
  return (
    <section id="cursos">
      <Slide bottom cascade>
      <Title>{title}</Title>
      <Wrapper>
        {data.map((article, index) => (
          <CursoItem data={article} key={index} />
        ))}
      </Wrapper>
      </Slide>
    </section>
  );
};

export default CursoList;
