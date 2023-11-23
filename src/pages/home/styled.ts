import { Button } from "@mui/material";
import styled from "styled-components";

export const Typography = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: 800;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 70px;
    margin-right: 240px;
  }
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  margin-top: 12px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
    max-width: 780px;
  }
`;

export const Content = styled.section`
  margin-top: 36px;
  padding: 0px 36px;

  @media (min-width: 768px) {
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 36px;
  }
`;

export const OutlineButton = styled(Button)({
  backgroundColor: "white",
});
