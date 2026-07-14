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
  type: string;
};

const pageHeadingMap: Record<string, PageHeadingType> = {
  "/genki-station/price": {
    title: "利用料金",
    type: "price",
  },
  "/recruit": {
    title: "採用情報",
    type: "recruit",
  },
};

export const GenkiLayout = ({ children }: GenkiLayoutProps) => {
  const { pathname } = useLocation();
  const pageHeading = pageHeadingMap[pathname];

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Container>
          {pageHeading && (
            <PageHeading title={pageHeading.title} type={pageHeading.type} />
          )}

          {children}

          <SlideShow />
          <Info type="genki" />
        </Container>
      </main>
      <Footer />
    </>
  );
};
