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
        <title>【公式】株式会社nJOY | 株式会社nJOY</title>
        <meta
          name="description"
          content="株式会社nJOYは、訪問介護・福祉サービスを提供する企業です。安心と信頼の介護をお届けします。"
        />
        <meta
          name="keywords"
          content="訪問介護, 介護サービス, 福祉, nJOY, 株式会社nJOY, 介護施設, 介護支援"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP */}
        <meta
          property="og:title"
          content="【公式】株式会社nJOY | 株式会社nJOY"
        />
        <meta
          property="og:description"
          content="株式会社nJOYは、訪問介護・福祉サービスを提供する企業です。安心と信頼の介護をお届けします。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://あなたのサイトのURL/" />
        <meta
          property="og:image"
          content="https://あなたのサイトのURL/assets/images/ogp.jpg"
        />
        <meta property="og:site_name" content="株式会社nJOY" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="【公式】株式会社nJOY | 株式会社nJOY"
        />
        <meta
          name="twitter:description"
          content="株式会社nJOYは、訪問介護・福祉サービスを提供する企業です。安心と信頼の介護をお届けします。"
        />
        <meta
          name="twitter:image"
          content="https://あなたのサイトのURL/assets/images/ogp.jpg"
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
