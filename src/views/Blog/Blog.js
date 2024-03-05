import React, { useEffect, useState } from "react";

import { Pagination, ButtonsSection, CategoriesSection } from "../../components";
import StyledBlog from "./Blog.styled";
import styled from "styled-components";
import { useParams, Redirect } from "react-router-dom"
import { getData } from "../../helpers/functions";

const Blog = ({ posts, categories }) => {
    const { id, category } = useParams()

    const [page, setPage] = useState(1)
    const [postsToDisplay, setPostsToDisplay] = useState(posts)
    const [categoryToDisplay, setCategoryToDisplay] = useState(category)

    const paginationLimit = 4
    const pagesNumber = Math.ceil(postsToDisplay.length / paginationLimit)

    const pages = Math.ceil(postsToDisplay.length / paginationLimit)

    useEffect(() => {
        if (id) {
            setPage(Number(id))
        } else setPage(1)
    }, [id, pagesNumber])

    useEffect(() => {
        if (category) {

            const newPostsArr = [...posts]
            setPostsToDisplay(newPostsArr.filter(post => {
                const { categoryName } = getData(post.data)

                return categoryName === category
            }))
            setCategoryToDisplay(category)

        } else {
            setPostsToDisplay(posts)
            setCategoryToDisplay(null)
        }
    }, [category, posts, categories])

    if (category) {
        if (categories.indexOf(category) === -1) {
            return <Redirect to='/404.html' />
        }
    } 

    if (id > pagesNumber) {
        return <Redirect to='/404.html' />
    }

    return (
        <>
            {/* {posts === postsToDisplay && <StyledHeading>All articles</StyledHeading>} */}
            <CategoriesSection categories={categories} setPage={setPage} />
            <StyledBlog>
                <Pagination 
                    paginationLimit={paginationLimit}
                    page={page}
                    displayData={postsToDisplay}
                />
            </StyledBlog>
            {pagesNumber > 1 && <ButtonsSection
                category={categoryToDisplay}
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