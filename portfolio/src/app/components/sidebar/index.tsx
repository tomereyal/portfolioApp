import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../button";

const SidebarContainer = styled.div`
  z-index: 1;
  ${tw`

h-full
w-10

`}
`;

const SideItemsContainer = styled.div`
  ${tw`
    flex 
    flex-col
    w-full
    h-1/4
    pt-10
    justify-between
    items-center
`}
`;

const SideItem = styled.span`
  ${tw`

cursor-pointer
flex 
items-center
justify-center
`}
`;

export default function Sidebar() {
  const onItemClick = (url: string) => {
    return () => {
      window.open(url);
    };
  };
  return (
    <SidebarContainer>
      <SideItemsContainer>
        <SideItem>
          <Button
            shape={"circle"}
            circleSize={30}
            icon={<FontAwesomeIcon icon={faFacebook} />}
            onClick={onItemClick("https://www.facebook.com/tomereyal1")}
          />
        </SideItem>
        <SideItem>
          <Button
            shape={"circle"}
            circleSize={30}
            icon={<FontAwesomeIcon icon={faInstagram} />}
            onClick={onItemClick("https://www.instagram.com/tomereyal1/?hl=en")}
          />
        </SideItem>
        <SideItem>
          <Button
            shape={"circle"}
            circleSize={30}
            icon={<FontAwesomeIcon icon={faLinkedin} />}
            onClick={onItemClick(
              "https://www.linkedin.com/in/tomer-eyal-a9a9bb189/?originalSubdomain=il"
            )}
          />
        </SideItem>
      </SideItemsContainer>
    </SidebarContainer>
  );
}
