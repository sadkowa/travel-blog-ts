import styled from "styled-components";

const StyledCategoriesSection = styled.section`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 40px 0 20px;

    @media ${props => props.theme.media.tablet} {
        justify-content: end;        
    }
    @media ${props => props.theme.media.desktop} {
        gap: 20px;
        margin-top: 50px
    }
`

export default StyledCategoriesSection