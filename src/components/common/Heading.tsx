import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const HeadArea = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const HeadingContent = styled.h2`
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 4px;
  border-bottom: 3px solid #ff6600;
  margin: 0;

  @media (max-width: ${breakpoints.sp}) {
    font-size: 28px;
  }
`;

export const Heading = ({ title }: { title: string }) => {
  return (
    <HeadArea>
      <HeadingContent>{title}</HeadingContent>
    </HeadArea>
  );
};
