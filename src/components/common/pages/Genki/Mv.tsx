import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const PCmv = require("../../../../assets/images/genki/mv.jpg");
const SPmv = require("../../../../assets/images/genki/spMv.jpg");

const MainVisualWrap = styled.section`
  position: relative;
  display: flex;
`;

const PCMainVisual = styled.div<{ mvImage: string }>`
  width: 100%;
  height: calc(100vh - 70px);
  margin: 0 auto;
  background: no-repeat url(${(props) => props.mvImage});
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.sp}) {
    display: none;
  }
`;

const SPMainVisual = styled.div<{ mvImage: string }>`
  display: none;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  background: no-repeat url(${(props) => props.mvImage});
  background-size: cover;
  background-position: center top;

  @media (max-width: ${breakpoints.sp}) {
    display: block;
  }
`;

const Title = styled.h3`
  position: absolute;
  top: 50%;
  font-size: 40px;
  font-weight: bold;
  width: calc(100% - 40px);
  margin: 0 40px 0;
  line-height: 1.6;
  color: #fff;
  word-break: keep-all;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 40px;
  }

  @media (max-width: ${breakpoints.sp}) {
    top: 80%;
    margin-left: 20px;
    font-size: 20px;
  }
`;

const Title1 = styled.span`
  display: inline-block;
  background: #ff6600;
`;

const Title2 = styled.span`
  display: inline-block;
  margin-top: 12px;
  margin-left: 10%;
  background: #ff6600;
`;

export const Mv = () => {
  return (
    <MainVisualWrap>
      <Title>
        <Title1>「また来てね」と言われる、</Title1>
        <br />
        <Title2>心に届くケアをモットーに。</Title2>
      </Title>

      <PCMainVisual mvImage={PCmv} />
      <SPMainVisual mvImage={SPmv} />
    </MainVisualWrap>
  );
};
