import React from "react";
import StyledHeader from "./Header.styled";
import {MainHeading, NavBar} from '../'

const Header = ({ children }) => {

    return <StyledHeader>
        <NavBar>
        <ul>
          <li>About</li>
          <li>Category</li>
          <li>Contact</li>
        </ul>
      </NavBar>
      <MainHeading text='Welcome at my blog!'/>
    </StyledHeader>
}

export default Header