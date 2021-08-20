import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
const ListContainer = styled.ul`
  ${tw`flex list-none`}
`;
const NavItem = styled.li<{ menu?: any }>`
  ${tw`
  
text-sm
 md:text-base
  text-white
  font-medium 
  mr-1 
  md:mr-5 
  cursor-pointer 
  transition 
  duration-300
  ease-in-out
  hover:text-gray-700
  
  `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw` 
      text-white
      text-xl
      mb-3
      focus:text-white
`}
    `};
`;

export default function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#">Projects</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Technologies</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Timeline</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Contact Tomer</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="#">Projects</a>
      </NavItem>
      <NavItem>
        <a href="#">Technologies</a>
      </NavItem>
      <NavItem>
        <a href="#">Timeline</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact Tomer</a>
      </NavItem>
    </ListContainer>
  );
}
