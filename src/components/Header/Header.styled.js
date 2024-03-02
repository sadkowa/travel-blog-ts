import styled from "styled-components";
import img from '../../assets/header-img.jpg'

const StyledHeader = styled.header`
    width: 100%;
    height: 300px;
    margin-top: 70px;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default StyledHeader