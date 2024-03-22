import React from "react";
import StyledCategoriesSection from "./CategoriesSection.styled";
import { StyledCategory } from "../Article/Article";

import styled, { css } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

type Props = {
    categories: string[],
    currentCategory?: string,
    setPage: (id: number)=> void
}

const CategoriesSection = ({ categories, currentCategory = 'all', setPage }: Props) => {

    const { pathname } = useLocation()

    const styles = {
        textDecoration: 'none',
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid #ccc',
    }

    const activeStyle = {
        backgroundColor: '#ccc',
    }

    return <StyledCategoriesSection>
        {categories.map((cat, index) => {
            return <NavLink
                key={index}
                exact={(cat === 'all') && ((currentCategory === 'all' && !pathname.includes('/page/')) ||
                    (currentCategory !== 'all'))}
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

        @media ${({theme}) => theme.media.tablet} {
            min-width: 85px;
        }
        @media ${({theme}) => theme.media.desktop} {
            min-width: 100px;
        }
    `)
)

