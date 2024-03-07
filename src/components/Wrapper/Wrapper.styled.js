import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 80px;

    @media ${({ theme }) => theme.media.tablet} {
        padding-bottom: 100px; 
    }
`

export default StyledWrapper