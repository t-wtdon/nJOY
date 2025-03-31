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

const Container = styled.section`
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
  background: #f2f2da;

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
  background: #daeff2;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #ffa500;
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

const WarningText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-left: -1em;
`;

export const Features = () => {
  return (
    <Container>
      <Heading title="nJOYの提供するサービス" />

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
              地域の皆さんが元気で過ごせるよう、個人や団体向けに健康づくりを支援します。
            </Text>
          </div>
          <FeatureList>
            <FeatureItem>
              <StrongText>健康相談</StrongText>: 体調管理や生活習慣のアドバイス
            </FeatureItem>
            <FeatureItem>
              <StrongText>食事・運動サポート</StrongText>:
              健康的なライフスタイル実現のための支援
            </FeatureItem>
            <FeatureItem>
              <StrongText>コラボレーション</StrongText>:
              医療機関、企業、地域団体と連携し、看護師がいるからこそ参加できる場づくりを行います（障害や病気のある方も安心して参加可能）
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
            <Text>病気を未然に防ぎ、健康を守るための活動を行います。</Text>
          </div>

          <FeatureList>
            <FeatureItem>
              <StrongText>健康チェック</StrongText>:
              血圧、体温、血糖値、心電図などの定期測定
            </FeatureItem>
            <FeatureItem>
              <StrongText>健康教育</StrongText>:
              病気予防・悪化防止・急変時対応をテーマにした講座やセミナーを開催
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
              看護師の専門知識と技術を活かし、さまざまな分野で支援を行っています。
            </Text>
          </div>

          <FeatureList>
            <FeatureItem>
              <StrongText>学校向け支援</StrongText>:
              生徒・教職員の健康管理、感染症予防など
            </FeatureItem>
            <FeatureItem>
              <StrongText>企業向けサポート</StrongText>:
              従業員の健康チェックや、健康経営に関するアドバイス
            </FeatureItem>
            <FeatureItem>
              <StrongText>施設向け支援</StrongText>:
              介護・福祉施設での健康管理や医療支援
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
            <H3heading>訪問看護（保険・自費）での病気、障害への支援</H3heading>
            <Text>
              ご自宅での看護が必要な方に訪問看護サービスを提供しています。
            </Text>
          </div>

          <FeatureList>
            <FeatureItem>
              <StrongText>保険診療</StrongText>:
              医師の指示に基づく医療処置、治療、リハビリ
            </FeatureItem>
            <FeatureItem>
              <StrongText>自費診療</StrongText>:
              生活支援、健康相談、ケアなど（保険適用外のサービス）
            </FeatureItem>
            <FeatureItem>
              <StrongText>病気・障害への支援</StrongText>:
              一人ひとりに合わせた個別ケアや精神的サポート
              <br />
              <WarningText>
                ※ 訪問看護の対応エリアについては、お気軽にお問い合わせください。
              </WarningText>
            </FeatureItem>
          </FeatureList>
        </Item>
      </List>
    </Container>
  );
};
