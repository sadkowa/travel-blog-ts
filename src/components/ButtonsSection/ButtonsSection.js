import React from "react";

import StyledButtonsSection from "./ButtonsSection.styled";
import { Button } from "../";
import styled from "styled-components";
import { Link } from "react-router-dom";


const ButtonsSection = ({ page, pages }) => {

    return (
        <StyledButtonsSection >
            <Link to={`/page/${page - 1}`}>
                <Button
                    disabled={page === 1 ? true : false}
                    variant='dark'
                >Previous
                </Button>
            </Link>
            <StyledCurrentPage>{page}</StyledCurrentPage>
            <Link to={`/page/${page + 1}`}>
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