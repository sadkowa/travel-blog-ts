import React from "react";
import StyledHeader from "./Header.styled";
import {MainHeading, NavBar} from '../'

import { navTitles } from "../../helpers/data"

const Header = () => {

    return <StyledHeader>
        <NavBar>
        <ul>
          {navTitles.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </NavBar>
      <MainHeading text='Welcome at my blog!'/>
    </StyledHeader>
}

export default Header