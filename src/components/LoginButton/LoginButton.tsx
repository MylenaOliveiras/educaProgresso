import { ChevronRight } from "@mui/icons-material";
import { MenuList, MenuItem, useMediaQuery } from "@mui/material";
import { OutlineButton } from "../../pages/home/styled";
import { useState } from "react";
import { LoginButtonContainer } from "./styled";
import { Link } from "react-router-dom";

const ButtonProps = {
  color: "white",
  height: "64px",
  width: "276px",
  borderColor: "white",
  borderRadius: "10px",
};

const ButtonPropsDesktop = {
  color: "white",
  height: "40px",
  width: "150px",
  borderColor: "white",
  borderRadius: "10px",
};

const options = [
  { id: 1, label: "Aluno", route: "/student" },
  { id: 2, label: "Professor", route: "/teacher" },
  { id: 3, label: "Escola", route: "/school" },
];

export default function LoginButton() {
  const [openLoginOptions, setOpenLoginOptions] = useState(false);
  const isTabletAndUp = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <OutlineButton
        variant="outlined"
        sx={isTabletAndUp ? ButtonPropsDesktop : ButtonProps}
        onClick={() => setOpenLoginOptions(!openLoginOptions)}
      >
        Entrar
        <ChevronRight sx={{ rotate: "90deg" }} />
      </OutlineButton>
      {openLoginOptions && (
        <LoginButtonContainer>
          <MenuList>
            {options.map((option) => (
              <Link to={option.route}>
                <MenuItem key={option.id}>{option.label}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </LoginButtonContainer>
      )}
    </div>
  );
}
