import React from "react";
import StyledMainHeading from "./MainHeading.styled";

type Props = {
	text: string;
};

const MainHeading = (props: Props) => {
	return <StyledMainHeading>{props.text}</StyledMainHeading>;
};

export default MainHeading;
