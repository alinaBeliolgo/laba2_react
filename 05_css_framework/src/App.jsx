import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
//import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <ArticleList />
      </main>
      <Footer />
    </div>
  );
}

export default App;