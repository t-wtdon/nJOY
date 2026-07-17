import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faBuilding, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakpoints } from "../../styles/breakpoints";

const FOOTER_THEME = {
  default: {
    background: "#fff5e1",
  },
  genki: {
    background: "#fff5e1",
  },
} as const;

type FooterTheme = keyof typeof FOOTER_THEME;

const FooterWrapper = styled.footer<{ $theme: FooterTheme }>`
  background: ${({ $theme }) => FOOTER_THEME[$theme].background};
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 20px 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px 80px;
`;

const Left = styled.div`
  width: 100%;
  max-width: 200px;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.sp}) {
    max-width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 24px 12px;

  @media (max-width: ${breakpoints.sp}) {
    min-width: 100%;
  }
`;

const Column = styled.div`
  width: calc(50% - 6px);
  min-width: 300px;

  @media (max-width: ${breakpoints.sp}) {
    min-width: 100%;
  }
`;

const Heading = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 0 0 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;

  font-size: 14px;
  font-weight: bold;
`;

const HeadingIcon = styled(FontAwesomeIcon)`
  color: #4d6b78;
  font-size: 15px;
`;

const Name = styled(Link)`
  font-size: 20px;
  font-weight: bold;

  &:link,
  &:visited {
    text-decoration: none;
    color: #333;
    cursor: pointer;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  margin-bottom: 12px;
  font-size: 14px;
`;

const Block = styled.div`
  width: 100%;
  text-align: center;
`;

const LinkItem = styled(Link)`
  cursor: pointer !important;

  &:link,
  &:visited {
    color: #000;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.span`
  display: block;
  max-width: 1080px;
  margin: 0 auto;
  padding: 12px 20px;
  text-align: center;
  font-size: 12px;
`;

const SmallText = styled.p`
  margin: 12px 0 0 0;
  font-size: 14px;
`;

export const Footer = ({ type = "default" }: { type?: FooterTheme }) => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper $theme={type}>
      <Inner>
        <Content>
          <Left>
            <Name to="/">株式会社nJOY</Name>

            <SmallText>介護事業所番号: 1465290358</SmallText>
          </Left>

          <Right>
            <Column>
              <Heading>
                <HeadingIcon icon={faBuilding} />
                会社情報
              </Heading>

              <List>
                <Item>
                  <LinkItem to="/company">会社概要</LinkItem>
                </Item>
                <Item>
                  <LinkItem to="/recruit">採用情報</LinkItem>
                </Item>
              </List>
            </Column>

            <Column>
              <Heading>
                <HeadingIcon icon={faUserNurse} />
                げんき訪問看護ステーション
              </Heading>

              <List>
                <Item>
                  <LinkItem to="/genki-station">サービストップ</LinkItem>
                </Item>
                <Item>
                  <LinkItem to="/genki-station/price">利用料金</LinkItem>
                </Item>
              </List>
            </Column>
          </Right>

          <Block>
            <LinkItem to="/訪問看護医療 DX 情報活用加算.pdf" target="_blank">
              訪問看護医療 DX 情報活用加算に関するお知らせ（PDF）
            </LinkItem>
          </Block>
        </Content>
      </Inner>

      <Copyright>© {year} 株式会社nJOY. All Rights Reserved.</Copyright>
    </FooterWrapper>
  );
};
