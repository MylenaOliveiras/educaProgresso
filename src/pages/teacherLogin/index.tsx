import LoginModal from "../../components/LoginModal";
import { Typography } from "../../globalStyled";
import { LoginContent } from "../studentLogin/styled";

export default function TeacherLogin() {
  return (
    <LoginContent>
      <Typography color="#ffffff">Professor(a)</Typography>
      <LoginModal
        buttonLabel="Entrar"
        label={["pin da instituição", "senha"]}
      />
      ;
    </LoginContent>
  );
}
