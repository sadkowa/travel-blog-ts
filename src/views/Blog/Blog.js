import React from "react";
import { Wrapper, Article } from "../../components";
import StyledBlog from "./Blog.styled";


const Blog = ({ posts }) => {
    return (
        <Wrapper>
            <StyledBlog>
                {posts.map(item => <Article post={item}/>)}
            </StyledBlog>
        </Wrapper>
    )
}

export default Blog