import styled from "styled-components";

const StyledArticlePage = styled.section`
    @media ${({ theme }) => theme.media.tablet} {
        margin: ${({ theme }) => theme.spaces.xlarge} 0;
    }
    @media ${({ theme }) => theme.media.desktop} {
        margin: ${({ theme }) => theme.spaces.xxxlarge} 0;
    }
`

export default StyledArticlePage