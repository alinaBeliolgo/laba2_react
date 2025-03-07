import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import { Theme, Container } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import './assets/normalize.css';
import './styles.css';


function App() {
  return (
    <Theme>
      <Container>
        <Header />
        <main>
          <ArticleList />
        </main>
        <Footer />
      </Container>
    </Theme>
  );
}

export default App;