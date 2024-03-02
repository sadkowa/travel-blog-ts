import React from "react";

import styled from "styled-components";
import StyledArticle from "./Arcticle.styled";
import Wrapper from "../Wrapper";
import img from '../../assets/header-img.jpg'
import Button from "../Button";

const Article = ({ post }) => {

    return <StyledArticle>
        <StyledImg src={img} alt="" />
        <Wrapper>
            <StyledTitle>title</StyledTitle>
            <StyledDate>date</StyledDate>
        <StyledText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia aut velit magnam quaerat ducimus repellat voluptatem repellendus blanditiis facere eos, ipsum aspernatur exercitationem quae nisi. Odit similique laboriosam quidem culpa eaque et reiciendis nobis nemo blanditiis corrupti, ut officiis excepturi minima sint. Repellendus aliquid, eius impedit iusto nisi minima fugiat!</StyledText>
        <StyledFooter>
            <Button>{'Read more >>'}</Button>
            <StyledCategory>category</StyledCategory>
        </StyledFooter>
        </Wrapper>

    </StyledArticle>
}

export default Article

const StyledImg = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;

    @media ${({ theme }) => theme.media.tablet} {
        height: 200px;
    }
    @media ${({ theme }) => theme.media.desktop} {
        height: 250px;
    }
`

const StyledTitle = styled.h3`
    margin: ${({ theme }) => theme.spaces.small} 0;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    font-weight: 600;
    text-transform: uppercase;

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
`

const StyledDate = styled.h5`
    margin: ${({ theme }) => theme.spaces.small} 0;
    font-size: ${({ theme }) => theme.fontSizes.xxsmall};
    font-weight: 400;
    color: ${({theme}) => theme.colorsText.dark};
    
    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
    }
    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`

const StyledText = styled.p`
    margin: ${({ theme }) => theme.spaces.medium} 0;
    font-size: ${({ theme }) => theme.fontSizes.xxxsmall};
    line-height: ${({ theme }) => theme.fontSizes.xxsmall};

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
        line-height: ${({ theme }) => theme.fontSizes.medium};

    }
    @media ${({ theme }) => theme.media.desktop} {
        margin: ${({ theme }) => theme.spaces.large} 0;
        line-height: ${({ theme }) => theme.fontSizes.large};

    }
`

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spaces.medium}
`

const StyledCategory = styled.h6`
    margin-right: ${({ theme }) => theme.spaces.small};
    font-size: ${({ theme }) => theme.fontSizes.xxxsmall};

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
        line-height: ${({ theme }) => theme.fontSizes.medium};

    }
    @media ${({ theme }) => theme.media.desktop} {
        margin-right: ${({ theme }) => theme.spaces.large};
        line-height: ${({ theme }) => theme.fontSizes.large};

    }
`