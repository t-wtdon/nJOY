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
  width: 70%;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

export const About = () => {
  return (
    <Container>
      <Text>
        <Title>「あなたの暮らしに、寄り添う介護。」</Title>
        私たちは、ご自宅での暮らしを大切にしたいという想いに寄り添いながら、一人ひとりに合った訪問介護サービスを提供しています。
        <br />
        日常生活のちょっとしたお手伝いから、専門的なケアまで、利用者様が安心して快適に過ごせるよう、真心を込めてサポートいたします。
        <br />
        また、ご家族の不安や負担を少しでも軽減できるよう、細やかなコミュニケーションを大切にしながら、信頼関係を築いていきます。
        <br />
        「ここにお願いしてよかった」そんな風に思っていただけるよう、地域に根ざした温かい介護をお届けします。
      </Text>
    </Container>
  );
};
