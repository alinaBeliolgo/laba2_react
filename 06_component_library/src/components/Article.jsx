import "@radix-ui/themes/styles.css";
import { Theme, Card, Container, Heading, Text, Flex } from "@radix-ui/themes";

function Article({ title, text }) {
  return (
    <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
      <Heading size="3" style={{ marginBottom: "8px" }}>{title}</Heading>
      <Text>{text}</Text>
    </Card>
  );
}

export default Article;