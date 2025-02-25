import React from "react";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const staff1 = require("../../../../assets/images/slide/slide1.jpg");
const staff2 = require("../../../../assets/images/slide/slide2.jpg");
const staff3 = require("../../../../assets/images/slide/slide3.jpg");
const staff4 = require("../../../../assets/images/slide/slide4.jpg");
const staff5 = require("../../../../assets/images/slide/slide5.jpg");
const staff6 = require("../../../../assets/images/slide/slide6.jpg");
const staff7 = require("../../../../assets/images/slide/slide7.jpg");
const staff8 = require("../../../../assets/images/slide/slide8.jpg");
const staff9 = require("../../../../assets/images/slide/slide9.jpg");

const images = [
  staff1,
  staff2,
  staff3,
  staff4,
  staff5,
  staff6,
  staff7,
  staff8,
  staff9,
];

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  white-space: nowrap;
`;

const SliderTrack = styled.div`
  display: flex;
  width: calc(2 * 300px * ${images.length}px);
  object-fit: cover;
  animation: ${scrollAnimation} 10s linear infinite;
  object-fit: cover;
`;

const Slide = styled.img`
  width: 300px;
  height: 200px;
  flex-shrink: 0;
`;

export const SlideShow = () => {
  return (
    <SliderContainer>
      <SliderTrack>
        {images.concat(images).map((src, index) => (
          <Slide key={index} src={src} alt={`Slide ${index}`} />
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};
