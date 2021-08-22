import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../components/navbar";
import TopSection from "./topSection";
import { Marginer } from "../../components/marginer";
import ProjectsSection from "./projectsSection";
import TechSection from "./techSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;
export default function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      {/* <Marginer direction="vertical" margin="8em" /> */}
      <ProjectsSection />
      <TechSection />
    </PageContainer>
  );
}
