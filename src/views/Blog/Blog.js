import React, {useState} from "react";
import { Wrapper, Article, Pagination } from "../../components";
import StyledBlog from "./Blog.styled";


const Blog = ({ posts }) => {
    const [page, setPage] = useState(1)
    const paginationLimit = 4

    const pages = Math.ceil(posts.length / paginationLimit)

    return (
        <Wrapper>
            <StyledBlog>
                <Pagination 
                    paginationLimit={paginationLimit}
                    page={page}
                    displayData={posts}
                />
            </StyledBlog>
        </Wrapper>
    )
}

export default Blog