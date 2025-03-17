import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const Container = styled.div`
  position: relative;
  padding: 160px 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${require(`../../../../assets/images/genki/bg_pattern3.png`)})
      no-repeat bottom/cover;
    opacity: 0.3;
    z-index: -1;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 0;
  }
`;

const InnerContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
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

const StrongText = styled.span`
  font-weight: bold;
`;

export const About = () => {
  return (
    <Container>
      <InnerContainer>
        <Text>
          <Title>げんき訪問看護ステーションの理念</Title>
          <StrongText>
            「また来てね」と言われる、心に届くケアをモットーに。
          </StrongText>
          <br />
          <br />
          信頼関係を築く看護を大切に、私たちは住み慣れたご自宅や地域で、
          その人らしく、安心して過ごせるよう支えます。
          <br />
          あなたの「やりたい」「やってみたい」という気持ちを大切にし、
          日々の小さな変化や楽しみを通じて、“元気”をお届けします。
        </Text>
      </InnerContainer>
    </Container>
  );
};
