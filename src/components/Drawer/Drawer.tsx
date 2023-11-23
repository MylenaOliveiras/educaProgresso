import { Drawer } from "@mui/material";
import { OutlineButton } from "../../pages/home/styled";
import Nav from "../Nav/Nav";
import { IDrawerProps } from "./types";
import { Container } from "../../globalStyled";
import { ButtonContent } from "./styled";
import LoginButton from "../LoginButton/LoginButton";

const HomeButtonProps = {
  color: "white",
  height: "64px",
  width: "276px",
  borderColor: "white",
  borderRadius: "10px",
};

export default function DrawerContent({ open, setOpen }: IDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen()}>
      <Container>
        <Nav icon="close" onClick={() => setOpen()} />
        <hr />
        <ButtonContent>
          <LoginButton />
          <OutlineButton variant="outlined" sx={HomeButtonProps}>
            Profissionais
          </OutlineButton>
          <OutlineButton variant="outlined" sx={HomeButtonProps}>
            Parceiros
          </OutlineButton>
          <OutlineButton variant="outlined" sx={HomeButtonProps}>
            Contatos
          </OutlineButton>
        </ButtonContent>
      </Container>
    </Drawer>
  );
}
