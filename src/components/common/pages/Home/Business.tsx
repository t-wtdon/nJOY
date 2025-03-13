import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";
import { Link } from "react-router-dom";

const genki = require("../../../../assets/images/home/genki.jpg");

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
  width: calc((100% - 48px) / 3);

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(50% - 12px);
  }

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
  }
`;

const Card = styled(Link)`
  display: block;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer !important;

  &:link,
  &:visited {
    text-decoration: none;
    color: #333 !important;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  padding: 20px 12px;
`;

const Title = styled.h3`
  margin-top: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const TextRight = styled.span`
  display: block;
  text-align: right;
`;

const MoreButton = styled.span`
  display: inline-block;
  margin-top: 12px;
  border: 1px solid #333;
  padding: 0px 12px;
  border-radius: 32px;
  text-align: center;
`;

export const Business = () => {
  return (
    <Container>
      <Heading title="事業について" />

      <List>
        <Item>
          <Card to="/genki-station">
            <Image src={genki} alt="げんき訪問看護ステーション" />
            <Content>
              <Title>げんき訪問看護ステーション</Title>
              <Text>
                「あなたに寄り添い、あなたのかなえる生活スタイルを」
                ほんの少しの変化と楽しみをプラスし、元気をお届けします。
                <TextRight>
                  <MoreButton>もっと見る</MoreButton>
                </TextRight>
              </Text>
            </Content>
          </Card>
        </Item>
      </List>
    </Container>
  );
};
