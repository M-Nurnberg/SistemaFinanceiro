import React from "react";
import * as C from "./styles";
import Logo_SAS from "../../assets/Logo_SAS.png";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Header>
        <C.Title><img src={Logo_SAS} alt="Logo da Empresa"/></C.Title>
        <C.Button onClick={() => [signout(), navigate("/")]}>SAIR</C.Button>
      </C.Header>
    </C.Container>
  );
};

export default Header;
