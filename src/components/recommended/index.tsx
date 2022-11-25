import styled from "styled-components";
import tw from "twin.macro";
import { Card } from "../card";


const Container = styled.section`
${tw`
    lg:mb-[100px]
    mb-[24px]
`}
`;

const Title = styled.h1`
${tw`
    uppercase
    font-RFExp
    text-xls
    lg:text-3xl
    mb-[16px]
`}
`;

const PostTitle = styled.p`
${tw`
    lg:mb-[50px]
    mb-[16px]
    lg:text-xl
    text-sm
    text-gray
`}
`;

const CardContainer = styled.div`
${tw`
    flex
    flex-wrap
    justify-between
    lg:mb-[62px]
    mb-[16px]
`}
`;

const PostContainer = styled.div`
${tw`
    flex flex-col justify-center lg:items-center
`}
`;

const PostDescr = styled.div`
${tw`
    text-gray
    lg:text-xl
    text-sm
    lg:text-center
    lg:mb-[24px]
    mb-[16px]
`}
`;

const Btn = styled.a`
border-radius: 4px;
${tw`
    p-[12px 64px]
    bg-neon-blue
    text-blue-btn
    font-RFExp
    lg:text-xl
    text-sm
    hover:bg-neon-light
    active:bg-neon-dark
    duration-200
`}
`;

export const Recommended: React.FC = () => {

  return (
    <Container>
        <Title>Recommended products</Title>
        <PostTitle>According to your GEO we can suggest you tthe followong products:</PostTitle>
        <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardContainer>
        <PostContainer>
            <PostDescr>Apply to the personal manager or to the SST Service</PostDescr>
            <Btn href="https://t.me/alfa_sup" target="_blank">Activate the product</Btn>
        </PostContainer>
    </Container>
  );
}
