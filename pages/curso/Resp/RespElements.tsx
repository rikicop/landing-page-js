import styled from "styled-components";

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


/* Esto iria dentro de seccion  */
/* Si quisieras un backGround */
/* background-image: url(${planeta.src}); */
export const CursoSection = styled.section`
  /* background-image: none; 
     background-repeat: no-repeat; 
     background-size: contain;
     background-position: center; */
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;
  .text {
    margin: 0 10px;
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 4.8vw;
    }
    p {
      font-size: 1.5vw;
    }
  }
  .image {
    img {
      width: 80%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    text-align: left;
    margin: 0 1rem;
    grid-gap: 15px;
    padding: 0px 10px;
    
    .image {
      img {
        width: 100%;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: left;
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 5vw;
      }
    }
  }
`;
