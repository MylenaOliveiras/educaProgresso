import { Avatar, Button, Stack, TextField } from "@mui/material";
import { LoginContent } from "./styled";
import { LoginModalProps } from "./types";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export default function LoginModal({ label, buttonLabel }: LoginModalProps) {
  return (
    <LoginContent>
      <Stack>
        <Link to="/">
          <ArrowBack sx={{ fontSize: 25 }} />
        </Link>
      </Stack>
      <Stack gap={4} alignItems="center">
        <Avatar sx={{ width: 104, height: 104, bgcolor: "black" }} />
        {label.map((item) => (
          <TextField label={item} variant="outlined" />
        ))}
        <Button variant="contained" sx={{ bgcolor: "#1A00B8" }}>
          {buttonLabel}
        </Button>
      </Stack>
    </LoginContent>
  );
}
