import React, { useEffect, useState } from "react";

import { Pagination, ButtonsSection } from "../../components";
import StyledBlog from "./Blog.styled";
import styled from "styled-components";
import { useParams, Redirect } from "react-router-dom"

const Blog = ({ posts }) => {
    const [page, setPage] = useState(1)
    const paginationLimit = 4

    const pagesNumber = Math.ceil(posts.length / paginationLimit)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            setPage(Number(id))
        } 
    }, [id])

    if (id > pagesNumber) {
        return <Redirect to='/404.html' />
    }

    const pages = Math.ceil(posts.length / paginationLimit)

    return (
        <>
            <StyledHeading>All articles</StyledHeading>
            <StyledBlog>
                <Pagination 
                    paginationLimit={paginationLimit}
                    page={page}
                    displayData={posts}
                />
            </StyledBlog>
            {pagesNumber > 1 && <ButtonsSection
                page={page}
                pages={pages}
            />}
        </>
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