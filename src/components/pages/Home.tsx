import React from "react";
import { Mv } from "../common/pages/Home/Mv";
import { About } from "../common/pages/Home/About";
import { Area } from "../common/pages/Home/Area";
import { Staff } from "../common/pages/Home/Staff";
import { Features } from "../common/pages/Home/Features";
import { Voice } from "../common/pages/Home/Voice";
import { Access } from "../common/pages/Home/Access";
import { SlideShow } from "../common/pages/Home/Slideshow";
import { Info } from "../common/pages/Home/ Info";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { ScrollToTop } from "../common/ScrollToTop";

const ContentInner = styled.div`
  width: 100%;
  max-width: 1080px;
  width: calc(100% - 40px);
  margin: 0 auto 80px;
  padding: 0 20px;

  @media (max-width: ${breakpoints.sp}) {
    padding: 0 12px;
    margin: 0 auto 80px;
  }
`;

export const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Mv />
      <ContentInner>
        <About />
        <SlideShow />
        <Features />
        <Staff />
        <Area />
        <Voice />
        <Access />
      </ContentInner>
      <SlideShow />
      <Info />
    </div>
  );
};
