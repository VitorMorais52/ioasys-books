import { Container } from "./styles";
import imgLogo from "../../../assets/logo.svg";

interface LogoProps {
  dark?: boolean;
}

const Logo = ({ dark }: LogoProps): JSX.Element => {
  return (
    <Container dark={dark}>
      <img src={imgLogo} alt="logo" />
      <span>
        <h1>Books</h1>
      </span>
    </Container>
  );
};

export default Logo;
