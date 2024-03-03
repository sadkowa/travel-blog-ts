import React from "react";
import { Wrapper } from '../../components'
import { StyledText } from "../../components/Article/Article";
import StyledAbout from "./About.styled";
import styled from "styled-components";

import { useSinglePrismicDocument } from "@prismicio/react";
import { getData } from "../../helpers/functions";

const About = () => {
    const [document] = useSinglePrismicDocument('about')

    if (!document) return

    const data = getData(document.data)
    const { imgSrc, imgAlt, textContent } = data

    return (
        <Wrapper>
            <StyledAbout>
                <StyledImgPerson src={imgSrc} alt={imgAlt} />
                {textContent.map((item, index) => {
                    return <StyledAboutText key={index}>{item.text}</StyledAboutText>
                })}
            </StyledAbout>
        </Wrapper>
    )
}

export default About


const StyledImgPerson = styled.img`
    margin: 20px 0;

    @media ${({ theme }) => theme.media.tablet} {
        float: left;
        height: 300px;
        width: 300px;
        margin: 0 20px 20px 0;
    }
`

const StyledAboutText = styled(StyledText)(
    () => ({ minHeight: 0 })
)