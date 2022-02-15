import styled from "styled-components";

export const Container = styled.div``;

export const Book = styled.div`
  display: flex;
  justify-content: center;

  .contentBook {
    display: grid;
    gap: 1rem;

    @media (min-width: 460px) {
      grid-template-columns: 1fr 1fr;
      margin: 2rem;
    }
    @media (max-width: 460px) {
      max-width: 240px;
      grid-template-columns: 1fr;
    }
  }

  .imgBook {
    display: flex;
    justify-content: center;
    filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
  }

  img {
    @media (max-width: 460px) {
      height: 351px;
    }
    @media (min-width: 460px) {
      height: 512px;
    }
  }

  .infoBook {
    display: flex;
    max-width: 300px;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 1rem;
  }

  .sup {
    display: flex;
    flex-direction: column;
    &:first-child {
      font-size: 28px;
      font-weight: 500;
    }
    span + span {
      font-size: 12px;
      color: #ab2680;
    }

    @media (max-width: 460px) {
      margin-bottom: 1.5rem;
    }
  }

  .mid {
    span {
      font-size: 12px;
    }
    span:first-child {
      font-weight: 500;
    }
    @media (max-width: 460px) {
      margin-bottom: 1.5rem;
    }
  }

  .contentMid {
    display: grid;
    margin-top: 0.5rem;

    grid-template-columns: 1fr 1fr;
  }

  .foot {
    max-width: 349px;

    span {
      font-size: 12px;
      font-weight: 500;
    }

    p {
      margin-top: 0.5rem;
      text-align: justify;
      color: #999999;
      font-size: 12px;
    }
  }
`;

export const Key = styled.span`
  font-weight: 500;
  color: #333333;
`;
export const Value = styled.span`
  color: #999999;
  text-align: right;
`;
