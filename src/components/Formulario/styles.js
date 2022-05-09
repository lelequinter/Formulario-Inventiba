import styled from "styled-components";
import BgBody from "../../imgs/background-body.jpg";

export const Wrapper = styled.div`
  background: url(${BgBody});
  background-repeat: no-repeat;
  background-size: 100% 55%;
  padding-top: 80px;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 830px;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
`;

export const DivForm = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  margin: 30px 25% 30px 25%;
  width: 50%;
  gap: 15px;

  input {
    border-color: transparent;
    border-radius: 5px;
    border-width: 1px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    height: 35px;
    padding-left: 20px;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      border-width: 1px;
      border-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const DivInputFile = styled.div`
  display: flex;
  align-items: center;
  border-color: transparent;
  border-radius: 5px;
  border-width: 1px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  color: #757575;
  font-size: 16px;
  height: 39px;
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
  }
  h2 {
    display: flex;
    justify-content: center;
    color: #085981;
    font-size: 20px;
    font-weight: 400;
    margin-left: 18%;
    margin-right: 18%;
    margin-top: 0;
  }
`;

export const ButtonsSection = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

export const VoidDiv = styled.div`
  width: 100px;
  height: 39px;
`;
