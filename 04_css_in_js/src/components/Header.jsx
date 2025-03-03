import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #d5b3e1;
  text-align: center;
  color: white;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Alina`s laborator 2</h1>
    </HeaderWrapper>
  );
}

export default Header;
