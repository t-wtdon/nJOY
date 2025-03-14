import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const mv = require("../../../../assets/images/genki/mv.jpg");
const logo = require("../../../../assets/images/genki/genki_logo.png");
const logo2 = require("../../../../assets/images/genki/genki_logo2.png");

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

const Title = styled.h3`
  position: absolute;
  top: 50%;
  font-size: 40px;
  font-weight: bold;
  width: calc(100% - 40px);
  margin: 0 40px 0;
  line-height: 1.6;
  color: #fff;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 40px;
  }

  @media (max-width: ${breakpoints.sp}) {
    top: 60%;
    font-size: 20px;
  }
`;

const Title1 = styled.span`
  display: inline-block;
  background: #00d2f2;
`;

const Title2 = styled.span`
  display: inline-block;
  margin-top: 12px;
  margin-left: 10%;
  background: #00d2f2;
`;

const Name = styled.p`
  position: absolute;
  top: 10%;
  right: 0;
  display: flex;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
  padding: 12px 40px;
  background: #fff;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 40px;
  }

  @media (max-width: ${breakpoints.sp}) {
    font-size: 22px;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const TitleImage = styled.img`
  width: 300px;
  height: 100px;
  object-fit: contain;
`;

export const Mv = () => {
  return (
    <MainVisualWrap>
      <Title>
        <Title1>あなたに寄り添い、</Title1>
        <br />
        <Title2>あなたがかなえる生活スタイルを</Title2>
      </Title>

      <Name>
        <Image src={logo} alt="" />
        <TitleImage src={logo2} alt="" />
      </Name>
      <MainVisual mvImage={mv} />
    </MainVisualWrap>
  );
};
