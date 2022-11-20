import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.footer`
${tw`
    lg:mb-[140px]
    mb-[60px]
    flex
    flex-wrap
`}
`;

const List = styled.ul`
${tw`
    flex flex-col
    lg:first:mr-[132px]
    first:mr-[40px]
`}
`;

const Item = styled.li`
:not(:first-child) {
    :hover {
        color: #71FBE4;
        text-decoration-line: underline;
    }
}
${tw`
    first:text-neon-blue
    first:font-bold
    lg:text-xl
    text-sms
    mb-[8px]
    cursor-pointer
    first:cursor-auto
`}
`;

const CopyriteContainer = styled.div`
${tw`
    lg:ml-auto
    flex items-center justify-between lg:block
`}
`;

const LogoIcon = styled.img`
${tw`
    
`}
`;

const Copyrite = styled.div`
${tw`
    lg:mt-[10px]
    lg:text-xl
    text-sms
`}
`;

export const Footer: React.FC = () => {

  return (
    <Container>
        <List>
            <Item>Follow Us</Item>
            <Item><a href="https://www.facebook.com/alfaleads.net" target="_blank">Facebook</a></Item>
            <Item><a href="https://twitter.com/alfaleads" target="_blank">Twitter</a></Item>
            <Item><a href="https://www.instagram.com/alfaleads_ww" target="_blank">Instagram</a></Item>
            <Item>Discord</Item>
        </List>
        <List>
            <Item>Contact Us</Item>
            <Item>E-mail: <span className="font-bold">info@alfaleads.net</span></Item>
            <Item>Telegram: <span className="font-bold">alfaleads_chat</span></Item>
        </List>
        <CopyriteContainer>
            <img width={196} height={110} src="assets/vector/logo.svg" alt="" />
            <Copyrite>ALFALEADS © 2016-2022</Copyrite>
        </CopyriteContainer>
    </Container>
  );
}
