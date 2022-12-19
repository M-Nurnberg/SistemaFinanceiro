import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: #152531;
`;

export const Header = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: flex-start;

`;

export const Title = styled.div`
  padding-right: 1200px;
  padding-top: 10px;
  
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  position: fixed
  right: 10px;
  height: 35px;  
  width: 100px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #d69e41;
`;