import styled from "styled-components";

const StyledAbout = styled.section`
    max-width: 800px;
    margin: 20px auto;

    @media ${({ theme }) => theme.media.tablet} {
        margin: ${({ theme }) => theme.spaces.xxlarge} auto;
    }
`

export default StyledAbout