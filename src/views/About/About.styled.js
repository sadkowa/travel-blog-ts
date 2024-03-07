import styled from "styled-components";

const StyledAbout = styled.section`
    max-width: 800px;
    margin: ${({theme}) => theme.spaces.medium} auto;

    @media ${({ theme }) => theme.media.tablet} {
        margin: ${({ theme }) => theme.spaces.xxlarge} auto;
    }
`

export default StyledAbout