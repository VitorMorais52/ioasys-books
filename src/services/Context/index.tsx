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
};

const DEFAULT_VALUE = {
  user: {} as UserType,
  setUser: () => {},
  storeUser: () => {},
  logout: () => {},
  isAuthenticated: () => false,
};

export const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    if (!storagedUser) return;

    const objUser = JSON.parse(storagedUser);
    setUser(objUser);

    API.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${objUser.headers.authorization}`;
  }, []);

  const storeUser = (newUser: UserType) => {
    setUser(newUser);

    localStorage.setItem("@App:user", JSON.stringify(newUser));

    API.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${newUser.headers.authorization}`;
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

  return (
    <UserContext.Provider
      value={{ user, setUser, storeUser, logout, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
//
