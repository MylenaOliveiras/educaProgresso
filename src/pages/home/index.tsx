import { Button, useMediaQuery } from "@mui/material";
import {
  Typography,
  Content,
  Paragraph,
  ButtonGroup,
  OutlineButton,
} from "./styled";
import Nav from "../../components/Nav/Nav";
import { useState } from "react";
import DrawerContent from "../../components/Drawer/Drawer";
import { Container } from "../../globalStyled";

export default function Home() {
  const [open, setOpen] = useState(false);
  const isTabletAndUp = useMediaQuery("(min-width: 768px)");

  const MobileButtonProps = {
    color: "white",
    height: "50px",
    borderColor: "white",
    borderRadius: "10px",
  };

  const DesktopButtonProps = {
    color: "white",
    height: "65px",
    width: "200px",
    borderColor: "white",
    borderRadius: "10px",
  };

  return (
    <Container>
      <Nav icon="menu" onClick={() => setOpen(true)} />
      {!isTabletAndUp && <hr />}
      <Content>
        <Typography>Onde a inovação e a educação se encontram</Typography>
        <Paragraph>
          Transforme sua sede de conhecimento em realizações reais. Faça parte
          da nossa EdTech e escreva seu próprio sucesso.
        </Paragraph>
        <ButtonGroup>
          <OutlineButton
            variant="outlined"
            sx={isTabletAndUp ? DesktopButtonProps : MobileButtonProps}
          >
            Saber mais
          </OutlineButton>
          <Button
            variant="contained"
            sx={isTabletAndUp ? DesktopButtonProps : MobileButtonProps}
          >
            Matricule-se
          </Button>
        </ButtonGroup>
        <DrawerContent open={open} setOpen={() => setOpen(false)} />
      </Content>
    </Container>
  );
}
