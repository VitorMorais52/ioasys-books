import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

//services
import API from "../../../services/Api";
import { UserContext } from "../../../services/Context";

//common components
import TitledInput from "../../common/TitledInput";

//styles
import { Container, Content, Header, Wrapper } from "./styles";
import imgLogo from "../../../assets/logo.svg";

interface UserFields {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { storeUser } = useContext(UserContext);

  const initialState = () => ({ email: "", password: "" });
  const [fields, setFields] = useState<UserFields>(initialState);

  const setLogin = async () => {
    try {
      const response = await API.post("auth/sign-in", {
        email: "desafio@ioasys.com.br",
        password: "12341234",
      });
      const { data, headers } = response;

      storeUser({ ...data, headers });

      navigate("/");
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLogin();
  };

  return (
    <Container>
      <Content>
        <Header>
          <img src={imgLogo} alt="logo" />
          <span>Books</span>
        </Header>
        <main>
          <form autoComplete="on" onSubmit={handleSubmit}>
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
                changeValue={(value) =>
                  setFields({ ...fields, password: value })
                }
                title="Senha"
                placeholder="••••••••••••"
                type="password"
                titleButton="Entrar"
                typeButton={"submit"}
                errorMessage="Email e/ou senha incorretos."
              />
            </Wrapper>
          </form>
        </main>
      </Content>
    </Container>
  );
};
export default Login;
