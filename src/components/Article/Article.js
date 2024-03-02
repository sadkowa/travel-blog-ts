import React from "react";
import StyledArticle from "./Arcticle.styled";
import Wrapper from "../Wrapper";
import img from '../../assets/header-img.jpg'

const Article = ({ post }) => {

    return <StyledArticle>
        <img src={img}alt="" width='100%'/>
        <Wrapper>
        <h3>title</h3>
        <h5>date</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia aut velit magnam quaerat ducimus repellat voluptatem repellendus blanditiis facere eos, ipsum aspernatur exercitationem quae nisi. Odit similique laboriosam quidem culpa eaque et reiciendis nobis nemo blanditiis corrupti, ut officiis excepturi minima sint. Repellendus aliquid, eius impedit iusto nisi minima fugiat!</p>
        <footer>
            <button>{'Read more >>'}</button>
            <h6>category</h6>
        </footer>
        </Wrapper>

    </StyledArticle>
}

export default Article