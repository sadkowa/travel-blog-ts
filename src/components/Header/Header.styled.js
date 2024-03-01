import styled from "styled-components";
import img from '../../assets/header-img.jpg'

const StyledHeader = styled.header`
    width: 100%;
    height: 400px;
    margin-top: 70px;
    background-image: url(${img});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
`

export default StyledHeader