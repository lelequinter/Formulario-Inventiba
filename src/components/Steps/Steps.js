import React from "react";
import { StepsContainer } from "./styles";
import './styles.css'

export const Steps = ({ step }) => {
  return (
    <StepsContainer>
      <p>Paso</p>
      <span className={`${step === 1 ? "step" : ""}`}>1</span>
      <span className={`${step === 2 ? "step" : ""}`}>2</span>
      <span className={`${step === 3 ? "step" : ""}`}>3</span>
    </StepsContainer>
  );
};
