import styled from "styled-components";
import backgroundLogin from "../../../assets/backgroundLogin.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-image: url(${backgroundLogin});
  background-size: cover;
  background-position: center;

  @media (min-width: 460px) {
    justify-content: left;
  }

  @media (max-width: 460px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 370px;

  @media (min-width: 460px) {
    margin-left: 5vw;
  }

  @media (max-width: 460px) {
    margin: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export const Header = styled.header`
  margin-bottom: 2.5rem;
`;
