import styled from "styled-components";
import HeaderImg from "../../imgs/background-header.png";
import LogoImg from "../../imgs/logo.png";

export const Container = styled.div`
  align-items: center;
  background: url(${HeaderImg});
  display: flex;
  height: 170px;
  justify-content: center;

  @media (max-width: 400px) {
    height: 130px;
  }
`;

export const StyledLogo = styled.div`
  background: url(${LogoImg});
  background-size: cover;
  height: 190px;
  transform: scale(0.5);
  width: 999px;

  @media (max-width: 1000px) {
    height: 70px;
    transform: scale(1);
    width: 370px;
  }

  @media (max-width: 400px) {
    height: 64px;
    transform: scale(1);
    width: 338px;
  }
`;

export const StyledDivider = styled.div`
  background: #063954;
  border-top: 1.5px solid;
  border-color: #9cca1f;
  height: 50px;
  width: 100%;
`;
