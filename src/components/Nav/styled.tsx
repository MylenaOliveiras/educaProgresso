import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-between;
  padding: 12px 36px;

  @media (min-width: 768px) {
    background: linear-gradient(to right, #000, #1231d4);
    position: relative;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 36px;
`;
