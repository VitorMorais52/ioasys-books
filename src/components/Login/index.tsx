//common components
import TitledInput from "../Common/TitledInput";

//styles
import { Container, Content, Header, Wrapper } from "./styles";
import imgLogo from "../../assets/logo.svg";

const Login = () => {
  return (
    <Container>
      <Content>
        <Header>
          <img src={imgLogo} alt="logo" />
          <span>Books</span>
        </Header>
        <Wrapper>
          <TitledInput
            title="Email"
            placeholder="books@ioasys.com.br"
            type="email"
          />
          <TitledInput
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
