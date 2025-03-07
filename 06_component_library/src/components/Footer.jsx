import { Container, Text } from "@radix-ui/themes";

function Footer() {
  return (
    <Container py="3" align="center" style={{ backgroundColor: "#8e44ad", color: "white", marginTop: "30px" }}>
      <Text size="2">&copy; 2025</Text>
    </Container>
  );
}

export default Footer;