import { useContext } from "react";

//services
import { UserContext } from "../../../services/Context";

//styles
import { Container } from "./styles";

const Home = () => {
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <Container>
      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
};

export default Home;
