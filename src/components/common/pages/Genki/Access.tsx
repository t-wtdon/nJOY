import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const Container = styled.section`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  width: 100%;
  text-align: center;
`;

const Name = styled.h3`
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  margin: 8px 0;
  text-align: center;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export const Access = () => {
  return (
    <Container>
      <Heading title="アクセス" />

      <List>
        <Item>
          <iframe
            title="株式会社nJOY"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.6702981590033!2d139.63392597571368!3d35.58652877261798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5ba46ef254f%3A0x881edab6ce649c9f!2z44CSMjExLTAwNTMg56We5aWI5bed55yM5bed5bSO5biC5Lit5Y6f5Yy65LiK5bCP55Sw5Lit77yT5LiB55uu77yR77yT4oiS77yR77yTIOWwj-eUsOS4reOCs-ODvOODnQ!5e0!3m2!1sja!2sjp!4v1739853046521!5m2!1sja!2sjp"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Name>げんき訪問看護ステーション</Name>
          <Text>
            <BoldText>住所:</BoldText> 神奈川県川崎市中原区丸子町715-10
          </Text>
          <Text>
            <BoldText>お車の方:</BoldText> ○○インターを出て、約5分
          </Text>
          <Text>
            <BoldText>電車の方:</BoldText> ○○駅から徒歩5分
          </Text>
          <Text>
            <BoldText>バスの方:</BoldText> ○停留所で降車、そこから徒歩5分
          </Text>
        </Item>
      </List>
    </Container>
  );
};
