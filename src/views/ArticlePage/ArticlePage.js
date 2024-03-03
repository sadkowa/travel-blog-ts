import React from "react"
import { Article } from "../../components"
import { useParams } from "react-router-dom"

import StyledArticlePage from "./ArticlePage.styled"

const ArticlePage = ({ posts }) => {
    const { slug } = useParams()

    const currentPost = posts.filter(post => post.uid === slug)

    return (
        <StyledArticlePage>
            <Article post={currentPost[0]} view={true} />
        </StyledArticlePage>
    )
}

export default ArticlePage