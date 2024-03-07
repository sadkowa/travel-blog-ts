import React from "react";
import { StyledText } from "../../components/Article/Article";
import StyledAbout from "./About.styled";
import styled from "styled-components";

import { useSinglePrismicDocument } from "@prismicio/react";
import { getAboutData } from "../../helpers/functions";

const About = () => {
    const [document] = useSinglePrismicDocument('about')

    if (!document) return

    const data = getAboutData(document.data)
    const { imgSrc, imgAlt, textContent } = data

    return (
   
            <StyledAbout>
                <StyledImgPerson src={imgSrc} alt={imgAlt} />
                {textContent.map((item, index) => {
                    return <StyledAboutText key={index}>{item.text}</StyledAboutText>
                })}
            </StyledAbout>

    )
}

export default About


const StyledImgPerson = styled.img`
    margin: ${({theme}) => theme.spaces.medium}  0;

    @media ${({ theme }) => theme.media.tablet} {
        float: left;
        height: 300px;
        width: 300px;
        margin: 0 ${({theme}) => theme.spaces.medium} ${({theme}) => theme.spaces.medium} 0;
    }
`

const StyledAboutText = styled(StyledText)(
    () => ({ minHeight: 0 })
)