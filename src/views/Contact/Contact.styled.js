import styled from "styled-components";

const StyledContact = styled.section`
    max-width: 800px;
    margin: 20px auto;
    /* height: 50vh; */
    color:red;

    @media ${({ theme }) => theme.media.tablet} {
        margin: ${({ theme }) => theme.spaces.xxlarge} auto;
    }
`

export default StyledContact