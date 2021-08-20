import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assests/images/blob.svg";
import { SCREENS } from "../../components/responsive";
import Button from "../../components/button";
import Sidebar from "../../components/sidebar";

//@ts-ignore
import video from "../../../assests/space.mp4";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  z-index: 1;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
 
  `};
`;

const MainContainer = styled.div`
  background-color: #0c0c0c;
  ${tw`
flex
justify-center
items-center
pt-0
pb-0
pr-7
pl-7
min-h-screen
relative
w-full
`}
`;

const HeroBackground = styled.div`
  ${tw`
absolute
top-0
bottom-0
right-0
left-0
w-full
h-full
overflow-hidden
`}
`;

const VideoBg: any = styled.video`
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

  ${tw`
w-full
h-full
`}
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

const GlassBackground = styled.div`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(74, 74, 78, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;

  ${tw`
    flex
    flex-col
    justify-center
    items-center
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    text-center
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-white
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
  text-center
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-white
  `};
`;

const BlobContainer = styled.div`
  width: 10em;
  /* height: 3em; */
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: 2;
  transform: rotate(-30deg);
  img {
    width: 100%;
    /* height: auto; */
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
flex
mt-4
flex-wrap
`}
`;

export default function TopSection() {
  return (
    <MainContainer>
      <TopSectionContainer>
        <LeftContainer>
          <GlassBackground>
            <Slogan>I'm Tomer Eyal, Welcome</Slogan>
            <Description>It's dark in here..</Description>
          </GlassBackground>
          <ButtonsContainer>
            <Button theme="outlined" text="Enter" />
          </ButtonsContainer>
        </LeftContainer>

        <RightContainer>
          {/* <BlobContainer>
            <img src={BlobImg} />
          </BlobContainer> */}
          <StandaloneCar>{/* <img src={MclarenCarImg} /> */}</StandaloneCar>
        </RightContainer>
      </TopSectionContainer>
      <HeroBackground>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBackground>
      <Sidebar />
    </MainContainer>
  );
}

<TopSectionContainer>
  <LeftContainer>
    <Slogan>Introducing Tomer Eyal's brain</Slogan>
    <Description>It's dark in here..</Description>
    <ButtonsContainer>
      <Button theme="filled" text="Enter" />
    </ButtonsContainer>
  </LeftContainer>
  <RightContainer>
    <BlobContainer>
      <img src={BlobImg} />
    </BlobContainer>
    <StandaloneCar>{/* <img src={MclarenCarImg} /> */}</StandaloneCar>
  </RightContainer>
</TopSectionContainer>;
