import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeartbeat,
  faStethoscope,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const Container = styled.div`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const H3heading = styled.h3`
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 24px;
  list-style-type: none;
  padding: 0;
  margin: 62px 0 0;

  @media (max-width: ${breakpoints.sp}) {
    gap: 32px 24px;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(50% - 12px);
  padding: 20px;
  box-sizing: border-box;
  background: #daeff2;

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(50% - 12px);
  }

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
  }
`;

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #f2f2da;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #00d2f2;
  font-size: 48px;
`;

const Text = styled.p`
  line-height: 1.7;
  margin-bottom: 0;
`;

const FeatureList = styled.ul`
  margin: 20px 0 0;
  background: #fff;
  padding: 12px;
  padding-left: 24px;
  list-style-type: auto;
  min-height: 200px;
  box-sizing: border-box;
`;

const FeatureItem = styled.li`
  margin: 4px;
  font-size: 15px;
`;

const StrongText = styled.span`
  font-weight: bold;
`;

export const Features = () => {
  return (
    <Container>
      <Heading title="私たちの提供するサービス" />

      <List>
        <Item>
          <div>
            <IconBlock>
              <IconArea>
                <Icon icon={faHeartbeat} />
              </IconArea>
            </IconBlock>
            <H3heading>健康な体づくりサポート</H3heading>
            <Text>
              私たちは、地域の健康を支えるために、個人や団体向けに健康づくりをサポートします。
            </Text>
          </div>
          <FeatureList>
            <FeatureItem>
              <StrongText>健康相談</StrongText>:
              体調管理や生活習慣に関するアドバイス
            </FeatureItem>
            <FeatureItem>
              <StrongText>食事指導/運動サポート</StrongText>:
              健康なライフスタイルを実現するためのサポート
            </FeatureItem>
            <FeatureItem>
              <StrongText>コラボレーション</StrongText>:
              医療機関、企業、地域団体と連携し、その時に看護師がいる事で、障害や病気のある方でも参加できるような環境をつくる
            </FeatureItem>
          </FeatureList>
        </Item>
        <Item>
          <div>
            <IconBlock>
              <IconArea>
                <Icon icon={faStethoscope} />
              </IconArea>
            </IconBlock>
            <H3heading>病気の早期発見・予防活動</H3heading>
            <Text>病気になる前からしっかり予防し、健康を守ります。</Text>
          </div>

          <FeatureList>
            <FeatureItem>
              <StrongText>健康チェック</StrongText>:
              血圧、体温、血糖値、心電図などの定期的なチェック
            </FeatureItem>
            <FeatureItem>
              <StrongText>健康教育</StrongText>:
              健康に関する講座やセミナーを開催し、地域の皆さまに予防の重要性を伝える
            </FeatureItem>
          </FeatureList>
        </Item>
        <Item>
          <div>
            <IconBlock>
              <IconArea>
                <Icon icon={faUserMd} />
              </IconArea>
            </IconBlock>
            <H3heading>専門性を活かした支援</H3heading>
            <Text>
              看護師の豊富な知識と技術を活かし、さまざまな分野で支援を行っています。
            </Text>
          </div>

          <FeatureList>
            <FeatureItem>
              <StrongText>学校向け支援</StrongText>:
              生徒や教職員の健康管理、感染症予防など
            </FeatureItem>
            <FeatureItem>
              <StrongText>企業向けサポート</StrongText>:
              従業員の健康チェックや健康経営に関するアドバイス
            </FeatureItem>
            <FeatureItem>
              <StrongText>施設向け支援</StrongText>:
              介護施設や福祉施設における健康管理や医療支援
            </FeatureItem>
          </FeatureList>
        </Item>
        <Item>
          <div>
            <IconBlock>
              <IconArea>
                <Icon icon={faHome} />
              </IconArea>
            </IconBlock>
            <H3heading>
              訪問看護（保険診療、自費診療）での病気、障害への支援
            </H3heading>
            <Text>
              ご自宅での看護が必要な方に、訪問看護サービスを提供します。
            </Text>
          </div>

          <FeatureList>
            <FeatureItem>
              <StrongText>保険診療</StrongText>:
              医師の指示に基づく治療、リハビリ、医療処置
            </FeatureItem>
            <FeatureItem>
              <StrongText>自費診療</StrongText>:
              自費での生活支援、健康相談、ケアの提供
            </FeatureItem>
            <FeatureItem>
              <StrongText>病気・障がいへの支援</StrongText>:
              高齢者や障がいをお持ちの方への個別対応、精神的支援も含む
            </FeatureItem>
            <FeatureItem>
              <StrongText>訪問看護エリア</StrongText>:
              ご利用可能な地域について、詳細はお気軽にご相談ください。
            </FeatureItem>
          </FeatureList>
        </Item>
      </List>
    </Container>
  );
};
