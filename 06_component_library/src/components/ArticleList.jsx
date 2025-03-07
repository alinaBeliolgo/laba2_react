import Article from "./Article";
import { Container, Flex } from "@radix-ui/themes";

function ArticleList() {
  return (
    <Container size="3" py="4">
      <Flex direction="column" gap="4">
        <Article title="Первая статья" text="Интересный текст про React" />
        <Article title="Вторая статья" text="Еще один полезный факт" />
        <Article title="Третья статья" text="React позволяет создавать UI эффективно" />
        <Article title="Четвертая статья" text="Стилизация — важная часть работы фронтенд-разработчика" />
      </Flex>
    </Container>
  );
}

export default ArticleList;