import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";


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
