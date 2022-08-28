import styled from "styled-components";
import img from "../../assets/image-equilibrium.jpg";
import {
  borderRadius,
  colors,
  fontSize,
  fontWidth,
  responsiveWidths,
} from "./VarStyles";

export const Card = styled.section`
  width: 100%;
  max-width: fit-content;
  height: 500px;
  background-color: black;
  padding: 20px;
  border-radius: ${borderRadius.primary};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  

  .card__img {
    height: 44%;
    width: 100%;
    border-radius: ${borderRadius.primary};
    overflow: hidden;
    img{
      height: 100%;
      width: 100%;
      vertical-align:top;
    }

  }

  .card__visible {
    visibility: hidden;
    cursor: pointer;
    opacity: 0;
    transform: translateY(100px);
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .card__visible-icon {
    }
  }

  .card__text-cont {
    margin: 20px 0;
    h3 {
      font-weight: ${fontWidth.semiBold};
      color: ${colors.White};
      font-size: ${fontSize.large};
      margin-bottom: 15px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: ${colors.cyan};
      }
    }
    p {
      font-size: ${fontSize.medium};
      font-weight: ${fontWidth.light};
      color: ${colors.softBlue};
    }
  }
  .card__info-box-left {
    color: #fbaa18; //${colors.cyan}
    gap: 5px;
    font-size: ${fontSize.small};
  }
  .card__info-box-right {
    color: ${colors.softBlue};
    gap: 5px;
    font-size: ${fontSize.small};
  }

  .card__footer {
    border-top: 1px solid #fbaa18;;
    padding: 8px 0;
    margin: 20px 0 0 0;
    .avatar {
      width: 30px;
      height: 30px;
      border: 1px solid ${colors.White};
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    p {
      font-size: ${fontSize.small};
      color: ${colors.softBlue};
      span {
        color: ${colors.White};
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          color: ${colors.cyan};
        }
      }
    }
  }
   .btn-wrapper {
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .btn-read {
      padding: 1rem;
      font-family: inherit;
      font-weight: bold;
      font-size: 1rem;
      margin: 1rem;
      border: 2px solid #ffce74;
      background: transparent;
      color: #fbaa18;
      border-radius: 1rem;
      transition: background 200ms ease-in, color 200ms ease-in;
    }
  }

  @media (max-width: ${responsiveWidths.mabile}) {
    height: 80vh;
    .card__text-cont{
      margin: 10px 0;
    }
    .card__footer{
      padding: 10px 0;
      margin: 5px 0 0 0;
    }
  }
`;

export const BoxShadow = styled.div`
  border-radius: ${borderRadius.primary};
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  flex-direction: ${(props) => props.direction || "row"};
  height: ${({ height }) => height};
  gap: ${(props) => props.gap || "5px"};
`;
