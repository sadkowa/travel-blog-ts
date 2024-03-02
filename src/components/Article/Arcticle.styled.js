import styled from "styled-components";

const StyledArticle = styled.article`
    margin: ${({ theme }) => theme.spaces.medium};
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    background-color: white;
`

export default StyledArticle