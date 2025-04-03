import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { SlideShow } from "../common/pages/Home/Slideshow";
import { breakpoints } from "../../styles/breakpoints";
import { Info } from "../common/Info";
import { PageHeading } from "../common/PageHeading";
import { ScrollToTop } from "../common/ScrollToTop";

export const Price = () => {
  const Container = styled.section`
    padding-top: 76px; // header分余白を取ってる

    @media (max-width: ${breakpoints.sp}) {
      padding-top: 74px;
    }
  `;

  const Contents = styled.div`
    max-width: 1080px;
    margin: 60px auto;

    @media (max-width: ${breakpoints.sp}) {
      padding: 0 12px;
    }
  `;

  const Title = styled.h3`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    color: #ff6600;
    text-align: center;
  `;

  const PdfLink = styled.a`
    font-size: 12px;
    color: #333;
    margin-left: 20px;
    cursor: pointer !important;

    &:link,
    &:visited {
      color: #333;
      text-decoration: underline;
    }

    &:hover {
      text-decoration: none;
    }
  `;

  const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  `;

  const THead = styled.thead`
    background: #ffa500;
  `;

  const TBody = styled.tbody``;

  const Row = styled.tr`
    border-bottom: 1px solid #ddd;
  `;

  const Head = styled.th`
    padding: 12px;
    text-align: center;
    color: #fff;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.sp}) {
      font-size: 14px;
    }
  `;

  const Data = styled.td`
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.sp}) {
      font-size: 14px;
    }
  `;

  const TimeHead = styled.th`
    padding: 12px;
    color: #fff;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.sp}) {
      font-size: 14px;
      width: 100px;
    }
  `;

  const TimeData = styled.td`
    text-align: center;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.sp}) {
      font-size: 14px;
      width: 100px;
    }
  `;

  const Item = styled.li`
    @media (max-width: ${breakpoints.sp}) {
      font-size: 14px;
      margin-bottom: 8px;
    }
  `;

  return (
    <Container>
      <Helmet>
        <title>料金案内 | げんき訪問看護ステーション | 株式会社nJOY</title>

        <meta
          name="description"
          content="げんき訪問看護ステーションの料金案内ページです。訪問看護・在宅ケアにかかる料金や加算料金、交通費などの詳細をご覧いただけます。"
        />
        <meta
          name="keywords"
          content="訪問看護料金, 在宅医療, 介護サービス, 看護料金, げんき訪問看護ステーション, 株式会社nJOY"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP (Open Graph Protocol) */}
        <meta
          property="og:title"
          content="料金案内 | げんき訪問看護ステーション | 株式会社nJOY"
        />
        <meta
          property="og:description"
          content="げんき訪問看護ステーションの料金案内ページです。訪問看護・在宅ケアにかかる料金や加算料金、交通費などの詳細をご覧いただけます。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://n-joy.jp/genki/price" />
        <meta
          property="og:image"
          content="https://n-joy.jp/assets/images/ogp-genki-price.jpg"
        />
        <meta property="og:site_name" content="株式会社nJOY" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="料金案内 | げんき訪問看護ステーション | 株式会社nJOY"
        />
        <meta
          name="twitter:description"
          content="げんき訪問看護ステーションの料金案内ページです。訪問看護・在宅ケアにかかる料金や加算料金、交通費などの詳細をご覧いただけます。"
        />
        <meta
          name="twitter:image"
          content="https://n-joy.jp/assets/images/ogp-genki-price.jpg"
        />
      </Helmet>

      <ScrollToTop />
      <PageHeading title="利用料金" type="price" />

      <Contents>
        <Title>
          介護保険適用
          <PdfLink href="/料金表.pdf" target="_blank">
            ※ 詳細なPDF資料はこちら
          </PdfLink>
        </Title>
        <Table>
          <THead>
            <Row>
              <TimeHead>訪問時間</TimeHead>
              <Head>単位数</Head>
              <Head>負担額</Head>
            </Row>
          </THead>
          <TBody>
            <Row>
              <TimeData>20分未満</TimeData>
              <Data>314単位</Data>
              <Data>
                1割負担: 350円
                <br />
                2割負担: 699円
                <br />
                3割負担: 1,048円
              </Data>
            </Row>
            <Row>
              <TimeData>30分未満</TimeData>
              <Data>471単位</Data>
              <Data>
                1割負担: 531円
                <br />
                2割負担: 1,048円
                <br />
                3割負担: 1,572円
              </Data>
            </Row>
            <Row>
              <TimeData>30分以上60分未満</TimeData>
              <Data>823単位</Data>
              <Data>
                1割負担: 922円
                <br />
                2割負担: 1,831円
                <br />
                3割負担: 2,746円
              </Data>
            </Row>
            <Row>
              <TimeData>60分以上90分未満</TimeData>
              <Data>1,128単位</Data>
              <Data>
                1割負担: 1,261円
                <br />
                2割負担: 2,509円
                <br />
                3割負担: 3,763円
              </Data>
            </Row>
          </TBody>
        </Table>

        <h4>加算料金</h4>
        <ul>
          <Item>早朝 (6時〜8時)・夜間 (18時〜22時)は25%増</Item>
          <Item>深夜 (22時〜6時)は50%増</Item>
          <Item>緊急訪問加算(月1回): 668円〜2,002円</Item>
          <Item>
            特別管理加算(特定疾患・医療依存度が高い方対象): 556円〜1,668円
          </Item>
          <Item>退院時共同指導加算: 668円〜2,002円</Item>
          <Item>ターミナルケア加算(終末期支援) 2,780円〜8,340円</Item>
          <Item>長時間訪問看護加算(90分超の訪問): 334円〜1,001円</Item>
          <Item>専門管理加算: 278円～834円</Item>
        </ul>

        <h4>交通費</h4>
        <ul>
          <Item>訪問看護における交通費は原則無料</Item>
          <Item>車を使用した場合で10km以上の場合: 1,000円</Item>
        </ul>
      </Contents>

      {/* 医療保険適用 */}
      <Contents>
        <Title>
          医療保険適用
          <PdfLink href="/料金表.pdf" target="_blank">
            ※ 詳細なPDF資料はこちら
          </PdfLink>
        </Title>
        <Table>
          <THead>
            <Row>
              <TimeHead>訪問日数</TimeHead>
              <Head>負担額</Head>
            </Row>
          </THead>
          <TBody>
            <Row>
              <TimeData>1日目（週3日まで）</TimeData>
              <Data>
                1割負担: 1,322円
                <br />
                2割負担: 2,644円
                <br />
                3割負担: 3,966円
              </Data>
            </Row>
            <Row>
              <TimeData>1日目（週4日以降）</TimeData>
              <Data>
                1割負担: 1,422円
                <br />
                2割負担: 2,844円
                <br />
                3割負担: 4,266円
              </Data>
            </Row>
            <Row>
              <TimeData>2日目以降（週3日まで）</TimeData>
              <Data>
                1割負担: 855円
                <br />
                2割負担: 1,710円
                <br />
                3割負担: 2,565円
              </Data>
            </Row>
            <Row>
              <TimeData>2日目以降（週4日以降）</TimeData>
              <Data>
                1割負担: 955円
                <br />
                2割負担: 1,910円
                <br />
                3割負担: 2,865円
              </Data>
            </Row>
          </TBody>
        </Table>

        <h4>加算料金</h4>
        <ul>
          <Item>早朝 (6時〜8時)・夜間 (18時〜22時)は210~630円</Item>
          <Item>深夜 (22時〜6時)は420円~1260円</Item>
          <Item>緊急訪問看護加算(月1回): 200円〜795円</Item>
          <Item>
            特別管理加算(特定疾患・医療依存度が高い方対象): 250円〜1,500円
          </Item>
          <Item>退院時共同指導加算: 800円〜2,400円</Item>
          <Item>訪問看護ターミナル療養費: 1,000円~7,500円</Item>
          <Item>24時間対応体制加算: 652円〜1,956円</Item>
          <Item>長時間訪問看護加算(90分超の訪問): 520円~1,560円</Item>
          <Item>専門管理加算: 278円～834円</Item>
        </ul>

        <h4>交通費</h4>
        <ul>
          <Item>訪問看護における交通費は原則無料</Item>
          <Item>車を使用した場合で10km以上の場合: 1,000円</Item>
        </ul>
      </Contents>
      <SlideShow />
      <Info type="genki" />
    </Container>
  );
};
