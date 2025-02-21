// import React from "react";
// import styled from "styled-components";
// import { Heading } from "../../Heading";
// import { breakpoints } from "../../../../styles/breakpoints";

// const staff1 = require("../../../../assets/images/home/staff1.jpg");
// const staff2 = require("../../../../assets/images/home/staff2.jpg");
// const staff3 = require("../../../../assets/images/home/staff3.jpg");

// const Container = styled.div`
//   padding: 60px 0;

//   @media (max-width: ${breakpoints.tablet}) {
//     padding: 20px 0;
//   }
// `;

// const List = styled.ul`
//   list-style-type: none;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;
//   padding: 0;
//   margin: 0;
// `;

// const Item = styled.li`
//   display: flex;
//   width: calc(50% - 8px);

//   @media (max-width: ${breakpoints.tablet}) {
//     width: 100%;
//   }

//   @media (max-width: ${breakpoints.sp}) {
//     flex-wrap: wrap;
//     justify-content: center;
//   }
// `;

// const Content = styled.div`
//   @media (max-width: ${breakpoints.sp}) {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//   }
// `;

// const Image = styled.img`
//   width: 200px;
//   height: 200px;
//   margin-right: 20px;
//   object-fit: cover;
// `;
// const Name = styled.h3`
//   margin: 0;
//   margin-bottom: 8px;

//   @media (max-width: ${breakpoints.sp}) {
//     width: 100%;
//     text-align: center;
//     margin-top: 12px;
//   }
// `;

// const Text = styled.p`
//   margin-bottom: 0;
// `;

// export const Staff = () => {
//   return (
//     <Container>
//       <Heading title="スタッフ紹介" />

//       <List>
//         <Item>
//           <Image src={staff1} alt="" />
//           <Content>
//             <Name>山田花子</Name>
//             <span>代表・管理者</span>
//             <Text>
//               利用者様が安心して暮らせるよう、一人ひとりの想いに寄り添い、心のこもった介護を提供します。地域に根ざした温かいサービスを目指しています。
//             </Text>
//           </Content>
//         </Item>
//         <Item>
//           <Image src={staff2} alt="" />
//           <Content>
//             <Name>山田太郎</Name>
//             <span>サービス提供責任者</span>
//             <Text>
//               ご利用者様とご家族が笑顔で過ごせるよう、きめ細やかなサポートを心がけています。日々の暮らしに寄り添い、安心と信頼を大切にしたケアを提供いたします。
//             </Text>
//           </Content>
//         </Item>
//         <Item>
//           <Image src={staff3} alt="" />
//           <Content>
//             <Name>鈴木 花子</Name>
//             <span>訪問介護員（ヘルパー）</span>
//             <Text>
//               身体のケアだけでなく、心の支えにもなれるよう努めています。小さな変化にも気を配りながら、笑顔と思いやりを大切に、安心できる時間を提供します。
//             </Text>
//           </Content>
//         </Item>
//       </List>
//     </Container>
//   );
// };

import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const staff1 = require("../../../../assets/images/home/staff1.jpg");
const staff2 = require("../../../../assets/images/home/staff2.jpg");
const staff3 = require("../../../../assets/images/home/staff3.jpg");

const Container = styled.div`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  width: 100%;

  @media (max-width: ${breakpoints.sp}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Content = styled.div`
  width: 50%;
  padding: 20px;
  background: #e0f7fa;
  border-radius: 20px 0 0 20px;

  &:nth-child(even) {
    background: #e0f7fa;
    border-radius: 0 20px 20px 0;
  }

  @media (max-width: ${breakpoints.sp}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 50%;
  height: 350px;
  object-fit: cover;
`;
const Name = styled.h3`
  margin: 0;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
    text-align: center;
    margin-top: 12px;
  }
`;

const Text = styled.p`
  margin-bottom: 0;
`;

export const Staff = () => {
  return (
    <Container>
      <Heading title="スタッフ紹介" />

      <List>
        <Item>
          <Image src={staff1} alt="" />
          <Content>
            <Name>山田花子</Name>
            <span>代表・管理者</span>
            <Text>
              利用者様が安心して暮らせるよう、一人ひとりの想いに寄り添い、心のこもった介護を提供します。地域に根ざした温かいサービスを目指しています。
            </Text>
          </Content>
        </Item>
        <Item>
          <Content>
            <Name>山田太郎</Name>
            <span>サービス提供責任者</span>
            <Text>
              ご利用者様とご家族が笑顔で過ごせるよう、きめ細やかなサポートを心がけています。日々の暮らしに寄り添い、安心と信頼を大切にしたケアを提供いたします。
            </Text>
          </Content>
          <Image src={staff2} alt="" />
        </Item>
        <Item>
          <Image src={staff3} alt="" />
          <Content>
            <Name>鈴木 花子</Name>
            <span>訪問介護員（ヘルパー）</span>
            <Text>
              身体のケアだけでなく、心の支えにもなれるよう努めています。小さな変化にも気を配りながら、笑顔と思いやりを大切に、安心できる時間を提供します。
            </Text>
          </Content>
        </Item>
      </List>
    </Container>
  );
};
