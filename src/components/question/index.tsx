import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";


const Container = styled.section`
${tw`
    lg:mb-[138px]
    mb-[69px]
`}
`;

const Title = styled.h1`
${tw`
    uppercase
    font-RFExp
    lg:text-3xl
    text-xls
    lg:mb-[50px]
    mb-[24px]
`}
`;

const Input = styled.input`
background: rgba(255, 255, 255, 0.1);
border: 1px solid #A79BB1;
backdrop-filter: blur(6px);
border-radius: 4px;
outline: none;
:hover {
    border: 1px solid #FFFFFF;
}
:focus {
    border: 1px solid #71FBE4;
}
:focus::-webkit-input-placeholder {
  color: transparent
}
${tw`
    block w-full
    lg:text-xl
    text-sm
    lg:h-[48px]
    h-[37px]
    placeholder:text-white
    lg:p-[12px 24px 12px 24px]
    p-[10px 24px 10px 20px]
    first:mr-[20px]
`}
`;

const InputContainer = styled.div`
${tw`
    flex
    flex-col lg:flex-row
`}
`;


export const Question: React.FC = () => {

  return (
    <Container>
        <Title>Got any question?</Title>
        <InputContainer className="mb-[8px] lg:mb-[20px]">
            <Input 
                type="text"
                placeholder="Name"
                className="mb-[8px] lg:mb-[initial]"
            />
            <Input 
                type="email"
                placeholder="E-mail"
            />
        </InputContainer>
        <InputContainer>
            <Input 
                type="text"
                placeholder="Enter your question"
                className="mb-[8px] lg:mb-[initial]"
            />
            <Button>Send</Button>
        </InputContainer>
    </Container>
  );
}
