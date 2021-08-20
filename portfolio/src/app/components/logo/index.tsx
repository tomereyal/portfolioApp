import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ILogoProps {
  color?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`flex items-center `}
`;

const LogoText = styled.div`
  ${tw`text-xl 
  md:text-2xl 
  font-bold 
  text-black
   m-1
   `}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

export default function Logo(props: ILogoProps) {
  const { color = "white" } = props;
  console.log(`color`, color);
  return (
    <LogoContainer>
      <Icon>
        <FontAwesomeIcon icon={faTree}></FontAwesomeIcon>
      </Icon>
      <LogoText color={color}>Home</LogoText>
    </LogoContainer>
  );
}
