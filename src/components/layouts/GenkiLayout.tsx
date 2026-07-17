import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { ScrollToTop } from "../common/ScrollToTop";
import { SlideShow } from "../common/pages/Home/Slideshow";
import { Info } from "../common/Info";
import { PageHeading } from "../common/PageHeading";

const Container = styled.section`
  padding-top: 76px; // header分余白を取ってる

  @media (max-width: ${breakpoints.sp}) {
    padding-top: 74px;
  }
`;

type GenkiLayoutProps = {
  children: React.ReactNode;
};

type PageHeadingType = {
  title: string;
  imgType: string;
};

const pageHeadingMap: Record<string, PageHeadingType> = {
  "/genki-station/price": {
    title: "げんき訪問看護ステーションの利用料金",
    imgType: "price",
  },
  "/recruit": {
    title: "採用情報",
    imgType: "recruit",
  },
};

export const GenkiLayout = ({ children }: GenkiLayoutProps) => {
  const { pathname } = useLocation();
  const pageHeading = pageHeadingMap[pathname];

  return (
    <>
      <ScrollToTop />
      <Header type="genki" />
      <main>
        <Container>
          {pageHeading && (
            <PageHeading
              title={pageHeading.title}
              imgType={pageHeading.imgType}
              type="genki"
            />
          )}

          {children}

          <SlideShow />
          <Info type="genki" />
        </Container>
      </main>
      <Footer type="genki" />
    </>
  );
};
