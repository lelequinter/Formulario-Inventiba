import styled from "styled-components";
import HeaderImg from "../../imgs/background-header.png";
import LogoImg from "../../imgs/logo.png";

export const Container = styled.div`
  align-items: center;
  background: url(${HeaderImg});
  display: flex;
  height: 170px;
  justify-content: center;
`;

export const StyledLogo = styled.div`
  background: url(${LogoImg});
  height: 185px;
  transform: scale(0.5);
  width: 999px;
`;

export const StyledDivider = styled.div`
  background: #063954;
  border-top: 1.5px solid;
  border-color: #9CCA1F;
  height: 50px;
  width: 100%;
`;
