import React, { ReactNode } from "react";

import StyledButton from "./Button.styled";

type Props = {
	children: ReactNode;
	disabled?: boolean;
	variant?: string;
};

const Button = ({ children, disabled, variant }: Props) => {
	return (
		<StyledButton disabled={disabled} $variant={variant as string}>
			{children}
		</StyledButton>
	);
};

export default Button;
