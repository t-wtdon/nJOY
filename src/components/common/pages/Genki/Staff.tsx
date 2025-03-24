import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const staff1 = require("../../../../assets/images/genki/ishii.jpg");
const staff2 = require("../../../../assets/images/genki/inada.jpg");
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
  // max-height: 350px;
  object-fit: cover;
`;

const Name = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px 0;
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
  line-height: 1.2;
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
            <Title>「救命の経験を在宅へ。安心と元気を届ける訪問看護。」</Title>
            <Text>
              宮崎県田野看護学校を卒業後、日本医科大学武蔵小杉病院救命センターに13年間勤務していました。
              <br />
              救命と訪問看護では分野が大きく異なるように思われるかもしれません。しかし、これまで多くの救命現場を経験する中で、
              病気やケガによる苦痛に寄り添うことの大切さ、病気の急変時の対応、そしてご家族の気持ちに寄り添う看護の必要性を強く感じてきました。
              <br />
              また、救命の現場では「早期発見・早期対応」の重要性を学びました。この観察力を活かしながら、
              患者様が安心して在宅での生活を続けられるようサポートしてまいります。
              男性看護師としての新しい役割にも挑戦し、訪問看護の可能性を広げていきたいと考えています。
              「げんき訪問看護ステーション」の名前の通り、皆様が元気になれるよう、精一杯努めてまいります。どうぞよろしくお願いいたします。
            </Text>
            <Text>
              経歴:
              <br />
              宮崎県田野看護専攻科卒業
              <br />
              日本医科大学武蔵小杉病院救命センターに13年間勤務
              <br />
              川崎DMAT・神奈川DMAT隊員として活動
              <br />
              BLS/ICLSインストラクター
              <br />
              臨地実習指導者講習会修了
              <br />
              2025年4月、げんき訪問看護ステーションを立ち上げ
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
            <Title>「病院からご自宅へ。安心と元気を支える訪問看護。」</Title>
            <Text>
              東京都板橋区板橋中央看護専門学校を卒業後、日本医科大学武蔵小杉病院で脳神経外科病棟、
              集中治療室（ICU）、手術室を経験し、17年間にわたり多くの患者様と関わってきました。
              <br />
              その中で、退院後の生活をサポートし、患者様が望む環境で安心して過ごせるよう支援したいという想いが強くなり、
              訪問看護の道を選びました。
              <br />
              また、DMAT隊員として災害支援に従事した経験を通じ、住み慣れた家や地域で生活することの大切さを実感しました。
              これからは、病気と共に生きる患者様の健康管理を行いながら、ご家族の不安にも寄り添い、
              安心して生活できる環境を整えていきたいと思います。そして、日々の生活の中で少しでも“げんき”になれるよう尽力いたします。
              どうぞよろしくお願いいたします。
            </Text>
            <Text>
              経歴:
              <br />
              東京都板橋区板橋中央看護専門学校卒業
              <br />
              日本医科大学武蔵小杉病院にて脳神経外科病棟、集中治療室（ICU）、手術室に17年間勤務
              <br />
              DMAT隊員として2016年熊本地震、2024年能登半島地震で被災地へ派遣
              <br />
              術中麻酔管理領域 特定行為研修修了 臨地実習指導者講習会修了
              <br />
              BLS/ICLSインストラクター
              <br />
              2025年4月、げんき訪問看護ステーションを立ち上げ
            </Text>
          </Content>
        </Item>
      </List>
    </Container>
  );
};
