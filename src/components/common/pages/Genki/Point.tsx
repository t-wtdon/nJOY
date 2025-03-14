import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";
import { Heading } from "../../Heading";

const point1 = require("../../../../assets/images/genki/point1.png");
const point2 = require("../../../../assets/images/genki/point2.png");
const point3 = require("../../../../assets/images/genki/point3.png");
const point4 = require("../../../../assets/images/genki/point4.png");
const point5 = require("../../../../assets/images/genki/point5.png");
const point6 = require("../../../../assets/images/genki/point6.png");

const Container = styled.div`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 24px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: calc((100% - 48px) / 3);
  margin: 20px 0;

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(50% - 12px);
  }

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

const Title = styled.h3`
  position: relative;
  margin: 12px 0;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 8px;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background: #00d2f2;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
`;

export const Point = () => {
  return (
    <Container>
      <Heading title="大切にしていること" />

      <List>
        <Item>
          <Image src={point1} alt="" />
          <Title>住み慣れた場所で、安心して暮らせるように</Title>
          <Text>
            これまでの暮らしや環境を大切に、
            安心してその人らしく過ごせるようサポートします。
          </Text>
        </Item>
        <Item>
          <Image src={point2} alt="" />
          <Title>やさしさと、確かな専門性を</Title>
          <Text>
            心に寄り添うあたたかさと、
            看護の専門的な知識と技術で、あなたを支えます。
          </Text>
        </Item>
        <Item>
          <Image src={point3} alt="" />
          <Title>小さな願いも一緒に叶えていく</Title>
          <Text>
            あなたやご家族の思いに耳を傾け、
            「やってみたい」「叶えたい」という気持ちを応援し、
            実現に向けてできる方法を一緒に探します。
          </Text>
        </Item>
        <Item>
          <Image src={point4} alt="" />
          <Title>毎日に“元気”と楽しみを</Title>
          <Text>
            日々の中に、少しでも笑顔になれる瞬間を。
            あなたのそばで、“元気”を届ける存在であり続けます。
          </Text>
        </Item>
        <Item>
          <Image src={point5} alt="" />
          <Title>介護と医療の架け橋に</Title>
          <Text>
            介護や医療には、さまざまな職種の関わりが必要です。
            私たちは、介護者や関係者が同じ目標を持って支え合えるよう、
            医療と介護のチームをつなぐ「架け橋」でありたいと考えています。
          </Text>
        </Item>
        <Item>
          <Image src={point6} alt="" />
          <Title>地域の方々の健康の不安に寄り添う相談室として</Title>
          <Text>
            病気や介護のこと、ちょっとした健康の不安も、
            気軽に相談できる窓口でありたいと思っています。
            地域の皆さまが安心して暮らせるよう、いつでもご相談をお受けします。
          </Text>
        </Item>
      </List>
    </Container>
  );
};
