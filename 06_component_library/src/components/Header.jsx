import { Container, Heading } from "@radix-ui/themes";

function Header() {
  return (
    <Container py="4" align="center" style={{ backgroundColor: "#8e44ad", color: "white" }}>
      <Heading size="4">Alina's Laboratory 2</Heading>
    </Container>
  );
}

export default Header;
