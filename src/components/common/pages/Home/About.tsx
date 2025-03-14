import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const Container = styled.div`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const Title = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 32px;
`;

const Text = styled.p`
  margin: 0 auto;
  line-height: 1.6;
  font-size: 16px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const SubText = styled.span`
  font-weight: bold;
`;

export const About = () => {
  return (
    <Container>
      <Text>
        <Title>私たちの目指すもの</Title>
        私たちは、看護師としての力を最大限に活かし、地域の元気をつくり、看護師の活躍を広げていきたいと考えています。
        <br />
        <SubText>「看護を楽しむ」</SubText>
        というモットーのもと、いつでも誰でも頼りにできる存在であり続けます。
        <br />
        笑顔の瞬間を増やし、健康づくり、療養生活の援助に貢献できるよう、活動を広げています。
      </Text>
    </Container>
  );
};
