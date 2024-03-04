import React from "react";
import StyledHeader from "./Header.styled";
import { MainHeading, NavBar } from '../'

import { navTitles } from "../../helpers/data"
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {

  const ListItem = ({ children }) => {
    return <StyledListItem>{children}</StyledListItem>
  }

  const styles = {
    textDecoration: 'none',
    color: 'black',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const activeStyle = {
    backgroundColor: 'white',
    borderLeft: '1px solid #ddd',
    borderRight: '1px solid #ddd',
  }

  const renderListItem = () => {
    return navTitles.map(({ id, name, slug }) => {
      return <ListItem key={id}>
        <NavLink
          exact to={`/${slug}`}
          style={styles}
          activeStyle={activeStyle}>
          {name}
        </NavLink>
      </ListItem>
    })
  }

  return (
    <StyledHeader>
        <NavBar>
            <StyledList>
          {renderListItem()}
            </StyledList>
      </NavBar>
      <MainHeading text='Welcome to my blog!'/>
    </StyledHeader>)
}

export default Header


const StyledList = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  margin: 0 30px;
  list-style: none;
`

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100%;
  transition: 0.3s ease;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};

  &:hover {
    background-color: rgba(0,0,0, 0.1);
  }

  @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
    }
  @media ${({ theme }) => theme.media.desktop} {
      font-size: ${({ theme }) => theme.fontSizes.small};
  }
`