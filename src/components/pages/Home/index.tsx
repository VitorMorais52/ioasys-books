import { useContext, useEffect, useState } from "react";

//services
import { UserContext } from "../../../services/Context";
import useApi from "../../../services/Hooks/useApi";

//components
import Logo from "../../../components/common/Logo";
import iconLogout from "../../../assets/iconLogout.svg";
import imgDefaultBook from "../../../assets/defaultBook.svg";
import iconArrowLeft from "../../../assets/arrowLeft.svg";
import iconArrowRight from "../../../assets/arrowRight.svg";

//styles
import {
  Container,
  Content,
  Header,
  Main,
  UserInfo,
  UserName,
  IconButton,
  GridBooks,
  Book,
  NavGrid,
} from "./styles";

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

type BooksProps = {
  data: BookProps[];
  page: number;
  totalItems: number;
  totalPages: number;
};

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { user, logout } = useContext(UserContext);

  const { data: books, isFetching } = useApi<BooksProps>("/books", {
    params: {
      page: currentPage,
      amount: 12,
    },
  });

  const handleLogout = () => {
    logout();
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (books?.totalPages && currentPage < books?.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <Content>
        <Header>
          <Logo dark={true} />
          <UserInfo>
            <span>
              Bem vindo, <UserName>{user.name}!</UserName>
            </span>
            <IconButton onClick={handleLogout}>
              <img src={iconLogout} alt="logout" />
            </IconButton>
          </UserInfo>
        </Header>
        <Main>
          <GridBooks>
            {isFetching && <p>Loading...</p>}

            {books?.data.map((book: BookProps, index) => {
              return (
                <Book key={index}>
                  <div className="contentBook">
                    <div className="imgBook">
                      <img
                        src={book.imageUrl || imgDefaultBook}
                        alt="book"
                      ></img>
                    </div>
                    <div className="infoBook">
                      <div className="sup">
                        <span>{book.title}</span>
                        <span>{book.authors.join(", ")}</span>
                      </div>
                      <div className="foot">
                        <span>{book.pageCount} páginas</span>
                        <span>Editora {book.publisher}</span>
                        <span>Publicado em {book.published}</span>
                      </div>
                    </div>
                  </div>
                </Book>
              );
            })}
          </GridBooks>
          <NavGrid>
            <span>
              Página {currentPage} de {Math.round(books?.totalPages || 0)}
            </span>
            <div className="navButtons">
              <IconButton onClick={() => prevPage()}>
                <img src={iconArrowLeft} alt="navigate previous page" />
              </IconButton>
              <IconButton onClick={() => nextPage()}>
                <img src={iconArrowRight} alt="navigate next page" />
              </IconButton>
            </div>
          </NavGrid>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
