import React from "react";
import { Helmet } from "react-helmet-async";
import { Mv } from "../common/pages/Genki/Mv";
import { About } from "../common/pages/Genki/About";
import { SlideShow } from "../common/pages/Home/Slideshow";
import { Staff } from "../common/pages/Genki/Staff";
import { Area } from "../common/pages/Genki/Area";
import { Voice } from "../common/pages/Genki/Voice";
import { Point } from "../common/pages/Genki/Point";
import { Access } from "../common/pages/Genki/Access";
import { Vision } from "../common/pages/Genki/Vision";
import { Info } from "../common/pages/Home/ Info";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { ScrollToTop } from "../common/ScrollToTop";

const Container = styled.main`
  padding-top: 56px; // header分余白を取ってる
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
        <title>【公式】げんき訪問看護ステーション | 株式会社nJOY</title>
        <meta
          name="description"
          content="げんき訪問看護ステーションは、訪問看護・医療支援を提供し、あなたの暮らしをサポートします。"
        />
        <meta
          name="keywords"
          content="訪問看護, 医療支援, 介護, 看護サービス, げんき訪問看護ステーション, 株式会社nJOY"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP */}
        <meta
          property="og:title"
          content="【公式】げんき訪問看護ステーション | 株式会社nJOY"
        />
        <meta
          property="og:description"
          content="げんき訪問看護ステーションは、訪問看護・医療支援を提供し、あなたの暮らしをサポートします。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://あなたのサイトのURL/genki" />
        <meta
          property="og:image"
          content="https://あなたのサイトのURL/assets/images/genki/ogp.jpg"
        />
        <meta property="og:site_name" content="げんき訪問看護ステーション" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="【公式】げんき訪問看護ステーション | 株式会社nJOY"
        />
        <meta
          name="twitter:description"
          content="げんき訪問看護ステーションは、訪問看護・医療支援を提供し、あなたの暮らしをサポートします。"
        />
        <meta
          name="twitter:image"
          content="https://あなたのサイトのURL/assets/images/genki/ogp.jpg"
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
        <Area />
        <Voice />
        <Access />
      </ContentInner>
      <SlideShow />
      <Info />
    </Container>
  );
};
