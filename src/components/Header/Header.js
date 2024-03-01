import React from "react";
import StyledHeader from "./Header.styled";

const Header = ({ children }) => {

    return <StyledHeader>
        <nav>
        <ul>
          <li>About</li>
          <li>Category</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Welcome at my blog!</h1>
    </StyledHeader>
}

export default Header