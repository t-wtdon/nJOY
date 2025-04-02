import React from "react";
import styled, { keyframes } from "styled-components";

const slide1 = require("../../../../assets/images/slide/slide1.jpg");
const slide2 = require("../../../../assets/images/slide/slide2.jpg");
const slide4 = require("../../../../assets/images/slide/slide4.jpg");
const slide5 = require("../../../../assets/images/slide/slide5.jpg");
const slide6 = require("../../../../assets/images/slide/slide6.jpg");
const slide7 = require("../../../../assets/images/slide/slide7.jpg");
const slide8 = require("../../../../assets/images/slide/slide8.jpg");
const slide10 = require("../../../../assets/images/slide/slide10.jpg");
const slide11 = require("../../../../assets/images/slide/slide11.jpg");
const slide12 = require("../../../../assets/images/slide/slide12.jpg");
const slide13 = require("../../../../assets/images/slide/slide13.jpg");
const slide15 = require("../../../../assets/images/slide/slide15.jpg");
const slide16 = require("../../../../assets/images/slide/slide16.jpg");

const images = [
  slide1,
  slide2,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide10,
  slide11,
  slide12,
  slide13,
  slide15,
  slide16,
];

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SliderContainer = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  white-space: nowrap;
`;

const SliderTrack = styled.div`
  display: flex;
  width: calc(300px * ${images.length} * 2);
  animation: ${scrollAnimation} 75s linear infinite;
  object-fit: cover;
`;

const Slide = styled.img`
  width: 300px;
  height: 200px;
  flex-shrink: 0;
  object-fit: cover;
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
