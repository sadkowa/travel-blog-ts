import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.dark};;
    font-size: ${({ theme }) => theme.fontSizes.xxxsmall};
    color: ${({ theme }) => theme.colors.light};

    @media ${({ theme }) => theme.media.tablet} {
        height: 100px;
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
    }

    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
    }
`

export default StyledFooter