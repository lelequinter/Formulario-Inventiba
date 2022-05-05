import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 30px;
  width: 70%;
`;

export const DivForm = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  margin: 30px 15% 30px 15%;
  width: 70%;
  gap: 15px;

  input {
    border-color: transparent;
    border-radius: 5px;
    border-width: 1px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    height: 35px;
    padding-left: 20px;
    width: 95%;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      border-width: 1px;
      border-color: rgba(0, 0, 0, 0.4);
    }
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
  justify-content: center;
  width: 120px;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border-width: 1px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  }
`;
