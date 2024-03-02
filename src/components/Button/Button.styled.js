import styled from "styled-components";

const StyledButton = styled.button`
    padding: ${({ theme }) => theme.spaces.xsmall} ${({ theme }) => theme.spaces.small};
    font-size: ${({ theme }) => theme.fontSizes.xxxsmall};
    font-weight: 700;
    border: 1px solid #ccc;
    background-color: #fff;
    text-transform: uppercase;

    &:hover {
        background-color: #f1f1f1
    }

    @media ${props => props.theme.media.tablet} {
        padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.medium};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
        font-weight: 400;
    }
    
`

export default StyledButton