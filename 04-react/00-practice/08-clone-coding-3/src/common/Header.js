import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  max-width: 1200px;
  height: 68px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: sticky;
  top: 0;

  #icon {
    font-size: 24px;
    padding: 16px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div id="icon">
        <div>☰</div>
      </div>
      <div>
        <h1>My Food</h1>
      </div>
      <div>
        <h1>Mail</h1>
      </div>
    </HeaderContainer>
  );
};

export default Header;
