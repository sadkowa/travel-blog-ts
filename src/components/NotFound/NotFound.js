import React from 'react';
import { Link } from 'react-router-dom';
import StyledNotFound from './NotFound.styled';
import { StyledText } from '../Article/Article';

const NotFound = () => {
    return (
        <StyledNotFound>
            <StyledText>The provided page does not exist! <br/>Please return to the <Link to="/">homepage</Link>.</StyledText>
            
        </StyledNotFound>
    );
}

export default NotFound;

