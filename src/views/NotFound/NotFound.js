import React from 'react';
import { Link } from 'react-router-dom';
import StyledNotFound from './NotFound.styled';
import { StyledText } from '../../components/Article/Article';
import styled from 'styled-components';

const NotFound = () => {

    const styles = {
        color: '#a07849',
    }
    return (
        <StyledNotFound>
            <StyledText>
                The provided page does not exist! <br />
                Please return to
                <Link style={styles} to="/">
                    <StyledSpan>Home</StyledSpan>
                </Link>.
            </StyledText>
        </StyledNotFound>
    )
}

export default NotFound;

const StyledSpan = styled.span`
    padding-left: ${({theme}) => theme.spaces.small};
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 2px;

    &:hover {
        color: #87745e;
    }
`