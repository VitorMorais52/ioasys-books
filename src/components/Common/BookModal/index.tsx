import { useState, useEffect } from "react";
import Modal from "react-modal";

import { Container, Book, Key, Value } from "./styles";
import { useMediaQuery } from "react-responsive";

import imgDefaultBook from "../../../assets/defaultBook.svg";

type BookProps = {
  authors: Array<String>;
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
};

interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  book: BookProps | undefined;
}

Modal.setAppElement("#root");

const BookModal = ({ isOpen, onRequestClose, book }: BookModalProps) => {
  const initialState = {
    overlay: {
      overflow: "scroll",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "0px 16px 80px rgba(0, 0, 0, 0.32)",
    },
  };

  const [customStylesModal, setCustomStylesModal] = useState(initialState);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 460px)",
  });

  useEffect(() => {
    if (!isDesktopOrLaptop)
      setCustomStylesModal({
        ...customStylesModal,
        content: { ...customStylesModal.content, top: "80%" },
      });
    else
      setCustomStylesModal({
        ...customStylesModal,
        content: { ...customStylesModal.content, top: "50%" },
      });
  }, [isDesktopOrLaptop]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStylesModal}
    >
      <Container>
        <Book>
          <div className="contentBook">
            <div className="imgBook">
              <img src={book?.imageUrl || imgDefaultBook} alt="book"></img>
            </div>
            <div className="infoBook">
              <div className="sup">
                <span>{book?.title}</span>
                <span>{book?.authors.join(", ")}</span>
              </div>
              <div className="mid">
                <span>INFORMAÇÕES</span>
                <div className="contentMid">
                  <Key>Páginas</Key>
                  <Value> {book?.pageCount} páginas</Value>
                  <Key>Editora </Key> <Value>Editora {book?.publisher}</Value>
                  <Key>Publicação </Key>
                  <Value>{book?.published}</Value>
                  <Key>Idioma </Key>
                  <Value>{book?.language}</Value>
                  <Key>Título Original </Key>
                  <Value>{book?.title}</Value>
                  <Key>ISBN-10 </Key>
                  <Value>{book?.isbn10}</Value>
                  <Key>ISBN-13 </Key>
                  <Value>{book?.isbn13}</Value>
                </div>
              </div>
              <div className="foot">
                <span>RESENHA DA EDITORA</span>
                <p>{book?.description}</p>
              </div>
            </div>
          </div>
        </Book>
      </Container>
    </Modal>
  );
};

export default BookModal;
