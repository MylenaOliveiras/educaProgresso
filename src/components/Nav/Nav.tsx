import { IconButton, useMediaQuery } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { NavContainer, List } from "./styled";
import { INavProps } from "./types";
import LoginButton from "../LoginButton/LoginButton";

const iconProperts = { color: "#ffff", fontSize: 35 };

export default function Nav({ icon, onClick }: INavProps) {
  const isTabletAndUp = useMediaQuery("(min-width: 768px)");

  return !isTabletAndUp ? (
    <NavContainer>
      <img src="../images/icon.png" />
      <IconButton onClick={onClick}>
        {icon === "menu" && <Menu sx={iconProperts} />}
        {icon === "close" && <Close sx={iconProperts} />}
      </IconButton>
    </NavContainer>
  ) : (
    <NavContainer>
      <img src="../images/icon.png" />
      <List>
        <li>Sobre nós</li>
        <li>Profissionais</li>
        <li>Escolas parceiras</li>
        <li>Contatos</li>
      </List>
      <LoginButton />
    </NavContainer>
  );
}
