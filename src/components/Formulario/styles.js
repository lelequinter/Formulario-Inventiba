import styled from "styled-components";
import BgBody from "../../imgs/background-body.jpg";

export const Wrapper = styled.div`
  background: url(${BgBody});
  background-repeat: no-repeat;
  background-size: 100% 55%;
  padding-top: 80px;

  @media (max-width: 400px) {
    padding-top: 30px;
  }
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  // height: 830px;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;

  @media (max-width: 400px) {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  }
`;

export const DivForm = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  margin: 30px 25% 30px 25%;
  width: 50%;

  @media (max-width: 420px) {
    margin: 30px 5% 30px 5%;
    width: 90%;
  }

  input {
    border-color: transparent;
    border-radius: 5px;
    border-width: 1px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    height: 35px;
    padding-left: 20px;
    auto-complete: none;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      border-width: 1px;
      border-color: rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 420px) {
      height: 30px;
      font-size: 14px;
    }
  }

  select {
    border-color: transparent;
    border-radius: 5px;
    border-width: 1px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    height: 39px;
    padding-left: 20px;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      border-width: 1px;
      border-color: rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 420px) {
      height: 34px;
      font-size: 14px;
    }
  }
`;

export const StyledError = styled.label`
  height: 15px;
  font-size: 13px;
  margin: 5px 0 9px 0;
  color: red;
  font-weight: bold;
  font-style: italic;
`;

export const DivInputFile = styled.div`
  display: flex;
  align-items: center;
  border-color: transparent;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  color: #757575;
  font-size: 16px;
  height: 37px;
  justify-content: start;
  padding-left: 20px;

  &:hover {
    input {
      opacity: 1;
    }
  }

  input {
    box-shadow: none;
    height: auto;
    padding: 0;
    margin-left: 10px;
    max-width: 322px;
    opacity: 0;
  }
  @media (max-width: 420px) {
    height: 32px;
    font-size: 14px;
  }
`;

export const DivInputDate = styled.div`
  display: flex;
  align-items: center;
  border-color: transparent;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-style: solid;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  color: #757575;
  font-size: 16px;
  height: 37px;
  justify-content: start;
  padding-left: 20px;

  &:hover,
  &:focus,
  &:active {
    input {
      opacity: 1;
      outline: none;
      border-color: transparent;
      border-width: 0;
    }
  }

  input {
    box-shadow: none;
    height: auto;
    padding: 0;
    margin-left: 10px;
    max-width: 322px;
    opacity: 0;
    border-width: 0;
    outline: none;
    border-color: transparent;
  }

  @media (max-width: 420px) {
    height: 32px;
    font-size: 14px;
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    justify-content: center;
    color: #085981;
    font-size: 35px;
    font-weight: 400;

    @media (max-width: 400px) {
      font-size: 30px;
    }
  }
  h2 {
    display: flex;
    justify-content: center;
    color: #085981;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    margin-left: 18%;
    margin-right: 18%;
    margin-top: 0;
    text-align: center;

    @media (max-width: 400px) {
      font-size: 16px;
    }
  }
`;

export const ButtonsSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
  height: 35px;
`;

export const Button = styled.button`
  align-items: center;
  background: #00a3ff;
  border-color: transparent;
  border-radius: 10px;
  border-width: 1px;
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 15px;
  height: 35px;
  justify-content: space-around;
  width: 150px;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border-width: 1px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 420px) {
    width: 110px;
  }
`;

export const VoidDiv = styled.div`
  width: 100px;
  height: 39px;
  @media (max-width: 420px) {
    height: 34px;
    font-size: 14px;
  }
`;
