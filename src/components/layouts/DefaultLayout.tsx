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

type DefaultLayoutProps = {
  children: React.ReactNode;
};

type PageHeadingType = {
  title: string;
  imgType: string;
};

const pageHeadingMap: Record<string, PageHeadingType> = {
  "/company": {
    title: "会社概要",
    imgType: "company",
  },
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { pathname } = useLocation();
  const pageHeading = pageHeadingMap[pathname];

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Container>
          {pageHeading && (
            <PageHeading
              title={pageHeading.title}
              imgType={pageHeading.imgType}
            />
          )}

          {children}

          <SlideShow />
          <Info />
        </Container>
      </main>
      <Footer />
    </>
  );
};
