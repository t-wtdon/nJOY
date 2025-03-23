import React from "react";
import { Helmet } from "react-helmet-async";
import { Mv } from "../common/pages/Home/Mv";
import { About } from "../common/pages/Home/About";
import { Features } from "../common/pages/Home/Features";
import { SlideShow } from "../common/pages/Home/Slideshow";
import { Info } from "../common/pages/Home/ Info";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { ScrollToTop } from "../common/ScrollToTop";
import { Business } from "../common/pages/Home/Business";

const Container = styled.section`
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

export const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>訪問看護・介護サービスなら株式会社nJOY | 安心の在宅ケア</title>

        <meta
          name="description"
          content="株式会社nJOYは訪問看護・介護サービスを提供。専門スタッフがご自宅でのケアを支援し、安心と信頼の在宅医療をお届けします。"
        />
        <meta
          name="keywords"
          content="訪問看護, 在宅介護, 介護サービス, 福祉, nJOY, 株式会社nJOY, 訪問リハビリ, 介護支援"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP (Open Graph Protocol) */}
        <meta
          property="og:title"
          content="訪問看護・介護サービスなら株式会社nJOY | 安心の在宅ケア"
        />
        <meta
          property="og:description"
          content="株式会社nJOYは訪問看護・介護サービスを提供。専門スタッフがご自宅でのケアを支援し、安心と信頼の在宅医療をお届けします。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://n-joy.jp/" />
        <meta
          property="og:image"
          content="https://n-joy.jp/assets/images/ogp.jpg"
        />
        <meta property="og:site_name" content="株式会社nJOY" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="訪問看護・介護サービスなら株式会社nJOY | 安心の在宅ケア"
        />
        <meta
          name="twitter:description"
          content="株式会社nJOYは訪問看護・介護サービスを提供。専門スタッフがご自宅でのケアを支援し、安心と信頼の在宅医療をお届けします。"
        />
        <meta
          name="twitter:image"
          content="https://n-joy.jp/assets/images/ogp.jpg"
        />
      </Helmet>
      <ScrollToTop />
      <Mv />
      <ContentInner>
        <About />
        <SlideShow />
        <Features />
        <Business />
      </ContentInner>
      <SlideShow />
      <Info />
    </Container>
  );
};
