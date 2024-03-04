import React from "react";
import StyledButton from "./Button.styled";

const Button = ({ children, disabled, onPageChange, variant }) => {

    const clickHandler = () => {
        if (children.toLowerCase().includes('read')) {
            return
        }
        onPageChange(children)
    }

    return (
        <StyledButton
            disabled={disabled}
            onClick={clickHandler}
            $variant={variant}>
            {children}
        </StyledButton>
    )
}

export default Button 