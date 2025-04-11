import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const mv = require("../../../../assets/images/home/mv.jpg");
const spMv = require("../../../../assets/images/home/mv-sp.jpg");
const logo = require("../../../../assets/images/logo.png");

const MainVisualWrap = styled.section`
  position: relative;
  display: flex;
`;

const MainVisual = styled.div<{ mvImage: string; spMvImage: string }>`
  width: 100%;
  height: calc(100vh - 74px);
  margin: 0 auto;
  background: center center no-repeat url(${(props) => props.mvImage});
  background-size: cover;

  @media (max-width: ${breakpoints.tablet}) {
    background: center center no-repeat url(${(props) => props.spMvImage});
    background-size: cover;
  }
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  right: 80px;
  transform: translateY(-50%);

  @media (max-width: ${breakpoints.tablet}) {
    right: 0;
    width: 100%;
    text-align: center;
    transform: translateY(-70%);
  }
`;

const Logo = styled.img`
  width: 180px;
`;

const Title = styled.h2`
  font-size: 42px;
  margin-top: 24px;
  margin-bottom: 0;
`;

export const Mv = () => {
  return (
    <MainVisualWrap>
      <Box>
        <Logo src={logo} alt="ロゴ" />
        <Title>
          看護を楽しみ、
          <br />
          地域を元気に！
        </Title>
      </Box>
      <MainVisual mvImage={mv} spMvImage={spMv} />
    </MainVisualWrap>
  );
};
