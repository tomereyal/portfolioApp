import React from "react";
//----myCOMPONENTS-------------------------------
import Button from "../button";
//----INSTALLED-COMPONENTS-----------------------
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";
import { IProject } from "../../../typings/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SCREENS } from "../responsive";
//-----------------------------------------------

export interface IPropsProject extends IProject {
  inViewport?: boolean;
  index?: number;
}

//=============ANIMATIONS===========================
const bouncing = keyframes` 

  50% {transform: translateY(-15px);}
  }`;

const resizeShadow = keyframes` 
 50% {
      background-size: 50%;
  `;

const bounceAndResizeShadow = keyframes` 
50% {
    transform: translateY(-5px);
    background-size: 40%;}
}`;
//=====================================

interface IMainContainer {
  inViewport?: boolean;
}

const MainContainer = styled.div<IMainContainer>`
  width: 15.5em;
  min-height: 25em;
  max-height: 25em;
  ${tw`
    sm:m-2
    md:m-6
  `};
  @media (min-width: ${SCREENS.md}) {
    width: 18.5em;
  }
`;

interface IProjectContainer {
  index?: number;
  inViewport?: boolean;
}

const ProjectContainer = styled.div<IProjectContainer>`
  background-image: url("https://static.trendme.net/pictures/items/shadow-round_Lights-stardustnf-full-35014-648294.png");
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: 55%;
  animation: ${({ inViewport }) => (inViewport ? resizeShadow : "")}
    ${({ index = 0 }) => 3 + index}s ease-in-out infinite;
  ${tw`
   w-full
   h-full
   flex
    flex-col
    items-center
    p-3
    pb-4
 bg-transparent
    rounded-md
    m-1
    
  `};
`;

interface IOvalProject {
  index?: number;
  inViewport?: boolean;
}
const OvalProject = styled.div<IOvalProject>`
  box-shadow: 0 1.3px 6px -2px rgba(0, 0, 0, 0.4);
  animation: ${({ inViewport }) => (inViewport ? bouncing : "")}
    ${({ index = 0 }) => 3 + index}s ease-in-out infinite;

  ${tw`
    flex
    flex-col
    items-center
    w-full
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
    overflow-hidden
  `};
  border-radius: 50% 50% 50% 50% / 30% 30% 60% 60%;
`;

const ProjectThumbnail = styled.div`
  width: 70%;
  height: auto;
  margin: 0 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    ${tw`
    mt-5
    
    
    `}
  }
`;

const ProjectTitle = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
    font-mono
  `};
`;

const StacksContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    
  `};
`;

const Stack = styled.p`
  ${tw`
    text-gray-300
    text-xs
    font-bold
    ml-2
    mr-2
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const ProjectDescription = styled.p`
  word-wrap: normal;
  text-align: center;
  ${tw`
    text-gray-400
    text-xs
   pr-3
  pl-3
`};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

const ButtonsContainer = styled.div`
  ${tw`
    min-w-full
    mt-2
    flex 
    justify-center 
    items-center
    pl-10
    pr-10
  `};
`;
const LinkButton = styled(Button)`
  ${tw`
    min-w-full
    ml-1
    mr-1

 
  `};
`;

const ColoredText = styled.span`
  ${tw`
text-yellow-500

`}
`;

export default function Project(props: IPropsProject) {
  const { title, description, thumbnail, link, inViewport, index } = props;

  const onButtonClick = (url: string) => {
    return () => {
      window.open(url);
    };
  };

  return (
    <MainContainer inViewport={inViewport}>
      {inViewport && (
        <ProjectContainer index={index} inViewport={inViewport}>
          <OvalProject index={index} inViewport={inViewport}>
            <ProjectThumbnail>
              <img src={thumbnail} alt="website" />
            </ProjectThumbnail>
            <ProjectTitle>{title}</ProjectTitle>
            <StacksContainer>
              <Stack>React</Stack>
              <Stack>Mongoose</Stack>
              <Stack>Express</Stack>
            </StacksContainer>
            <Seperator />

            <ProjectDescription>
              The main reason for the project was css js and react. Although
              typesciprt is awesome I would choose to have another one as an
              experiment.
            </ProjectDescription>

            <ButtonsContainer>
              <Button
                onClick={onButtonClick("https://www.github.com")}
                shape="circle"
                theme="filled"
                bgc="green"
                text="Code"
              />
              <Button
                shape="circle"
                text="App"
                onClick={onButtonClick("https://www.facebook.com")}
              />
            </ButtonsContainer>
          </OvalProject>
        </ProjectContainer>
      )}
    </MainContainer>
  );
}
