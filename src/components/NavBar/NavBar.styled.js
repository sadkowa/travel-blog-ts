import styled from "styled-components";

const StyledNavBar = styled.nav`
    position: fixed;
    height: 70px;
    width: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.16), 0 5px 10px 0 rgba(0,0,0,0.12);
    background-color: rgba(250,250,250,0.8);
    backdrop-filter: blur(3px);
    z-index: 1;
`

export default StyledNavBar