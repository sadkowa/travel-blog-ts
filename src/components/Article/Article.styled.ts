import styled from "styled-components";

const StyledArticle = styled.article`
	box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
	background-color: white;
	flex-basis: calc(50% - 5px);

	@media ${({ theme }) => theme.media.desktop} {
		flex-basis: calc(50% - 15px);
	}
`;

export default StyledArticle;
