import { Container, Content, Fields, Input, Button, SpanError } from "./styles";

interface Props {
  title: string;
  type: string;
  placeholder?: string;
  titleButton?: string;
  onClickButton?: () => void;
  errorMessage?: string;
}

const TitledInput = (props: Props) => {
  const { title, placeholder, type, onClickButton, titleButton, errorMessage } =
    props;
  return (
    <Container>
      <Content>
        <Fields>
          <label>{title}</label>
          <Input placeholder={placeholder} type={type || "text"} />
        </Fields>
        {titleButton && <Button onClick={onClickButton}>{titleButton}</Button>}
      </Content>
      <SpanError isVisible={!!errorMessage}>{errorMessage}</SpanError>
    </Container>
  );
};

export default TitledInput;
