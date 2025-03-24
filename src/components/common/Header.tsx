import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
  background: #fff;
`;

const Logo = styled(Link)`
  height: 40px;
`;

const Image = styled.img`
  height: 40px;
  object-fit: contain;
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
        <Text>
          <LinkText href="mailto:sample@gmail.com">
            メールでのお問い合わせはこちら: sample@gmail.com
          </LinkText>
        </Text>
        <FontAwesomeIcon
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
        </MenuList>
      </MenuBox>
    </HeaderWrap>
  );
};
