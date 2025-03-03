import styled from "styled-components";

const ArticleWrapper = styled.article`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%;

  h2 {
    color: #333;
    margin-bottom: 10px;
  }
`;

function Article({ title, text }) {
  return (
    <ArticleWrapper>
      <h2>{title}</h2>
      <p>{text}</p>
    </ArticleWrapper>
  );
}

export default Article;
