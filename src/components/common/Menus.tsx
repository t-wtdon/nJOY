import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronRight,
  faHouse,
  faBuilding,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";

const logoImage = require(`../../assets/images/logo.png`);

const Logo = styled(Link)`
  position: relative;
  cursor: pointer !important;
  height: 50px;
  top: 7px;
  left: 24px;
`;

const Image = styled.img`
  height: 50px;
  object-fit: contain;
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(6px);

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};

  transition: 0.3s;
  z-index: 1000;
`;

const MenuBox = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;

  width: 420px;
  max-width: 33vw;
  min-width: 360px;
  height: 100%;

  background: white;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.08);

  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;

  overflow-y: auto;
  overscroll-behavior: contain;

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
    max-width: none;
    min-width: 0;
  }
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 80px 24px 24px;
  margin: 0;

  @media (max-width: ${breakpoints.sp}) {
    padding-top: 24px;
  }
`;

const MenuItem = styled.li`
  border-bottom: 1px solid #e9ecef;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 0;

  color: #333;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s;

  &:link,
  &:visited {
    cursor: pointer;
    color: #333;
    text-decoration: none;
  }

  &:active {
    color: #000 !important;
  }
`;

const SubMenuLink = styled(MenuLink)`
  padding-left: 24px;
  font-size: 16px;
  font-weight: 500;
`;

const SubMenu = styled.ul<{ $isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;

  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
  overflow: hidden;

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-8px")});

  transition:
    max-height 0.3s ease,
    opacity 0.25s ease,
    transform 0.25s ease;
`;

const SubMenuItem = styled.li``;

const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 15px;
  right: 24px;
  cursor: pointer;
  font-size: 28px;
  color: #000;
`;

const ArrowIcon = styled(FontAwesomeIcon)<{ $isOpen?: boolean }>`
  font-size: 14px;
  color: #999;

  transition: transform 0.25s ease;

  transform: rotate(${({ $isOpen }) => ($isOpen ? "90deg" : "0deg")});
`;

const MenuIcon = styled(FontAwesomeIcon)`
  width: 20px;
  margin-right: 16px;
  color: #4d6b78;
  font-size: 18px;
  flex-shrink: 0;
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 0;
  border: 0;
  outline: none;
  background: inherit;
  font-family: "Noto Serif JP", serif;
  cursor: pointer;

  color: #333;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s;

  &:link,
  &:visited {
    cursor: pointer;
    color: #333;
    text-decoration: none;
  }
`;

const ButtonLink = styled(Link)`
  text-align: center;
  display: block;
  cursor: pointer;
  padding: 0 24px;

  &:link,
  &:visited {
    cursor: pointer;
    color: #333;
  }
`;

export const Menus = ({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) => {
  const [openMenus, setOpenMenus] = useState({
    company: false,
    station: false,
  });
  const toggleSubMenu = (key: keyof typeof openMenus) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <Overlay $isOpen={isMenuOpen} onClick={toggleMenu}>
      <MenuBox $isOpen={isMenuOpen} onClick={(e) => e.stopPropagation()}>
        <Logo to="/">
          <Image src={logoImage} alt="ロゴ" />
        </Logo>
        <CloseButton icon={faTimes} onClick={toggleMenu} />
        <MenuList>
          <MenuItem>
            <MenuLink to="/" onClick={toggleMenu}>
              <MenuTitle>
                <MenuIcon icon={faHouse} />
                <span>トップページ</span>
              </MenuTitle>

              <ArrowIcon icon={faChevronRight} />
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuButton onClick={() => toggleSubMenu("company")}>
              <MenuTitle>
                <MenuIcon icon={faBuilding} />
                会社情報
              </MenuTitle>

              <ArrowIcon icon={faChevronRight} $isOpen={openMenus.company} />
            </MenuButton>
            <SubMenu $isOpen={openMenus.company}>
              <SubMenuItem>
                <SubMenuLink to="/company" onClick={toggleMenu}>
                  会社概要
                  <ArrowIcon icon={faChevronRight} />
                </SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink to="/recruit" onClick={toggleMenu}>
                  採用情報
                  <ArrowIcon icon={faChevronRight} />
                </SubMenuLink>
              </SubMenuItem>
            </SubMenu>
          </MenuItem>

          {/* げんき訪問看護ステーション */}
          <MenuItem>
            <MenuButton onClick={() => toggleSubMenu("station")}>
              <MenuTitle>
                <MenuIcon icon={faUserNurse} />
                げんき訪問看護ステーション
              </MenuTitle>

              <ArrowIcon icon={faChevronRight} $isOpen={openMenus.station} />
            </MenuButton>
            <SubMenu $isOpen={openMenus.station}>
              <SubMenuItem>
                <SubMenuLink to="/genki-station" onClick={toggleMenu}>
                  サービストップ
                  <ArrowIcon icon={faChevronRight} />
                </SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink to="/genki-station/price" onClick={toggleMenu}>
                  利用料金
                  <ArrowIcon icon={faChevronRight} />
                </SubMenuLink>
              </SubMenuItem>
            </SubMenu>
          </MenuItem>
        </MenuList>

        <ButtonLink
          to="/訪問看護医療 DX 情報活用加算.pdf"
          target="_blank"
          onClick={toggleMenu}
        >
          訪問看護医療DX情報活用加算に関するお知らせ（PDF）
        </ButtonLink>
      </MenuBox>
    </Overlay>
  );
};
