import styled from "styled-components";

const StyledBlog = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme}) => theme.spaces.small};
    width: 100%;
    margin: ${({theme}) => theme.spaces.small} auto ${({theme}) => theme.spaces.xlarge};

    @media ${({ theme }) => theme.media.tablet} {
        gap: ${({theme}) => theme.spaces.medium};
    }
    @media ${({ theme }) => theme.media.desktop} {
        gap: ${({theme}) => theme.spaces.large};
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: ${({theme}) => theme.spaces.large};
        margin-bottom: 80px;
    }
`

export default StyledBlog