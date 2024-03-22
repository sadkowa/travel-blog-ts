import React, { useEffect, useState } from "react";

import StyledButtonsSection from "./ButtonsSection.styled";
import { Button } from "..";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
    page: number,
    pages: number,
    category: string
}

const ButtonsSection = ({ page, pages, category }: Props) => {
    const [slug, setSlug] = useState('/page/')

    useEffect(() => {
        if (category) {
            setSlug(`/articles/${category}/page/`)
        } else setSlug('/page/')
    }, [category, page])

    return (
        <StyledButtonsSection >
            <Link to={`${slug}${page - 1}`}>
                <Button
                    disabled={page === 1 ? true : false}
                    variant='dark'
                >Previous
                </Button>
            </Link>
            <StyledCurrentPage>{page}</StyledCurrentPage>
            <Link to={`${slug}${page + 1}`}>
                <Button
                    disabled={page === pages ? true : false}
                    variant='dark'
                >Next
                </Button>
            </Link>
        </StyledButtonsSection>
    )
}

export default ButtonsSection

const StyledCurrentPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fontSizes.xsmall};

    @media ${({ theme }) => theme.media.tablet} {
        width: 40px;
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    } 
`