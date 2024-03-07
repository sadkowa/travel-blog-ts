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
                    <MediaLink
                        rel="stylesheet"
                        href="https://facebook.com">
                        My facebook
                    </MediaLink>
                </StyledTitle>
                <StyledTitle>
                    <FaLinkedin />
                    <MediaLink
                        rel="stylesheet"
                        href="https://linkedin.com">
                        My linkedIn
                    </MediaLink>
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
    gap: ${({ theme }) => theme.spaces.small};
    margin: ${({ theme }) => theme.spaces.large} auto 80px;
`

const StyledTitle = styled.h5`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spaces.large};
    font-size: ${({ theme }) => theme.fontSizes.xsmall};

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.small};
    };
`

const MediaLink = styled.a`
    flex-grow: 1;
    color: black;
    text-decoration: none;
    font-weight: 400;
    min-width: 200px;
    font-size: ${({ theme }) => theme.fontSizes.xxxsmall};

    &:hover {
        font-weight: 500
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
    };
`

const MediaText = styled.p`
    flex-grow: 1;
    font-weight: 400;
    min-width: 200px;
    font-size: ${({ theme }) => theme.fontSizes.xxxsmall};

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
    };
`