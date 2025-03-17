import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const mv = require("../../../../assets/images/home/mv.jpg");

const MainVisualWrap = styled.section`
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
  flex-direction: column;
  width: 40%;
  height: calc(100vh - 70px);
  background: rgba(0, 151, 167, 0.75);
  color: #fff;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    opacity: 0.7;
  }
`;

const Title = styled.h2`
  position: relative;
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(51, 51, 51, 0.05);
  line-height: 1.6;
`;

export const Mv = () => {
  return (
    <MainVisualWrap>
      <Box>
        <Title>
          看護を楽しみ、
          <br />
          地域を元気に！
        </Title>
      </Box>
      <MainVisual mvImage={mv} />
    </MainVisualWrap>
  );
};
