import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.section`
${tw`
    lg:mb-[40px]
    mb-[16px]
    relative
`}
`;

const ImgBg = styled.img<{
  mob?: boolean;
}>`
${({ mob }) => 
mob ? tw`lg:display[none] top-[-20px] left-[-15px]` : tw`display[none] lg:block top-[-29px] left-[-320px]`
}
${tw`
  absolute
  z-[-1]
`}
`;

const Title = styled.h1`
${tw`
    uppercase
    lg:text-3xl
    text-xls
    font-RFExp
    lg:mb-[16px]
    mb-[8px]
`}
`;

const PostTitle = styled.p`
${tw`
    text-gray
    lg:text-xl
    text-sm
`}
`;

export const Hero: React.FC = () => {

  return (
    <Container>
      <ImgBg src="assets/images/bg_plus.png" alt="" />
      <ImgBg mob src="assets/images/bg_plus_mob.png" alt="" />
        <Title>potential assessment <span className="text-neon">service</span></Title>
        <PostTitle>A service is something that the public needs, such as transport, communications facilities, hospitals,<br /> or energy supplies, which is provided in a planned and organized way by the government.</PostTitle>
    </Container>
  );
}
