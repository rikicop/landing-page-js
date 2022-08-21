import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";

/* Icons */
export const CheckCircle = styled(BsFillCheckCircleFill)`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

/* Button */
type ButtonProps = {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
  @media screen and (max-width: 960px) {
    width: 80%;
    align-self: center;
  }
`;

/* With backGround */
/* background-image: url(${planeta.src});
   background-size: contain;
   background-position: center; 
*/
export const CursoSection = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;;
  align-items: center;
  .text {
    margin: 0 1px;
    /* padding-left: 10rem; BORRAR? */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem; /* Espacios entre los textos de la clase .text{} */
    grid-row: 1; // to change orientation
    grid-column: 2; // to change orientation
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 3.5vw;
     
    }
    p {
      font-size: 1.5vw;
    }
    ul{
      list-style: none;
    }
    li{
     span{
        margin-left: 3px;
     }
    }
  }
  .image {
     grid-column: 1; // to change orientation
    img {
      height: 80%;
    }
  }
 
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;/* Image Up / Text Down */
    height: max-content;
    text-align: left;
    margin: 0 1rem;
    grid-gap: 15px; /* Espacios entre los divs */
    padding: 0 10px;
    
    .image {
      img {
        width: 100%;
      }
    }
    .text {
      h1 {
        font-size: 6vw;   
      }
      p {
        font-size: 5vw;
      }
    }
  }


  /* Too Big Screens, you may have to increase p-left */
  @media screen and (min-width: 1040px) {
    .text {
     /*  padding-left: 4rem; */
      gap: 2.5rem; 
    }

    .image{
      img {
       float: right;/* Arrastra la img a la derecha para pegarla al texto */
       padding-left: 15%;
       padding-right: 5%;
      }
    }
  }

`;
