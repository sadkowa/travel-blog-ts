import React from "react";

import styled from "styled-components";
import StyledArticle from "./Arcticle.styled";
import { Wrapper, Button } from '../'

import * as prismicH from '@prismicio/helpers';


const Article = ({ post }) => {

    const { category, content, img, intro, title, date } = post.data
    const titleText = prismicH.asText(title)
    const introText = prismicH.asText(intro)

    return <StyledArticle>
        <StyledImg src={img.url} alt={img.alt} />
        <Wrapper>
            <StyledTitle>{titleText}</StyledTitle>
            <StyledDate>{date}</StyledDate>
            {/* {content.map(item=> <StyledText>{item.text}</StyledText>)} */}
            <StyledText>{introText}</StyledText>
        <StyledFooter>
            <Button>{'Read more >>'}</Button>
                <StyledCategory>{category.uid}</StyledCategory>
        </StyledFooter>
        </Wrapper>

    </StyledArticle>
}

export default Article

const StyledImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;

    @media ${({ theme }) => theme.media.tablet} {
        height: 300px;
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
        min-height: 75px;

    }
`

const StyledDate = styled.h5`
    margin: ${({ theme }) => theme.spaces.small} 0;
    font-size: ${({ theme }) => theme.fontSizes.xxsmall};
    font-weight: 400;
    color: ${({theme}) => theme.colors.dark};
    
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
        min-height: 200px;
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