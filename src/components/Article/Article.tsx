import React from "react";

import styled, { css } from "styled-components";
import StyledArticle from "./Article.styled";
import { Button } from '..'

import { getArticleData } from "../../helpers/functions";
import { Link, Redirect } from "react-router-dom";

type Props = {
    post: any,
    view?: boolean
}

const Article = ({ post, view = false }: Props) => {
   
    if (!post) return <Redirect to='/404.html' />

    const {
        titleText,
        introText,
        articleContent,
        imgSrc,
        imgAlt,
        categoryName,
        date,
    } = getArticleData(post.data)

    const slug = post.uid

    return (
        <StyledArticle>
            <StyledImg src={imgSrc} alt={imgAlt} $view={view} />
            <StyledBox>
                <StyledTitle>{titleText}</StyledTitle>
                <StyledDate>{date}</StyledDate>
                {view
                    ? articleContent.map((item, index) => <StyledArticleContent
                        key={index}>
                        {item.text}
                    </StyledArticleContent>)
                    : <StyledText>{introText}</StyledText>}
                {!view && <StyledFooter>
                    <Link to={`/articles/${categoryName}/${slug}`}>
                        <Button>{'Read more >>'}</Button>
                    </Link>
                    <StyledCategory>{categoryName}</StyledCategory>
                </StyledFooter>}
            </StyledBox>
        </StyledArticle>)
}

export default Article

const StyledBox =styled.div`
    width: 95%;
    margin: ${({ theme }) => theme.spaces.medium} auto;
`

const StyledImg = styled.img.attrs<{ $view: boolean }>(props=>({
    $view: props.$view
}))`
    width: 100%;
    height: 200px;
    object-fit: cover;

    @media ${({ theme }) => theme.media.tablet} {
        height: 300px;
    };

    ${({ $view, theme }) => $view && css`
        @media ${theme.media.tablet} {
            height: 350px
        }
        @media ${theme.media.desktop} {
            height: 450px
        }
    `}
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

export const StyledText = styled.p`
    margin: ${({ theme }) => theme.spaces.medium} 0;
    font-size: ${({ theme }) => theme.fontSizes.xxxsmall};
    line-height: ${({ theme }) => theme.fontSizes.small};

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
        line-height: ${({ theme }) => theme.fontSizes.large};
    }
    @media ${({ theme }) => theme.media.desktop} {
        margin: ${({ theme }) => theme.spaces.large} 0;
        min-height: 120px;
    }
`

const StyledArticleContent = styled(StyledText)(
    () => (css`
        min-height: 0;

        &:last-child {
            padding-bottom: ${({ theme }) => theme.spaces.xxlarge} 
        }
    ` )
)

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spaces.medium};
`

export const StyledCategory = styled.h6`
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