import React from "react";
import { Wrapper, Article } from "../../components";
import StyledBlog from "./Blog.styled";


const Blog = ({ posts }) => {
    return (
        <Wrapper>
            <StyledBlog>
                BLOG
                <Article/>
                {/* {posts.map(item => <Article />)} */}
            </StyledBlog>
        </Wrapper>
    )
}

export default Blog