import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
`;

const Logo = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: bold;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: calc(50% - 17px);
    left: 7px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #d5f2e8;
    z-index: -1;
  }
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: calc(50% - 17px);
    left: -7px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #d5eef2;
    z-index: -1;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  margin-right: 24px;
  letter-spacing: 0.03em;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const LinkText = styled.a`
  &:link {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo>nJOY</Logo>
      <Info>
        <Text>
          <LinkText href="mailto:sample@gmail.com">
            メール: sample@gmail.com
          </LinkText>
          <br />
          <LinkText href="tel:090-1111-2222">電話: 090-1111-2222</LinkText>
        </Text>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Info>
    </HeaderWrap>
  );
};
