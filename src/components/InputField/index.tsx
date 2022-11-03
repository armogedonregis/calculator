import styled from "styled-components";
import tw from "twin.macro";
import { Select } from "../select";
import { SelectCountry } from "../selectCountry";

const items = [
  {
    name: "CPA",
    metr: "$"
  },
  {
    name: "RS",
    metr: "%"
  },
  {
    name: "CR",
    metr: "%"
  },
  {
    name: "NGR",
    metr: "$"
  },
  {
    name: "Total Frequency"
  },
  {
    name: "Average Position"
  }
]

const Container = styled.div`
${tw`
    
`}
`;



export const InputField: React.FC = () => {

  return (
    <Container>
        <SelectCountry />
        {items.map((item, index) => {
          return (
            <Select key={index} nameLab={item.name} meter={item.metr} />
          )
        })}
    </Container>
  );
}
