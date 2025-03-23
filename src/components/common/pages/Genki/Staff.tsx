import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const staff1 = require("../../../../assets/images/genki/ishii.jpg");
const staff2 = require("../../../../assets/images/genki/staff2.jpg");
const staff3 = require("../../../../assets/images/genki/katayama.jpg");

const Container = styled.section`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  width: 100%;

  @media (max-width: ${breakpoints.sp}) {
    flex-wrap: wrap;
    justify-content: center;

    &:nth-child(even) {
      flex-direction: column-reverse;
    }
  }
`;

const Content = styled.div`
  width: 50%;
  padding: 20px;
  background: #e0f7fa;
  border-radius: 20px 0 0 20px;
  box-sizing: border-box;

  &:nth-child(even) {
    background: #e0f7fa;
    border-radius: 0 20px 20px 0;
  }

  @media (max-width: ${breakpoints.sp}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    border-radius: 0 0 20px 20px;

    &:nth-child(even) {
      background: #e0f7fa;
      border-radius: 0 0 20px 20px;
    }
  }
`;

const ImageArea = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
    line-height: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 350px;
  object-fit: cover;
`;

const Name = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.7);
  padding: 12px;

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
    text-align: center;
    margin-top: 12px;
    line-height: 1;
  }
`;

const SmallText = styled.span`
  font-weight: normal;
  font-size: 14px;
  margin-left: 8px;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 8px;
  font-size: 20px;

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
    text-align: center;
    margin-top: 12px;
  }
`;

const Text = styled.p`
  margin-bottom: 0;
  line-height: 1.7;
`;

export const Staff = () => {
  return (
    <Container>
      <Heading title="スタッフ紹介" />

      <List>
        <Item>
          <ImageArea>
            <Image src={staff1} alt="" />
            <Name>
              石井達也<SmallText>代表取締役/診療看護師</SmallText>
            </Name>
          </ImageArea>

          <Content>
            <Title>「地域に根ざし、信頼される介護を」</Title>
            <Text>
              利用者様が安心して暮らせるよう、一人ひとりの想いに寄り添い、心のこもった介護を提供することを大切にしています。
              私たちは、ただ支援を行うのではなく、信頼できる存在として寄り添い、利用者様やご家族の不安を和らげることを目指しています。
              地域に根ざした温かいサービスを提供し、住み慣れた場所で安心して暮らし続けられるよう支援してまいります。
            </Text>
          </Content>
        </Item>
        <Item>
          <Content>
            <Title>「利用者様に寄り添う、最適なケアを」</Title>
            <Text>
              利用者様一人ひとりに合った最適なケアを提供するため、日々の体調や気持ちの変化に細かく目を配ることを大切にしています。
              スタッフ同士がしっかり連携を取りながら、質の高い介護サービスを提供し、
              利用者様やご家族が安心できる環境を整えていきます。これからも、より良い介護を目指し、誠実に取り組んでまいります。
            </Text>
          </Content>
          <ImageArea>
            <Image src={staff2} alt="" />
            <Name>
              稲田昌汰<SmallText>看護師</SmallText>
            </Name>
          </ImageArea>
        </Item>
        <Item>
          <ImageArea>
            <Image src={staff3} alt="" />
            <Name>
              片山雄介
              <SmallText>
                看護師/日本DMAT 特定行為研修修了者（麻酔科パッケージ）
              </SmallText>
            </Name>
          </ImageArea>
          <Content>
            <Title>「笑顔あふれる日常を支えるお手伝い」</Title>
            <Text>
              利用者様の生活を支えるだけでなく、「また来てほしい」と思っていただけるような温かい時間を提供したいと考えています。
              日々の介護の中で、心を通わせることを大切にし、ちょっとした会話や気配りで利用者様が笑顔になれるよう努めています。
              日常の小さな幸せを増やしながら、安心できる暮らしを支えていきます。
            </Text>
          </Content>
        </Item>
      </List>
    </Container>
  );
};
