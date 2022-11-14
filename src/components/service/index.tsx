import styled from "styled-components";
import tw from "twin.macro";
import { Facebook, Telegram, Twitter } from "./social";


const Container = styled.section`
@media(min-width: 1024px) {
    border: 4px solid #7C1B5D;
}
@media(max-width: 1023px) {
    border: 2px solid #7C1B5D;
}
border-radius: 20px;
${tw`
    lg:mb-[100px]
    mb-[24px]
    lg:py-[50px]
    py-[24px]
    flex flex-col items-center
    relative
`}
`;

const BgImg = styled.img`
${tw`
    absolute bottom-[100%] lg:bottom-[30px] left-0 lg:left-[73px]
    z-[0]
`}
`;

const Title = styled.h1`
${tw`
    uppercase
    font-RFExp
    lg:text-3xl
    text-xls
    text-center
    mb-[16px]
    relative z-[10]
`}
`;

const PostTitle = styled.p`
${tw`
    lg:mb-[40px]
    mb-[24px]
    lg:text-xl
    text-sm
    text-gray
    relative z-[10]
`}
`;

const IconContainer = styled.div`
${tw`
    flex justify-between
    lg:w-[266px]
    w-[156px]
    relative z-[10]
`}
`;


export const Service: React.FC = () => {

  return (
    <Container>
        <BgImg src="assets/vector/element_bg_pluses2.svg" alt="" />
        <Title>do you like the service?</Title>
        <PostTitle>Share your opinion in our Social Media</PostTitle>
        <IconContainer>
            <a href="https://www.facebook.com/alfaleads.net" target="_blank"><Facebook /></a>
            <a href="https://www.instagram.com/alfaleads_ww" target="_blank"><Twitter /></a>
            <a href="https://twitter.com/alfaleads" target="_blank"><Telegram /></a>
        </IconContainer>
    </Container>
  );
}
