import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const SideTextContainer = styled.div`
  z-index: 1;
  ${tw`
h-full
w-1/12


`}
`;

const SideTextItemContainer = styled.div`
  ${tw`
    flex 
    flex-col-reverse
    w-full
    h-full
    justify-around
    items-center
    relative
    
    overflow-hidden
`}
`;

const SideTextItem = styled.p`
  transform: rotate(270deg);
  width: max-content;
  letter-spacing: 2px;
  ${tw`
text-white
text-center
uppercase
text-xs
font-mono
sm:text-sm
md:text-lg



`}
`;

export default function sideText() {
  return (
    <SideTextContainer>
      <SideTextItemContainer>
        <SideTextItem>C.s Student</SideTextItem>
        <SideTextItem>Programmer</SideTextItem>
        <SideTextItem>Loves his mom</SideTextItem>
      </SideTextItemContainer>
    </SideTextContainer>
  );
}
