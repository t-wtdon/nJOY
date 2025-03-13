import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const Container = styled.div`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  width: calc(50% - 10px);
  background: #e0f7fa;
  border-radius: 8px;
  padding: 12px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const Name = styled.p`
  font-size: 14px;
  text-align: right;
  margin: 0;
`;

export const Voice = () => {
  return (
    <Container>
      <Heading title="利用者の声" />

      <List>
        <Item>
          <Title>安心してお願いできます。</Title>
          <p>
            スタッフの方がとても親切で、毎回安心してお願いできます。身体のケアだけでなく、世間話をするのも楽しみになっています。
          </p>
          <Name>t.wさん（80代・男性）</Name>
        </Item>
        <Item>
          <Title>毎日快適に過ごせるようになりました。</Title>
          <p>
            家事や買い物のサポートをお願いしています。細かい気配りが嬉しく、毎日快適に過ごせるようになりました。
          </p>
          <Name>y.hさん（60代・男性）</Name>
        </Item>
        <Item>
          <Title>感謝しています。</Title>
          <p>
            退院後の生活が不安でしたが、介護スタッフさんのおかげでスムーズに日常生活を取り戻せました。感謝しています。
          </p>
          <Name>k.mさん（70代・女性）</Name>
        </Item>
        <Item>
          <Title>家族としても安心できます。</Title>
          <p>
            母の介護をお願いしています。優しく接してくださり、家族としても安心できます。いつも本当にありがとうございます。
          </p>
          <Name>h.mさん（50代・男性・ご家族）</Name>
        </Item>
      </List>
    </Container>
  );
};
