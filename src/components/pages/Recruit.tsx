import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { SlideShow } from "../common/pages/Home/Slideshow";
import { breakpoints } from "../../styles/breakpoints";
import { Info } from "../common/Info";
import { PageHeading } from "../common/PageHeading";
import { ScrollToTop } from "../common/ScrollToTop";
import { Heading } from "../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Recruit = () => {
  const Container = styled.section`
    padding-top: 76px; // header分余白を取ってる

    @media (max-width: ${breakpoints.sp}) {
      padding-top: 74px;
    }
  `;

  const Contents = styled.div`
    max-width: 1080px;
    margin: 60px auto;
    padding: 0 15px;

    @media (max-width: ${breakpoints.sp}) {
      padding: 0 12px;
    }
  `;

  const Text = styled.p`
    text-align: center;
    margin: 0;
  `;

  const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
    margin-top: 60px;
    padding: 0;

    @media (max-width: ${breakpoints.tablet}) {
      gap: 80px 0;
    }
  `;
  const Item = styled.li`
    position: relative;
    padding: 40px 16px 20px;
    width: calc(50% - 12px);
    border: 2px solid #f97316;
    border-radius: 16px;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  `;
  const ContentTitle = styled.h2`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    background: #fff;
    margin: 0;
    padding: 0 24px;
    width: 70%;
    text-align: center;
  `;
  const ContentList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto 24px;
    width: 70%;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  `;
  const ContentItem = styled.li`
    margin-bottom: 8px;
  `;
  const Btn = styled.a`
    display: block;
    background: #f97316;
    border: 0;
    border-radius: 10px;
    width: 70%;
    padding: 16px 24px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s;
    text-align: center;
    box-sizing: border-box;

    &:link,
    &:visited {
      cursor: pointer;
      color: #fff;
      text-decoration: none;
    }
    &:hover {
      opacity: 0.7;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  `;
  const Icon = styled(FontAwesomeIcon)`
    color: #22c55e;
    margin-right: 12px;
  `;
  const SubLink = styled.a`
    display: block;
    text-align: center;
    margin-top: 10px;
    font-size: 12px;

    &:link,
    &:visited {
      color: #007dc5;
      text-decoration: none;
      cursor: pointer;
    }
    &:hover {
      text-decoration: underline;
    }
  `;

  const recruitData = [
    {
      title: "訪問リハビリスタッフ",
      link: "https://clients.itszai.jp/4d6a49784f44593d/recruitments/355507?utm_source_referrer=%2F4d6a49784f44593d%2Fjob%2F18438",
      subLink: "https://clients.itszai.jp/4d6a49784f44593d/job/18438",
      features: [
        "年間休日120日以上",
        "残業なしで働きやすい",
        "チーム医療で支える環境",
        "丁寧なOJT研修あり",
        "住宅手当・子ども手当あり",
      ],
    },
    {
      title: "在宅生活を支える訪問看護師",
      link: "https://clients.itszai.jp/4d6a49784f44593d/recruitments/355508?utm_source_referrer=%2F4d6a49784f44593d%2Fjob%2F18439",
      subLink: "https://clients.itszai.jp/4d6a49784f44593d/job/18439",
      features: [
        "資格があればOK/未経験歓迎",
        "年間休日120日以上",
        "子育て・時短相談可",
        "駅チカ・通いやすい",
        "幅広い看護支援に携われる",
      ],
    },
  ];

  return (
    <Container>
      <Helmet>
        <title>採用情報 | げんき訪問看護ステーション | 株式会社nJOY</title>

        <meta
          name="description"
          content="げんき訪問看護ステーション（株式会社nJOY）の採用情報ページです。訪問看護師・スタッフ募集要項、働き方、福利厚生、応募方法についてご案内しています。"
        />
        <meta
          name="keywords"
          content="訪問看護 求人, 看護師 募集, 訪問看護師 採用, げんき訪問看護ステーション 採用, 株式会社nJOY 求人"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP (Open Graph Protocol) */}
        <meta
          property="og:title"
          content="採用情報 | げんき訪問看護ステーション | 株式会社nJOY"
        />
        <meta
          property="og:description"
          content="げんき訪問看護ステーションでは訪問看護師・スタッフを募集しています。地域医療に貢献したい方、在宅ケアに興味のある方はぜひご応募ください。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://n-joy.jp/genki/recruit" />
        <meta
          property="og:image"
          content="https://n-joy.jp/assets/images/ogp-genki-recruit.jpg"
        />
        <meta property="og:site_name" content="株式会社nJOY" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="採用情報 | げんき訪問看護ステーション | 株式会社nJOY"
        />
        <meta
          name="twitter:description"
          content="げんき訪問看護ステーションでは訪問看護師・スタッフを募集しています。働きやすい環境と充実したサポート体制をご紹介します。"
        />
        <meta
          name="twitter:image"
          content="https://n-joy.jp/assets/images/ogp-genki-recruit.jpg"
        />
      </Helmet>

      <ScrollToTop />
      <PageHeading title="採用情報" type="recruit" />

      <Contents>
        <Heading title="地域に寄り添う看護を、一緒に。" />
        <Text>げんき訪問看護ステーションでは 訪問看護師を募集しています。</Text>

        <List>
          <>
            {recruitData.map((data) => (
              <Item>
                <ContentTitle>{data.title}</ContentTitle>
                <ContentList>
                  {data.features.map((feature) => (
                    <ContentItem>
                      <Icon icon={faCheck} />
                      {feature}
                    </ContentItem>
                  ))}
                </ContentList>

                <Btn href={data.link} target="_blank" rel="noopener noreferrer">
                  募集要項を見る
                </Btn>
                <SubLink
                  href={data.subLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  想いについてはこちら
                </SubLink>
              </Item>
            ))}
          </>
        </List>
      </Contents>
      <SlideShow />
      <Info type="genki" />
    </Container>
  );
};
