import LoginModal from "../../components/LoginModal";
import { Typography } from "../../globalStyled";
import { LoginContent } from "../studentLogin/styled";

export default function SchoolLogin() {
  return (
    <LoginContent>
      <Typography color="#ffffff">Escola</Typography>
      <LoginModal
        buttonLabel="Entrar"
        label={["pin da instituição", "senha"]}
      />
      ;
    </LoginContent>
  );
}
