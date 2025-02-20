import React from "react";
import styled from "styled-components";

export const Footer = () => {
  const Footer = styled.footer`
    background: #daeff2;
  `;

  const Inner = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    padding: 80px 20px 20px;

    justify-content: space-between;
  `;

  const Name = styled.p`
    margin: 0 0 20px;
    font-size: 20px;
    font-weight: bold;
  `;

  const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 50%;
  `;

  const Item = styled.li`
    margin-bottom: 12px;
  `;

  const LinkItem = styled.a`
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

  const year = new Date().getFullYear();

  return (
    <Footer>
      <Inner>
        <Name>株式会社nJOY</Name>

        <List>
          <Item>
            <LinkItem href="./">お問い合わせ</LinkItem>
          </Item>
          {/* <Item>
            <LinkItem href="./">特徴</LinkItem>
          </Item>
          <Item>
            <LinkItem href="./">アクセス</LinkItem>
          </Item> */}
        </List>
      </Inner>

      <Copyright>© {year} 株式会社nJOY. All Rights Reserved.</Copyright>
    </Footer>
  );
};
