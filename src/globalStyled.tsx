import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #1231d4, #000);
  font-family: "Montserrat";

  @media (min-width: 768px) {
    background: linear-gradient(to right, #000, #1231d4);
  }
`;

export const Typography = styled.h1.attrs((props) => ({ color: props.color }))`
  color: ${(props) => props.color};
  font-family: "Montserrat";
`;
