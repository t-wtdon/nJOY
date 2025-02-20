import React from "react";
import { Mv } from "../common/pages/Home/Mv";
import { About } from "../common/pages/Home/About";
import { Area } from "../common/pages/Home/Area";
import { Staff } from "../common/pages/Home/Staff";
import { Features } from "../common/pages/Home/Features";
import { Voice } from "../common/pages/Home/Voice";
import { Access } from "../common/pages/Home/Access";
import { Contact } from "../common/pages/Home/Contact";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const ContentInner = styled.div`
  width: 100%;
  max-width: 1080px;
  width: calc(100% - 40px);
  margin: 0 auto 80px;
  padding: 0 20px;

  @media (max-width: ${breakpoints.sp}) {
    padding: 0 8px;
    margin: 0 0 80px;
  }
`;

export const Home = () => {
  return (
    <div>
      <Mv />
      <ContentInner>
        <About />
        <Features />
        <Staff />
        <Area />
        <Voice />
        <Access />
      </ContentInner>
      <Contact />
    </div>
  );
};
