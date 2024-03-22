import React, { ReactNode } from "react";
import StyledWrapper from "./Wrapper.styled";

type Props = {
    children: ReactNode
}
const Wrapper = ({ children }: Props) => {

    return <StyledWrapper>{children}</StyledWrapper>
}

export default Wrapper