import React from "react";
import { FaFacebook, FaLinkedin  } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import StyledContact from './Contact.styled'
import { useSinglePrismicDocument } from "@prismicio/react";
import { getContactData } from "../../helpers/functions";
import styled from "styled-components";
import { StyledText } from "../../components/Article/Article";

const Contact = () => {

    const [contact] = useSinglePrismicDocument('contact')

    if (!contact) return

    const { titleText, textContent } = getContactData(contact.data)

    return (
        <StyledContact>
            <StyledHeading>{titleText}</StyledHeading>
            <StyledText>{textContent}</StyledText>
            <StyledContactInfo>
                <StyledTitle>
                    <FaPhone />
                    <MediaText>777-888-999</MediaText>
                </StyledTitle>
                <StyledTitle>
                    <MdEmail />
                    <MediaText>my-blog@gmail.com</MediaText>
                </StyledTitle>
                <StyledTitle>
                    <FaFacebook />
                    <MediaLink rel="stylesheet" href="https://facebook.com">My facebook</MediaLink>
                </StyledTitle>
                <StyledTitle>
                    <FaLinkedin />
                    <MediaLink rel="stylesheet" href="https://linkedin.com">My linkedIn</MediaLink>
                </StyledTitle>
            </StyledContactInfo>
        </StyledContact>
    )
}

export default Contact

const StyledHeading = styled.h2`
    padding: ${({ theme }) => theme.spaces.small};
    margin: ${({ theme }) => theme.spaces.xlarge};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 400;
    text-align: center;
    letter-spacing: 2px;
 
    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
    @media ${({ theme }) => theme.media.desktop} {
        margin-top: ${({ theme }) => theme.spaces.xxlarge};
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`

const StyledContactInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap:10px;
    margin: 30px auto 80px;
`

const StyledTitle = styled.h5`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:30px;
    font-size: 1.6rem;
`

const MediaLink = styled.a`
    flex-grow: 1;
    color: black;
    text-decoration: none;
    font-weight: 300;
    min-width: 200px;

    &:hover {
        font-weight: 500
    }
`

const MediaText = styled.p`
    flex-grow: 1;
    font-weight: 300;
    min-width: 200px;

`