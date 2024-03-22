import styled from "styled-components";
import img from '../../assets/header-img.jpg'


const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 180px;
    margin-top: 60px;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 5px 5px 0 rgba(0,0,0, 0.2);

    @media ${props => props.theme.media.tablet} {
        height: 250px;    
    }
    @media ${props => props.theme.media.desktop} {
        height: 300px;    
    }
`

export default StyledHeader