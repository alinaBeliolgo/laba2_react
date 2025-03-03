import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import "./styles.scss";



function App() {
  return (
    <div>
      <Header />
      <main>
        <ArticleList />
      </main>
      <Footer />
    </div>
  );
}


export default App;
