import LoginModal from "../../components/LoginModal";
import { Typography } from "../../globalStyled";
import { LoginContent } from "./styled";

export default function StudentLogin() {
  return (
    <LoginContent>
      <Typography color="#ffffff">Aluno</Typography>
      <LoginModal buttonLabel="Entrar" label={["pin do aluno", "senha"]} />;
    </LoginContent>
  );
}
