import Login from "./components/Login";
import Home from "./components/Home";

import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <Login />
      {/* <Home /> */}
      <GlobalStyle />
    </div>
  );
};

export default App;
