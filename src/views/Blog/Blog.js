import React, {useState} from "react";
import { Wrapper, Article, Pagination, ButtonsSection } from "../../components";
import StyledBlog from "./Blog.styled";
import styled from "styled-components";


const Blog = ({ posts }) => {
    const [page, setPage] = useState(1)
    const paginationLimit = 4

    const pages = Math.ceil(posts.length / paginationLimit)

    const handlePageChange = (text) => {
        if (text === 'Next') {
            setPage(page => page + 1)
        }
        if (text === 'Previous') {
            setPage(page => page - 1)
        }
    }

    return (
        <Wrapper>
            <StyledHeading>All articles</StyledHeading>
            <StyledBlog>
                <Pagination 
                    paginationLimit={paginationLimit}
                    page={page}
                    displayData={posts}
                />
            </StyledBlog>
            {posts.length !== 0 && <ButtonsSection
                page={page}
                pages={pages}
                onPageChange={handlePageChange}
            />}
        </Wrapper>
    )
}

export default Blog

const StyledHeading = styled.h2`
    padding: ${({theme})=> theme.spaces.small};
    margin-top: ${({theme})=> theme.spaces.large};
    font-size: ${({theme})=> theme.fontSizes.small};
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
 
    @media ${({theme})=> theme.media.tablet} {
        font-size: ${({theme})=> theme.fontSizes.medium};
    }
    @media ${({theme})=> theme.media.desktop} {
        margin-top: ${({theme})=> theme.spaces.xxlarge};
        font-size: ${({theme})=> theme.fontSizes.large};
    }
`