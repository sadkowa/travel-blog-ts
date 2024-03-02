import styled from "styled-components";

const StyledMainHeading = styled.h1`
    padding: ${({theme})=> theme.paddings.small};
    margin-bottom: ${({theme})=> theme.paddings.xlarge};
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Dancing Script", cursive;
    font-weight: 700;
    font-size: ${({theme})=> theme.fontSizes.xlarge};
    text-align: center;
    backdrop-filter: blur(2px);
 
    @media ${({theme})=> theme.media.tablet} {
        font-size: ${({theme})=> theme.fontSizes.xxlarge};
    }
    @media ${({theme})=> theme.media.desktop} {
        font-size: ${({theme})=> theme.fontSizes.xxxlarge};
    }
`

export default StyledMainHeading