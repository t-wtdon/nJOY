import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { Link } from "react-router-dom";
import { Menus } from "./Menus";

const HEADER_THEME = {
  default: {
    logo: require("../../assets/images/logo.png"),
    link: "/",
    mailto: "njoy3peace@gmail.com",
    tel: "044-322-8711",
  },
  genki: {
    logo: require("../../assets/images/genki/genki_logo.png"),
    link: "",
    mailto: "genki.2025.3@gmail.com",
    tel: "044-322-8711",
  },
} as const;

type HeaderTheme = keyof typeof HEADER_THEME;

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.7);
`;

const Logo = styled(Link)`
  cursor: pointer !important;
  height: 50px;
`;

const ButtonLink = styled(Link)`
  margin: 0 20px;
  border-radius: 20px;
  padding: 10px 24px;
  transition: all 0.3s;

  &:link,
  &:visited {
    color: #fff;
    background: #ff6600;
    text-decoration: none;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${breakpoints.sp}) {
    display: none;
  }
`;

const Image = styled.img`
  height: 50px;
  object-fit: contain;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ContactMenu = styled.div`
  @media (max-width: ${breakpoints.sp}) {
    display: none;
  }
`;

const LinkText = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  &:link {
    color: #000;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 24px;
  cursor: pointer;
`;

const SmallIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

export const Header = ({ type = "default" }: { type?: HeaderTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <HeaderWrap>
      <Logo to={HEADER_THEME[type].link}>
        <Image src={HEADER_THEME[type].logo} alt="ロゴ" />
      </Logo>

      <Info>
        <ContactMenu>
          <LinkText href={`tel:${HEADER_THEME[type].tel}`}>
            <SmallIcon icon={faPhone} />
            {HEADER_THEME[type].tel}
          </LinkText>

          <LinkText href={`mailto:${HEADER_THEME[type].mailto}`}>
            <SmallIcon icon={faEnvelope} />
            {HEADER_THEME[type].mailto}
          </LinkText>
        </ContactMenu>

        <ButtonLink to="/recruit">採用はこちら</ButtonLink>

        <Icon icon={faBars} size="2x" onClick={toggleMenu} />
      </Info>

      <Menus isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </HeaderWrap>
  );
};
