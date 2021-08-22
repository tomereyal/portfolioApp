import React, { useState, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { technologies } from "../../Data/technologies";
import { useInViewport } from "react-in-viewport";
import { ISectionProps } from "../../../typings/section.js";

const MainContainer = styled.div<ISectionProps>`
  opacity: ${({ inViewport = true }) => (inViewport ? 1 : 0)};
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1s;
  ${tw`
   w-full
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    pt-10
    pb-10
    md:pl-28
    md:pr-28 
    md:pb-5
`}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
    mb-3
`}
`;

const Description = styled.p`
  ${tw`
text-gray-700
lg:text-lg
font-bold
 mb-12
 text-center
`}
`;

const TechsContainer = styled.div`
  ${tw`
flex 
w-full
justify-between
items-start
`}
`;

interface ISectionColProps {
  inViewport?: boolean;
  index?: number;
}

const TechsColumn = styled.div<ISectionColProps>`
  opacity: ${({ inViewport = true }) => (inViewport ? 1 : 0)};
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: ${({ index = 0 }) => 1 + index}s;
  ${tw`
  w-full
    flex 
    flex-col
    justify-between
    items-center
`}
`;

const TechsColLogo = styled.div`
  min-height: 100px;
  ${tw`
    w-24
    flex
    justify-end
    items-end
    `}
  img {
    min-width: 100%;
    min-height: 100px;
  }
`;

const TechsColTitle = styled.p`
  ${tw`
  w-full
  p-1
    text-lg
    lg:text-xl
    text-black
    font-bold
    capitalize
    text-center
    `}
`;

const TechLogo = styled.span`
  ${tw`
flex
w-7
justify-center
items-center
`}
`;

const TechItemsContainer = styled.div`
  ${tw`
  h-60
  flex 
  flex-col
  justify-start
  items-center
  p-1
`}
`;

interface ITechItemProps {
  bold: boolean;
}

const TechItem = styled.div<ITechItemProps>`
  ${tw`
   w-full
    lg:text-xl
    text-gray-800
    flex 
    justify-start
    items-center
    pt-3
    pb-3
`}
  span {
    ${tw`
        text-sm
        ml-2
    `}
  }
  font-weight: ${({ bold }) => (bold ? "bolder" : "")};
`;

const techColumns = (inViewport: boolean) => {
  return technologies.map(({ type, content, logo }, index) => {
    return (
      <TechsColumn index={index} inViewport={inViewport}>
        <TechsColLogo>
          <img src={logo}></img>
        </TechsColLogo>
        <TechsColTitle>{type}</TechsColTitle>
        <TechItemsContainer>
          {content.length &&
            content.map(({ name, bold = false, logo }) => {
              return (
                <TechItem bold={bold}>
                  <TechLogo>
                    <img src={logo}></img>
                  </TechLogo>
                  <span> {name} </span>
                </TechItem>
              );
            })}
        </TechItemsContainer>
      </TechsColumn>
    );
  });
};

export default function TechSection() {
  const onEnterViewport = () => {
    console.log("entered viewport");
  };
  const onLeaveViewport = () => {
    console.log("entered viewport");
  };

  const containerRef = useRef();
  const { inViewport } = useInViewport(
    containerRef,
    {},
    { disconnectOnLeave: false },
    { onEnterViewport, onLeaveViewport }
  );
  console.log(`inViewport`, inViewport);

  return (
    <MainContainer ref={containerRef} inViewport={inViewport}>
      <Title>Technologies</Title>
      <Description>And the list is still growing!</Description>
      <TechsContainer>{techColumns(inViewport)}</TechsContainer>
    </MainContainer>
  );
}
