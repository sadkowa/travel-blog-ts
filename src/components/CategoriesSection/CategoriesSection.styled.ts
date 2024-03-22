import styled from "styled-components";

const StyledCategoriesSection = styled.section`
    display: flex;
    justify-content: center;
    gap: ${({theme}) => theme.spaces.xsmall} ;
    margin: ${({theme}) => theme.spaces.xlarge}  0 ${({theme}) => theme.spaces.medium} ;

    @media ${props => props.theme.media.tablet} {
        justify-content: end;        
    }
    @media ${props => props.theme.media.desktop} {
        gap: ${({theme}) => theme.spaces.small} ;
        margin-top: ${({theme}) => theme.spaces.xxlarge} 
    }
`

export default StyledCategoriesSection