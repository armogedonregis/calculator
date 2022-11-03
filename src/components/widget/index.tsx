import styled from "styled-components";
import tw from "twin.macro";
import { InputField } from "../InputField";
import { Speedometer } from "../speedometer";

const Container = styled.div`
${tw`
    flex
    flex-col lg:flex-row
    lg:justify-between
    lg:mb-[140px]
    mb-[24px]
`}
`;



export const Widget: React.FC = () => {

  return (
    <Container>
        <InputField />
        <Speedometer />
    </Container>
  );
}
