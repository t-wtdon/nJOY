import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const mv = require("../../../../assets/images/home/mv.jpg");

const MainVisualWrap = styled.div`
  position: relative;
  display: flex;
`;

const MainVisual = styled.div<{ mvImage: string }>`
  width: 100%;
  height: calc(100vh - 70px);
  margin: 0 auto;
  background: center center no-repeat url(${(props) => props.mvImage});
  background-size: cover;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  opacity: 0.8;
  height: calc(100vh - 70px);
  background: #fff;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    opacity: 0.7;
  }
`;

const Title = styled.h3`
  position: relative;
  font-size: 40px;
  font-weight: bold;
  margin: 0;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: calc(50% - 50px);
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #d5f2e8;
    z-index: -1;
  }
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: calc(50% - 50px);
    left: -40px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #d5eef2;
    z-index: -1;
  }
`;

export const Mv = () => {
  return (
    <MainVisualWrap>
      <Box>
        <Title>株式会社nJOY</Title>
      </Box>
      <MainVisual mvImage={mv} />
    </MainVisualWrap>
  );
};
