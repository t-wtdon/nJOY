import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const Container = styled.div`
  padding: 160px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 0;
  }
`;

const Title = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }
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

export const About = () => {
  return (
    <Container>
      <Text>
        <Title>げんき訪問看護ステーションの理念</Title>
        あなたに寄り添い、あなたが叶える生活スタイルを
        私たちは、住み慣れたご自宅や地域で、その人らしく、安心して過ごせるよう支えます。
        <br />
        あなたの「やりたい」「やってみたい」という気持ちを大切にし、ほんの少しの変化と楽しみという“元気”をお届けします。
      </Text>
    </Container>
  );
};
