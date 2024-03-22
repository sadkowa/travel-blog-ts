import React, { ReactNode } from "react";
import StyledNavBar from "./NavBar.styled";

type Props = {
	children: ReactNode;
};
const NavBar = ({ children }: Props) => {
	return <StyledNavBar>{children}</StyledNavBar>;
};

export default NavBar;
