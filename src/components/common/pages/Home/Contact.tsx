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

export const Contact = () => {
  return (
    <Container bgImage={bg}>
      <ContentWrapper>
        <Heading title="お問い合わせ" />
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
