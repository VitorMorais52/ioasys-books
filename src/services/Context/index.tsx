import React, { createContext, useState, useEffect } from "react";
import API from "../Api";

type UserType = {
  email: string;
  name: string;
  gender: string;
  birthdate: string;
  id: string;
  headers: Record<string, string>;
};

type PropsUserContext = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  storeUser: (newUser: UserType) => void;
  logout: () => void;
  isAuthenticated: () => {};
  getAuth: () => AuthProps;
};

const DEFAULT_VALUE = {
  user: {} as UserType,
  setUser: () => {},
  storeUser: () => {},
  logout: () => {},
  isAuthenticated: () => false,
  getAuth: () => ({
    authorization: "",
    token: "",
  }),
};

type AuthProps = {
  authorization: string;
  token: string;
};

export const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    if (!storagedUser) return;

    const objUser = JSON.parse(storagedUser);
    setUser(objUser);
  }, []);

  const storeUser = (newUser: UserType) => {
    const token = Reflect.get(newUser.headers, "refresh-token");
    setUser(newUser);
    localStorage.setItem("@App:user", JSON.stringify(newUser));
    localStorage.setItem("@App:token", JSON.stringify(token));
  };

  const logout = () => {
    localStorage.removeItem("@App:user");
    setUser({} as UserType);
  };

  function isAuthenticated() {
    const storagedUser = localStorage.getItem("@App:user");
    if (!storagedUser) return false;

    return true;
  }

  function getAuth(): AuthProps {
    const userStoraged = localStorage.getItem("@App:user");
    const tokenStoraged = localStorage.getItem("@App:token");
    if (!userStoraged || !tokenStoraged)
      return { authorization: "", token: "" };

    const objUser = JSON.parse(userStoraged);
    const token = JSON.parse(tokenStoraged);
    const authorization = objUser.headers.authorization;
    return { authorization, token };
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, storeUser, logout, isAuthenticated, getAuth }}
    >
      {children}
    </UserContext.Provider>
  );
};
//
