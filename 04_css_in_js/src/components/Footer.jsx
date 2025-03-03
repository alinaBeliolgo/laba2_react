import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #8466adae;
  padding: 15px;
  font-size: 14px;
  margin-top: 30px;
  text-align: center;
`;

function Footer() {
  return <FooterWrapper>&copy;2025
  </FooterWrapper>;
}

export default Footer;
