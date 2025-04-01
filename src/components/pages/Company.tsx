import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { SlideShow } from "../common/pages/Home/Slideshow";
import { breakpoints } from "../../styles/breakpoints";
import { Info } from "../common/Info";
import { Access } from "../common/pages/Genki/Access";
import { PageHeading } from "../common/PageHeading";
import { ScrollToTop } from "../common/ScrollToTop";

const ceo = require("../../assets/images/company/ceo.jpg");

export const Company = () => {
  const Container = styled.section`
    padding-top: 76px; // header分余白を取ってる

    @media (max-width: ${breakpoints.sp}) {
      padding-top: 74px;
    }
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

  const Table = styled.table`
    display: block;
    width: 100%;
    max-width: 1080px;
    padding: 0 15px;
    margin: 0 auto;
    border-collapse: collapse;
  `;

  const Row = styled.tr`
    display: block;
    border-top: 1px solid #dae0e0;

    &:last-child {
      border-bottom: 1px solid #dae0e0;
    }
  `;
  const Head = styled.th`
    padding: 12px;
    width: 130px;
    background: #f7f7f7;

    @media (max-width: ${breakpoints.sp}) {
      font-size: 14px;
    }
  `;
  const Data = styled.td`
    padding: 12px;
    letter-spacing: 0.06em;

    @media (max-width: ${breakpoints.sp}) {
      font-size: 14px;
    }
  `;

  const SmallText = styled.span`
    font-weight: bold;
  `;

  const Box = styled.div`
    display: flex;
    align-items: start;
    gap: 24px;
    margin: 40px auto;
    padding: 0 15px;
    max-width: 1080px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.tablet}) {
      flex-wrap: wrap;
    }
  `;

  const Image = styled.img`
    width: 50%;
    max-width: 500px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  `;

  const Contents = styled.div`
    width: calc(50% - 12px);

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  `;

  const Position = styled.p`
    margin: 0 0 24px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.06em;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 0;
      text-align: center;
    }
  `;

  const Name = styled.span`
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
  `;

  const Text = styled.p`
    font-size: 16px;
    line-height: 1.6;
  `;

  const BigTitle = styled.span`
    display: block;
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: bold;
  `;

  return (
    <Container>
      <Helmet>
        <title>会社概要・代表メッセージ | 株式会社nJOY</title>

        <meta
          name="description"
          content="株式会社nJOYの会社概要・代表メッセージをご紹介。企業理念や事業内容、訪問看護・介護サービスの想いについて詳しくご覧いただけます。"
        />
        <meta
          name="keywords"
          content="会社概要, 企業情報, 代表メッセージ, 企業理念, 事業内容, 訪問看護, 在宅介護, 株式会社nJOY"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP (Open Graph Protocol) */}
        <meta
          property="og:title"
          content="会社概要・代表メッセージ | 株式会社nJOY"
        />
        <meta
          property="og:description"
          content="株式会社nJOYの会社概要・代表メッセージをご紹介。企業理念や事業内容、訪問看護・介護サービスの想いについて詳しくご覧いただけます。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://n-joy.jp/company" />
        <meta
          property="og:image"
          content="https://n-joy.jp/assets/images/ogp.jpg"
        />
        <meta property="og:site_name" content="株式会社nJOY" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="会社概要・代表メッセージ | 株式会社nJOY"
        />
        <meta
          name="twitter:description"
          content="株式会社nJOYの会社概要・代表メッセージをご紹介。企業理念や事業内容、訪問看護・介護サービスの想いについて詳しくご覧いただけます。"
        />
        <meta
          name="twitter:image"
          content="https://n-joy.jp/assets/images/ogp.jpg"
        />
      </Helmet>
      <ScrollToTop />
      <PageHeading title="会社概要" type="company" />

      <Box>
        <Image src={ceo} alt="" />
        <Contents>
          <Position>
            代表取締役
            <Name>石井達也</Name>
          </Position>
          <Text>
            はじめまして。株式会社nJOYの石井達也です。
            <br />
            <br />
            私はこれまで、病院や在宅医療の現場で、多くの患者さんやご家族と向き合ってきました。
            その経験の中で、看護の力は「病気になった人を支える」だけでなく、
            「病気にならないための支え」としても活かせると強く感じるようになりました。
            <br />
            <br />
            nJOYの「n」は“看護（Nursing）”を意味し、私たち看護師がこの職業に誇りと喜びを持ち、
            「看護を楽しみ、地域を元気にする」ことをモットーに掲げています。その想いを形にするため、
            訪問看護をはじめ、未病への貢献や救急車搬送件数の縮小など、さまざまな業種と協力しながら、
            新しいカタチの看護を実現し、社会や地域に貢献していきます。その第一歩として、「げんき訪問看護ステーション」を立ち上げました。
            <br />
            <br />
            私たちは、医療や看護・介護が必要な方だけでなく、地域に暮らすすべての人が「元気で自分らしく生きる」ことを支えたいと考えています。
            nJOYが、皆さまの安心や笑顔をつくるお手伝いができれば幸いです。
            <br />
            <br />
            元気をもらい、その元気を地域に届ける——
            <br />
            <br />
            そんな未来を、nJOYの仲間とともに創り上げていきます。
            <br />
            どうぞよろしくお願いいたします。
          </Text>
        </Contents>
      </Box>

      <Box>
        <Text>
          <BigTitle>代表者略歴</BigTitle>
          •
          2001年（株）オリエンタルランド入社（ディズニーシーでオープニングキャスト）
          <br />
          • 2003年 セントケア（株） ホームヘルパー2級取得
          <br />
          • 2007年 日本医科大学看護専門学校卒業
          <br />
          • 2007年
          日本医科大学武蔵小杉病院入職（整形病棟・救命救急センターで勤務）
          <br />
          • 2016年 医療法人はなまるクリニック（看護師長）
          <br />
          • 2020年 国際医療福祉大学大学院修士課程 診療看護師（NP）資格を取得
          <br />
          • 2024年（株）nJOY設立
          <br />• 2025年 げんき訪問看護ステーション設立
        </Text>
      </Box>

      <Table>
        <Row>
          <Head>会社名</Head>
          <Data>株式会社nJOY</Data>
        </Row>
        <Row>
          <Head>取締役</Head>
          <Data>石井達也</Data>
        </Row>
        <Row>
          <Head>設立年月日</Head>
          <Data>令和6年12月16日</Data>
        </Row>
        <Row>
          <Head>所在地</Head>
          <Data>
            <SmallText>げんき訪問看護ステーション: </SmallText>
            神奈川県川崎市中原区丸子町715-10
          </Data>
        </Row>
        <Row>
          <Head>事業内容</Head>
          <Data>訪問看護事業</Data>
        </Row>
        <Row>
          <Head>従業員数</Head>
          <Data>3人</Data>
        </Row>
        <Row>
          <Head>連絡先</Head>
          <Data>
            <SmallText>メール: </SmallText>njoy3peace@gmail.com
          </Data>
        </Row>
        <Row>
          <Head>介護事業所番号</Head>
          <Data>1465290358</Data>
        </Row>
      </Table>

      <ContentInner>
        <Access />
      </ContentInner>
      <SlideShow />
      <Info />
    </Container>
  );
};
