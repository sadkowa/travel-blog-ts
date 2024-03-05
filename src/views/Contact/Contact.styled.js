import styled from "styled-components";

const StyledContact = styled.section`
    max-width: 700px;
    margin: 30px auto;

    @media ${({ theme }) => theme.media.tablet} {
        margin: ${({ theme }) => theme.spaces.xxlarge} auto;
    }
`

export default StyledContact