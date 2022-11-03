import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.header`
${tw`
    flex justify-between items-center
    lg:mt-[24px]
    mt-[5px]
    lg:mb-[30px]
    mb-[22px]
`}
`;

const Content = styled.div`
${tw`
    text-white
    flex items-center
`}
`;

const Btn = styled.div`
${tw`
    uppercase
    lg:text-xl
    text-sml
    cursor-pointer
`}
`;

const LangSwitch = styled.div`
border: 1px solid white;
border-radius: 4px;
${tw`
    lg:text-xl
    text-sm
    uppercase
    cursor-pointer
    lg:ml-[40px]
    ml-[24px]
    p-[4px 12px]
    flex items-center
`}
`;

const Chevron = styled.img`
${tw`
    lg:ml-[16px]
    ml-[8px]
`}
`;

export const Navbar: React.FC = () => {

  return (
    <Container>
        <img src="./assets/vector/logo.svg" alt="" />
        <Content>
            <Btn>About us</Btn>
            <LangSwitch>
                En
                <Chevron src="./assets/vector/chevron_down.svg" alt="" />
                </LangSwitch>
        </Content>
    </Container>
  );
}
