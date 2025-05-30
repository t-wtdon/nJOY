import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { Link } from "react-router-dom";

const logo = require(`../../assets/images/logo.png`);

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
    cursor: pointer;
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
`;

const SmallIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

const MenuBox = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 80px 15px;
  text-align: center;
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  display: inline-block;
  width: 100%;
  color: #000;
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:link,
  &:visited {
    cursor: pointer;
    color: #333;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 15px;
  right: 24px;
  cursor: pointer;
  font-size: 28px;
  color: #000;
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <HeaderWrap>
      <Logo to="/">
        <Image src={logo} alt="ロゴ" />
      </Logo>
      <Info>
        <ContactMenu>
          <LinkText href="tel:044-322-8711">
            <SmallIcon icon={faPhone} size="2x" />
            044-322-8711
          </LinkText>
          <LinkText href="mailto:genki.2025.3@gmail.com">
            <SmallIcon icon={faEnvelope} size="2x" />
            genki.2025.3@gmail.com
          </LinkText>
        </ContactMenu>

        <Icon
          icon={faBars}
          size="2x"
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
        />
      </Info>

      <MenuBox isOpen={isMenuOpen} onClick={handleClickOutside}>
        <CloseButton icon={faTimes} onClick={toggleMenu} />
        <MenuList>
          <MenuItem>
            <MenuLink to="/" onClick={toggleMenu}>
              トップページ
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/company" onClick={toggleMenu}>
              会社概要
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/genki-station" onClick={toggleMenu}>
              げんき訪問看護ステーション
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/genki-station/price" onClick={toggleMenu}>
              利用料金(げんき訪問看護ステーション)
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/訪問看護医療 DX 情報活用加算.pdf"
              target="_blank"
              onClick={toggleMenu}
            >
              訪問看護医療 DX 情報活用加算に関するお知らせ（PDF）
            </MenuLink>
          </MenuItem>
        </MenuList>
      </MenuBox>
    </HeaderWrap>
  );
};
