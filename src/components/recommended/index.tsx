import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
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
    justify-center
    lg:mr-[-40px]
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
            <Button>Activate the product</Button>
        </PostContainer>
    </Container>
  );
}
