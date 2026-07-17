import React from "react";
import styled from "styled-components";

const HeadArea = styled.section<{ $bgImgType: string }>`
  padding: 80px 15px;
  text-align: center;
  margin-bottom: 40px;
  background-size: cover;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) =>
      require(`../../assets/images/pageHead/${props.$bgImgType}.jpg`)});
`;

const HeadingContent = styled.h2<{ $color: string }>`
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 4px;
  border-bottom: 2px solid ${(props) => props.$color};
  margin: 0;
  color: white; /* 文字色を白に */
`;

const serviceColor = {
  default: "#ff6600",
  genki: "#ff6600",
} as const;
type PageType = keyof typeof serviceColor;

export const PageHeading = ({
  title,
  type = "default",
  imgType,
}: {
  title: string;
  type?: PageType;
  imgType: string;
}) => {
  return (
    <HeadArea $bgImgType={imgType}>
      <HeadingContent $color={serviceColor[type]}>{title}</HeadingContent>
    </HeadArea>
  );
};
