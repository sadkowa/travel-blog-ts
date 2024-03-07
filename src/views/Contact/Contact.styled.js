import styled from "styled-components";

const StyledContact = styled.section`
    max-width: 700px;
    margin: ${({theme}) => theme.spaces.large} auto;

    @media ${({ theme }) => theme.media.tablet} {
        margin: ${({ theme }) => theme.spaces.xxlarge} auto;
    }
`

export default StyledContact