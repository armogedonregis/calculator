import { Key } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Select } from "../select";
import { SelectCountry } from "../selectCountry";
import { Slider } from "../slider";


const Container = styled.div`
${tw`
    mb-[32px]
`}
`;


export const InputField: React.FC<{
  HandleChange?: any;
  val?: any;
  Handler?: any;
}> = ({
   HandleChange, val, Handler
}) => {

  return (
    <Container>
        <SelectCountry />
            <Select 
              nameLab={"CPA"}
              place={"20 000"}
              message={"Certified Public Accountant"}
              val={val.cpa}
              onChange={HandleChange('cpa')}
              name={"cpa"}
              meter={"$"} 
            />
            <Select 
              nameLab={"RS"}
              place={"50"}
              message={"RS"}
              val={val.rs}
              onChange={HandleChange('rs')}
              name={"rs"}
              meter={"%"} 
            />
            <Select 
              nameLab={"CR"}
              place={"40"}
              message={"CR"}
              val={val.cr}
              onChange={HandleChange('cr')}
              name={"cr"}
              meter={"%"} 
            />
            <Select 
              nameLab={"NGR"}
              place={"1230"}
              message={"NGR"}
              val={val.ngr}
              onChange={HandleChange('ngr')}
              name={"ngr"}
              meter={"$"} 
            />
            <Select 
              nameLab={"Total Frequency"}
              place={"2"}
              message={"TF"}
              val={val.tf}
              onChange={HandleChange('tf')}
              name={"tf"}
              meter={"$"} 
            />
            <Select 
              nameLab={"Average Position"}
              place={"15"}
              message={"AP"}
              val={val.ap}
              onChange={HandleChange('ap')}
              name={"ap"}
            />
        <Slider />
        <Button
          onClick={Handler}
          className="block ml-auto">Calculate</Button>
    </Container>
  );
}
