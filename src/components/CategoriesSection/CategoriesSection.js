import React from "react";
import StyledCategoriesSection from "./CategoriesSection.styled";
import { StyledCategory } from "../Article/Article";

import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const CategoriesSection = ({ categories, page, setPage }) => {
    const styles = {
        textDecoration: 'none',
        color: 'black'
    }

    const activeStyle = {
        border: '1px solid #ccc'
    }

    return <StyledCategoriesSection>
        {categories.map((cat, index) => {
            return <NavLink
                key={index}
                exact={(cat === 'all')}
                to={cat === 'all' ? '/' : `/articles/${cat}`}
                style={styles}
                activeStyle={activeStyle}>
                <StyledCategoryInSection
                    onClick={() => setPage(1)}
                >{cat}
                </StyledCategoryInSection>
            </NavLink>
        })}
    </StyledCategoriesSection>
}

export default CategoriesSection


const StyledCategoryInSection = styled(StyledCategory)(
    () => (css`
        padding: ${({theme}) => theme.spaces.xxsmall} ;
        width: 100%;
        min-width: 50px;
        text-align: center;
        background-color: white;

        ${({ $active }) => $active && css`
            border: 1px solid #ccc;
        `}

        @media ${({theme}) => theme.media.tablet} {
            min-width: 85px;
        }
        @media ${({theme}) => theme.media.desktop} {
            min-width: 100px;
        }
    `)
)

