import styled from "styled-components";
import backgroundLogin from "../../assets/backgroundLogin.svg";

export const Container = styled.div`
  display: flex;

  align-items: center;
  width: 100vw;
  height: 100vh;

  background-image: url(${backgroundLogin});
  background-size: cover;
  background-position: center;

  @media (min-width: 400px) {
    justify-content: left;
  }

  @media (max-width: 400px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 370px;
  margin: 5vw;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 2.5rem;

  span {
    color: #fff;
    font-weight: 300;
    margin-left: 1rem;
    font-size: 1.75rem;
  }
`;
