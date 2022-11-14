import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
border: 2px solid #5C7EB3;
border-radius: 12px;
${tw`
    lg:p-[24px]
    p-[16px]
    lg:w-[398px]
    w-full
    lg:h-[255px]
    lg:mb-[40px]
    mb-[8px]
`}
`;

const TopContainer = styled.div`
${tw`
    flex lg:block justify-between items-center
    flex-row-reverse
    lg:mb-[24px]
    mb-[16px]
`}
`;

const IdTitle = styled.div`
${tw`
    text-neon-red
    font-RFExp
    lg:text-xl
    text-sms
    uppercase
    lg:mb-[20px]
`}
`;

const Title = styled.h2`
${tw`
    font-RFExp
    lg:text-2xl
    text-sm
    text-neon-blue
`}
`;

const GeoContainer = styled.div`
${tw`
    lg:mb-[20px]
    mb-[8px]
    flex
`}
`;

const GeoTitle = styled.span`
${tw`
    font-RFD
    font-bold
    lg:text-xl
    text-sm
    mr-[16px]
`}
`;

const GeoImg = styled.img`
${tw`
    mr-[16px]
`}
`;

const GeoCountry = styled.span`
${tw`
    lg:text-xl
    text-sm
`}
`;

const SourceText = styled.div`
${tw`
    font-RFD
    font-bold
    lg:text-xl
    text-sm
    lg:mb-[20px]
    mb-[8px]
    mr-[8px]
`}
`;

const PayOff = styled.div`
${tw`
    font-RFD
    font-bold
    lg:text-xl
    text-sm
    mr-[8px]
`}
`;

export const Card: React.FC = () => {

  return (
    <Container>
        <TopContainer>
            <IdTitle>/ ID 7640 /</IdTitle>
            <Title>White Lion</Title>
        </TopContainer>
        <GeoContainer>
            <GeoTitle>Geo:</GeoTitle>
            <GeoImg src="assets/images/PH.png" alt="" />
            <GeoCountry>Philippines (PH)</GeoCountry>
        </GeoContainer>
        <SourceText>Sources: <span className="font-normal text-sm lg:text-xl">FB / UAC prils ;)</span></SourceText>
        <PayOff>Payoff: <span className="font-normal text-sm lg:text-xl">35 EUR</span></PayOff>
    </Container>
  );
}
