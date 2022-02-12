import React, { useState, useEffect } from "react";

//common components
import TitledInput from "../Common/TitledInput";

//styles
import { Container, Content, Header, Wrapper } from "./styles";
import imgLogo from "../../assets/logo.svg";

interface UserFields {
  email: string;
  password: string;
}

const Login = () => {
  const initialState = () => ({ email: "", password: "" });

  const [fields, setFields] = useState<UserFields>(initialState);

  return (
    <Container>
      <Content>
        <Header>
          <img src={imgLogo} alt="logo" />
          <span>Books</span>
        </Header>
        <Wrapper>
          <TitledInput
            value={fields.email}
            changeValue={(value) => setFields({ ...fields, email: value })}
            title="Email"
            placeholder="books@ioasys.com.br"
            type="email"
          />
          <TitledInput
            value={fields.password}
            changeValue={(value) => setFields({ ...fields, password: value })}
            title="Senha"
            placeholder="••••••••••••"
            type="password"
            titleButton="Entrar"
            errorMessage="Email e/ou senha incorretos."
          />
        </Wrapper>
      </Content>
    </Container>
  );
};
export default Login;
