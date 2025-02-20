import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyMedical,
  faUserNurse,
  faMapMarkedAlt,
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
  gap: 24px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  width: calc((100% - 48px) / 3);

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
  color: #00d2f2;
  font-size: 48px;
`;

const Text = styled.p`
  line-height: 1.7;
  margin-bottom: 0;
`;

export const Features = () => {
  return (
    <Container>
      <Heading title="訪問介護の特徴" />

      <List>
        <Item>
          <IconBlock>
            <IconArea>
              <Icon icon={faHouseChimneyMedical} />
            </IconArea>
          </IconBlock>
          <H3heading>ご自宅で安心のサポート</H3heading>
          <Text>
            住み慣れたご自宅で安心して過ごせるよう、利用者様の生活スタイルに合わせたサポートを行います。
            身体介護や生活援助を通じて、毎日の暮らしをより快適にするお手伝いをします。
          </Text>
        </Item>
        <Item>
          <IconBlock>
            <IconArea>
              <Icon icon={faUserNurse} />
            </IconArea>
          </IconBlock>
          <H3heading>経験豊富なスタッフによる質の高い介護</H3heading>
          <Text>
            経験と資格を持つスタッフが、利用者様一人ひとりに寄り添いながら、丁寧なケアを提供します。
            研修を定期的に実施し、常に質の高いサービスを心がけています。
          </Text>
        </Item>
        <Item>
          <IconBlock>
            <IconArea>
              <Icon icon={faMapMarkedAlt} />
            </IconArea>
          </IconBlock>
          <H3heading>地域密着のきめ細やかなサービス</H3heading>
          <Text>
            地域に根ざした訪問介護サービスとして、迅速で柔軟な対応を実現します。
            ご家族とも密に連携し、安心してご利用いただける環境を整えています。
          </Text>
        </Item>
      </List>
    </Container>
  );
};
