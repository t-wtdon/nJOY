import React from "react";
import { Helmet } from "react-helmet-async";
import { Mv } from "../common/pages/Genki/Mv";
import { About } from "../common/pages/Genki/About";
import { SlideShow } from "../common/pages/Home/Slideshow";
import { Staff } from "../common/pages/Genki/Staff";
import { Point } from "../common/pages/Genki/Point";
import { Access } from "../common/pages/Genki/Access";
import { Vision } from "../common/pages/Genki/Vision";
import { Info } from "../common/pages/Home/ Info";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { ScrollToTop } from "../common/ScrollToTop";

const Container = styled.section`
  padding-top: 70px; // header分余白を取ってる
`;

const ContentInner = styled.div`
  width: 100%;
  max-width: 1080px;
  width: calc(100% - 40px);
  margin: 0 auto 80px;
  padding: 0 20px;

  @media (max-width: ${breakpoints.sp}) {
    padding: 0 12px;
    margin: 0 auto 80px;
  }
`;

export const Genki = () => {
  return (
    <Container>
      <Helmet>
        <title>げんき訪問看護ステーション | 株式会社nJOY</title>

        <meta
          name="description"
          content="げんき訪問看護ステーションは、株式会社nJOYが提供する訪問看護サービスです。ご自宅での療養をサポートし、安心の医療ケアを提供します。"
        />
        <meta
          name="keywords"
          content="げんき訪問看護ステーション, 訪問看護, 在宅医療, 介護, 看護サービス, 在宅ケア, 株式会社nJOY"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP (Open Graph Protocol) */}
        <meta
          property="og:title"
          content="げんき訪問看護ステーション | 株式会社nJOY"
        />
        <meta
          property="og:description"
          content="げんき訪問看護ステーションは、株式会社nJOYが提供する訪問看護サービスです。ご自宅での療養をサポートし、安心の医療ケアを提供します。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://n-joy.jp/genki" />
        <meta
          property="og:image"
          content="https://n-joy.jp/assets/images/ogp-genki.jpg"
        />
        <meta property="og:site_name" content="株式会社nJOY" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="げんき訪問看護ステーション | 株式会社nJOY"
        />
        <meta
          name="twitter:description"
          content="げんき訪問看護ステーションは、株式会社nJOYが提供する訪問看護サービスです。ご自宅での療養をサポートし、安心の医療ケアを提供します。"
        />
        <meta
          name="twitter:image"
          content="https://n-joy.jp/assets/images/ogp-genki.jpg"
        />
      </Helmet>

      <ScrollToTop />
      <Mv />
      <About />
      <ContentInner>
        <SlideShow />
        <Point />
        <Vision />
        <Staff />
        <Access />
      </ContentInner>
      <SlideShow />
      <Info />
    </Container>
  );
};
