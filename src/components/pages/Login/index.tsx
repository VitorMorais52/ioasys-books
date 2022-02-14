import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

//services
import API from "../../../services/Api";
import { UserContext } from "../../../services/Context";

//common components
import TitledInput from "../../common/TitledInput";
import Logo from "../../../components/common/Logo";

//styles
import { Container, Content, Header, Wrapper } from "./styles";

interface UserFields {
  email: string;
  password: string;
}

const Login = () => {
  const initialState = () => ({ email: "", password: "" });
  const [fields, setFields] = useState<UserFields>(initialState);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  const { storeUser } = useContext(UserContext);

  const setLogin = async () => {
    try {
      const response = await API.post("auth/sign-in", {
        ...fields,
      });
      const { data, headers } = response;

      storeUser({ ...data, headers });
      setError("");

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const response = error.response;
        if (response?.status === 401) setError(response?.data.errors.message);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLogin();
  };

  useEffect(() => {
    if (error) setError("");
  }, [fields]);

  return (
    <Container>
      <Content>
        <Header>
          <Logo />
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
                errorMessage={error}
              />
            </Wrapper>
          </form>
        </main>
      </Content>
    </Container>
  );
};
export default Login;
