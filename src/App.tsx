import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { UserContext } from "./services/Context";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

import { GlobalStyle } from "./styles/global";

const App = () => {
  const { isAuthenticated } = useContext(UserContext);

  const RequireAuth = () => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
};

export default App;
