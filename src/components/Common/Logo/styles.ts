import styled from "styled-components";

type Props = {
  dark?: boolean;
};

export const Container = styled.div<Props>`
  display: flex;
  justify-content: left;
  align-items: center;

  img {
    ${({ dark }) => dark && "filter: invert(1);"}
  }
  span {
    font-weight: 300;
    margin-left: 1rem;
  }
  color: ${({ dark }) => (dark ? "black" : "white")};
`;
