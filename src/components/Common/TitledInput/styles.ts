import styled from "styled-components";

interface SpanErrorProps {
  isVisible?: Boolean;
}

export const Container = styled.div`
  @media (max-width: 400px) {
    width: 100%;
  }

  label {
    color: #fff;
    font-size: 0.75rem;
    opacity: 0.5;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  border-radius: 4px;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
`;

export const Fields = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`;

export const Input = styled.input`
  color: white;
  background: transparent;
  border: none;
  outline: none;
  ::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  width: 85px;
  height: 36px;
  color: #b22e6f;

  border: none;
  border-radius: 44px;
  cursor: pointer;
`;
export const SpanError = styled.span<SpanErrorProps>`
  min-width: 120px;
  height: 40px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;

  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  border-radius: 4px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);

  &:after {
    content: "";
    bottom: 100%;
    left: 8%;
    margin-left: -5px;
    position: absolute;

    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.4) transparent;
  }

  z-index: 1;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;
