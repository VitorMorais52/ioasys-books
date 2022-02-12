import React from "react";
import { Container, Content, Fields, Input, Button, SpanError } from "./styles";

interface Props {
  value: string;
  changeValue: (value: string) => void;
  title: string;
  type: string;
  placeholder?: string;
  titleButton?: string;
  onClickButton?: () => void;
  errorMessage?: string;
}

const TitledInput = (props: Props) => {
  const {
    title,
    placeholder,
    type,
    onClickButton,
    titleButton,
    errorMessage,
    value,
    changeValue,
  } = props;

  const setChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue && changeValue(e.target.value);
  };

  return (
    <Container>
      <Content>
        <Fields>
          <label>{title}</label>
          <Input
            value={value}
            onChange={setChangeValue}
            placeholder={placeholder}
            type={type || "text"}
          />
        </Fields>
        {titleButton && <Button onClick={onClickButton}>{titleButton}</Button>}
      </Content>
      <SpanError isVisible={!!errorMessage}>{errorMessage}</SpanError>
    </Container>
  );
};

export default TitledInput;
