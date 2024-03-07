import React, { useEffect, useState } from "react";

import { Pagination, ButtonsSection, CategoriesSection } from "../../components";
import StyledBlog from "./Blog.styled";

import { useParams, Redirect } from "react-router-dom"
import { filterArticles } from "../../helpers/functions";

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

            const filteredPosts = filterArticles([...posts], category)
   
            setPostsToDisplay(filteredPosts)
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
            <CategoriesSection
                categories={categories}
                currentCategory={category}
                setPage={setPage} />
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