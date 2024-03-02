import React from "react";
import StyledNavBar from "./NavBar.styled";

const NavBar = (props) => {
    return <StyledNavBar>{props.children}</StyledNavBar>
}

export default NavBar