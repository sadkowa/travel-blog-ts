import styled from "styled-components";

const StyledButtonsSection = styled.section`
    display: flex;
    padding-bottom: ${({ theme }) => theme.spaces.large};

@media ${({ theme }) => theme.media.tablet} {
    padding-bottom: ${({ theme }) => theme.spaces.xlarge};
}

@media ${({ theme }) => theme.media.desktop} {
    max-width: 1000px;
    padding-bottom: ${({ theme }) => theme.spaces.xxlarge};
}
`

export default StyledButtonsSection