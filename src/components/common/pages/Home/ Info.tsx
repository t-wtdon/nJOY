import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const bg = require("../../../../assets/images/home/mv.jpg");

const Container = styled.section<{ bgImage: string }>`
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

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
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

const Title = styled.h3`
  display: block;
  font-size: 20px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  margin: 8px 0;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  word-break: break-all;
`;

const SmallText = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 15px;
  font-weight: normal;
`;

const Description = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const ContentBox = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 20px;
  }
`;

const LinkText = styled.a`
  cursor: pointer !important;

  &:link,
  &:visited {
    color: #333;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const Info = () => {
  return (
    <Container bgImage={bg}>
      <ContentWrapper>
        <Heading title="お問い合わせ" />
        <ContentBox>
          <Title>ご相談はいつでもお気軽に</Title>
          <Description>
            「こんなことお願いしていいの？」 「こんな看護はできるの？」
            どんな小さなことでも、まずはお話を聞かせてください。
          </Description>
        </ContentBox>
        <Box>
          <Text>
            <LinkText href="tel:080-3461-4991">
              <Icon icon={faPhone} size="2x" />
              080-3461-4991
            </LinkText>
          </Text>
          <Text>
            <LinkText href="mailto:Genki.2025.3@gmail.com">
              <Icon icon={faEnvelope} size="2x" />
              Genki.2025.3@gmail.com
            </LinkText>
            <SmallText>こちらからお気軽にお問い合わせください</SmallText>
          </Text>
        </Box>
      </ContentWrapper>
    </Container>
  );
};
