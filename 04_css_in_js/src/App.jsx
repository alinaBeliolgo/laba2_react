import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import styled from "styled-components";

const GlobalWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
`;

const Main = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <GlobalWrapper>
      <Header />
      <Main>
        <ArticleList />
      </Main>
      <Footer />
    </GlobalWrapper>
  );
}

export default App;
