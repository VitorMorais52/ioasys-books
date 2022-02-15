import styled from "styled-components";

import imgBackground from "../../../assets/backgroundHome.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-bottom: 2.5rem;
  justify-content: center;

  background-image: url(${imgBackground});
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  width: 1365px;
  margin: 0 1rem;
`;

export const Header = styled.div`
  display: flex;
  margin: 2.5rem 0;
  justify-content: space-between;

  span {
    font-size: 12px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    @media (max-width: 720px) {
      display: none;
    }
  }
`;

export const UserName = styled.span`
  margin-right: 1rem;
  font-size: 12px;
  font-weight: bold;
`;

export const IconButton = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
`;

export const Main = styled.div`
  width: 100%;
`;

export const GridBooks = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 1365px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1364px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1035px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 590px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NavGrid = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  font-size: 12px;
  font-weight: 500;

  @media (min-width: 460px) {
    justify-content: flex-end;
  }
  @media (max-width: 460px) {
    justify-content: center;
  }

  span {
    margin-right: 1rem;
  }

  .navButtons {
    display: flex;
    div + div {
      margin-left: 1rem;
    }
  }
`;

export const Book = styled.div`
  color: black;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  cursor: pointer;

  .contentBook {
    display: flex;
    margin: 1rem;
  }

  .imgBook {
    display: flex;
    filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
  }

  img {
    height: 130px;
  }

  .infoBook {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
  }

  .foot,
  .sup {
    display: flex;
    flex-direction: column;
  }

  .foot span {
    font-size: 12px;
    color: #999999;
  }

  .sup {
    &:first-child {
      font-size: 14px;
      font-weight: 500;
    }
    span + span {
      font-size: 12px;
      color: #ab2680;
    }
  }
`;
