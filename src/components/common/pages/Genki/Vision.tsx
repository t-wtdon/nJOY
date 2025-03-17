import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";
import { Heading } from "../../Heading";

const Container = styled.section`
  position: relative;
  padding: 60px 0;
`;

const InnerContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
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

export const Vision = () => {
  return (
    <Container>
      <Heading title="元気を届けるために" />

      <InnerContainer>
        <Text>
          <StrongText>私たちが届けたいのは、"元気"です</StrongText>
          <br />
          <br />
          あなたの「やりたい」を一緒に叶えるために。
          <br />
          そして、あなたの毎日にそっと寄り添い、支えるために。
          <br />
          げんき訪問看護ステーションは、これからも“あなたらしい暮らし”を応援します。
          <br />
          そして、その“元気”を届けるために、私たちスタッフ自身も元気で、
          安心して働ける職場であるよう努力し続けます。
        </Text>
      </InnerContainer>
    </Container>
  );
};
