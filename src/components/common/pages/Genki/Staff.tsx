import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const staff1 = require("../../../../assets/images/genki/ishii-sp.jpg");
const staff2 = require("../../../../assets/images/genki/inada-sp.jpg");
const staff3 = require("../../../../assets/images/genki/katayama-sp.jpg");
const SPstaff1 = require("../../../../assets/images/genki/ishii-sp.jpg");
const SPstaff2 = require("../../../../assets/images/genki/inada-sp.jpg");
const SPstaff3 = require("../../../../assets/images/genki/katayama-sp.jpg");

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
  background: #fff5e1;
  border-radius: 20px 0 0 20px;
  box-sizing: border-box;

  &:nth-child(even) {
    background: #fff5e1;
    border-radius: 0 20px 20px 0;
  }

  @media (max-width: ${breakpoints.sp}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    border-radius: 0 0 20px 20px;

    &:nth-child(even) {
      background: #fff5e1;
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

const PCImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoints.sp}) {
    display: none;
  }
`;

const SPImage = styled.img`
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoints.sp}) {
    display: block;
  }
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
            <PCImage src={staff1} alt="" />
            <SPImage src={SPstaff1} alt="" />
            <Name>
              石井達也<SmallText>代表取締役/診療看護師</SmallText>
            </Name>
          </ImageArea>

          <Content>
            <Title>「専門性×寄り添う心で、在宅医療に安心と活力を。」</Title>
            <Text>
              ホームヘルパーとしての経験を経て、日本医科大学看護専門学校を卒業。
              日本医科大学武蔵小杉病院にて病棟・救命センターで9年間勤務しました。
              その後、在宅診療の立ち上げに携わり、訪問診療・訪問看護に10年間従事してきました。
              <br />
              これまで多くの患者様やご家族と関わり、共に喜び、共に悲しみながら、多くのことを学ばせていただきました。
              医療の進歩により、在宅でできることが年々広がり、これからもさらに可能性が広がっていくと感じています。
              そのため、より専門的な知識と技術を活かせるよう、診療看護師（NP）の資格を取得しました。
              <br />
              私は、どのような病気、障害のある方でも「自宅や住み慣れた場所で安心して過ごせる」よう、
              確かな技術と専門性を活かし、ご家族や患者様の想いを尊重しながら、最適な環境を整えていきたいと考えています。
              <br />
              そして何よりも、「げんき（活力）」が湧くような関わりを大切にし、「また来てね」と言っていただけるような、
              寄り添う看護を提供してまいります。どうぞよろしくお願いいたします。
            </Text>
            <Text>
              経歴:
              <br />
              ホームヘルパーとして勤務後、日本医科大学看護専門学校を卒業
              <br />
              日本医科大学武蔵小杉病院にて病棟・救命センターで9年間勤務
              <br />
              在宅診療立ち上げに携わり、訪問診療・訪問看護に10年間従事
              <br />
              2020年 診療看護師（NP）資格取得
              <br />
              2025年4月、げんき訪問看護ステーションに立ち上げ
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
            <PCImage src={staff2} alt="" />
            <SPImage src={SPstaff2} alt="" />
            <Name>
              稲田昌汰<SmallText>看護師</SmallText>
            </Name>
          </ImageArea>
        </Item>
        <Item>
          <ImageArea>
            <PCImage src={staff3} alt="" />
            <SPImage src={SPstaff3} alt="" />
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
