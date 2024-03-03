import styled from "styled-components";

const StyledBlog = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;

    @media ${({ theme }) => theme.media.desktop} {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

export default StyledBlog