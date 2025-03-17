import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const bg = require("../../../../assets/images/home/mv.jpg");

const Container = styled.div<{ bgImage: string }>`
  position: relative;
  padding: 60px 0;
  background: center center no-repeat url(${(props) => props.bgImage});
  background-size: cover;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Box = styled.div`
  padding: 20px;
  background: #fff;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 20px;
  }
`;

const Title = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  word-break: break-all;
`;

const SmallText = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  font-weight: normal;
`;

const Description = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Info = () => {
  return (
    <Container bgImage={bg}>
      <ContentWrapper>
        <Heading title="お問い合わせ" />
        <Description>
          <Title>ご相談はいつでもお気軽に</Title>
          「こんなことお願いしていいの？」 「こんな看護はできるの？」
          どんな小さなことでも、まずはお話を聞かせてください。
        </Description>
        <Box>
          <Text>
            メールアドレス: Genki.2025.3@gmail.com
            <SmallText>こちらからお気軽にお問い合わせください</SmallText>
          </Text>
        </Box>
      </ContentWrapper>
    </Container>
  );
};
