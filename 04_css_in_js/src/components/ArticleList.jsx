import styled from "styled-components";
import Article from "./Article";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px auto;
  width: 100%;
`;

function ArticleList() {
  return (
    <Container>
      <Article title="Первая статья" text="Интересный текст про React" />
      <Article title="Вторая статья" text="Еще один полезный факт" />
      <Article title="Третья статья" text="React позволяет создавать UI эффективно" />
      <Article title="Четвертая статья" text="Стилизация — важная часть работы фронтенд-разработчика" />
    </Container>
  );
}

export default ArticleList;
