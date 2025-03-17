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

const SubTitle = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 28px;
`;

const Box = styled.div`
  margin-top: 40px;
`;

export const About = () => {
  return (
    <Container>
      <Text>
        <Title>nJOYの目指すもの</Title>
        私たちは、看護師としての力を最大限に活かし、関わるすべての人に活力と元気を届け、社会に役立つ会社を目指します。
        <br />
        また、看護師の活躍の場を広げ、看護のすばらしさをもっと世の中に伝えたいと考えています。
        <br />
        スタッフが安心して長く働ける環境づくりにも力を入れ、お客様に最高のサービスを提供し続けます。
        <br />
        <SubText>「看護を楽しむ」</SubText>
        をモットーに、いつでも、誰にでも頼りにされる存在でありたい。
        <br />
        私たちは、笑顔の瞬間を増やし、地域の健康づくりや療養生活の支援に、これからも力を尽くしていきます。
      </Text>

      <Box>
        <Text>
          <SubTitle>nJOYが目指す未来</SubTitle>
          私たちnJOYは、<SubText>看護を楽しみ、地域を元気に！</SubText>を胸に、
          関わるすべての人が安心し、笑顔になれる社会を目指しています。
          <br />
          これからも、あなたの「やりたい」を一緒に叶え、あなたらしい暮らしを応援し続けます。
        </Text>
      </Box>
    </Container>
  );
};
