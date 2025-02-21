import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const Container = styled.div`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const Box = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  background: #cae2e6;
  box-sizing: border-box;
`;

const List = styled.ul`
  padding-left: 20px;
`;

export const Area = () => {
  return (
    <Container>
      <Heading title="対応エリア" />

      <Box>
        <List>
          <li>〇〇市（全域）</li>
          <li>〇〇区、〇〇区、〇〇区（一部地域を除く）</li>
          <li>〇〇町、〇〇町</li>
        </List>

        <p>※対応エリア外でも訪問可能な場合がございますので、ご相談ください。</p>
      </Box>
    </Container>
  );
};
