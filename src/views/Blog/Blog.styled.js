import styled from "styled-components";

const StyledBlog = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 10px auto 40px;

    @media ${({ theme }) => theme.media.tablet} {
        gap: 20px;
    }
    @media ${({ theme }) => theme.media.desktop} {
        gap: 30px;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 30px;
        margin-bottom: 80px;
    }
`

export default StyledBlog