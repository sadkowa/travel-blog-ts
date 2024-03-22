import styled, { css } from "styled-components";

const StyledButton = styled.button.attrs<{ $variant: string }>(props => ({
    $variant: props.$variant
}))`
    min-width: 100px;
    padding: ${({ theme }) => theme.spaces.xsmall} ${({ theme }) =>
	theme.spaces.small};
    font-size: ${({ theme }) => theme.fontSizes.xxxsmall};
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.colors.lightHover};
    background-color: #fff;
    text-transform: uppercase;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightHover};
    }

    ${({ $variant, theme }) =>
			$variant === "dark" &&
			css`
				background-color: ${theme.colors.dark};
				color: ${theme.colors.light};
				border-color: ${theme.colors.dark};

				&:hover {
					background-color: ${theme.colors.darkHover};
				}
				&:disabled {
					background-color: ${theme.colors.lightHover};
					border: 1px solid ${({ theme }) => theme.colors.lightHover};
					cursor: not-allowed;
				}
			`};

    @media ${(props) => props.theme.media.tablet} {
        padding: ${({ theme }) => theme.spaces.small} ${({ theme }) =>
	theme.spaces.medium};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
        font-weight: 400;
        min-width: 140px;
    }
`;

export default StyledButton;
