import React from "react";
import StyledButtonsSection from "./ButtonsSection.styled";
import { Button } from "../";
import styled from "styled-components";


const ButtonsSection = ({ page, pages, onPageChange }) => {

    return (
        <StyledButtonsSection >
            <Button
                disabled={page === 1 ? true : false}
                onPageChange={onPageChange}
                variant='dark'
                >Previous
            </Button>
            <StyledCurrentPage>{page}</StyledCurrentPage>
            <Button
                disabled={page === pages ? true : false}
                onPageChange={onPageChange}
                variant='dark'
                >Next
            </Button>
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