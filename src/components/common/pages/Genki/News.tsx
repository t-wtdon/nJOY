import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const Container = styled.section`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  text-align: center;
`;

const LinkText = styled.a`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer !important;
  color: #333;

  &:link,
  &:visited {
    color: #333;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Date = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-right: 40px;
`;

export const News = () => {
  return (
    <Container>
      <Heading title="お知らせ" />

      <List>
        <Item>
          <Date>2025.04.01</Date>
          <LinkText href="/訪問看護医療 DX 情報活用加算.pdf" target="_blank">
            訪問看護医療 DX 情報活用加算に関するお知らせ（PDF）
          </LinkText>
        </Item>
      </List>
    </Container>
  );
};
