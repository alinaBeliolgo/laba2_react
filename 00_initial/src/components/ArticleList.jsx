import Article from "./Article"

function ArticleList() {
    return (
      <>
        <Article title="Первая статья" text="Интересный текст про React" />
            <Article title="Вторая статья" text="Еще один полезный факт" />
            <Article title="Третья статья" text="React позволяет создавать UI эффективно" />
            <Article title="Четвертая статья" text="Стилизация — важная часть работы фронтенд-разработчика" />
      </>
    );
  }
  
  export default ArticleList;