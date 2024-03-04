import React from "react";

import StyledButton from "./Button.styled";

const Button = ({ children, disabled, variant }) => {

    return (
        <StyledButton
            disabled={disabled}
            $variant={variant}>
            {children}
        </StyledButton>
    )
}

export default Button 