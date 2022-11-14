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
  options?: any;
  value?: any; 
  setValue?: any;
  setVal?: any;
}> = ({
   HandleChange, val, Handler, options, value, setValue, setVal
}) => {

  console.log(val)

  return (
    <Container>
        <SelectCountry 
          options={options}
          value={value}
          setValue={setValue}
          setVal={setVal}
        />
            <Select 
              nameLab={"CPA"}
              place={"20 000"}
              message={"Cost per action"}
              val={val?.cpa != undefined ? val.cpa : 5}
              onChange={HandleChange('cpa')}
              name={"cpa"}
              meter={"$"} 
            />
            <Select 
              nameLab={"RS"}
              place={"50"}
              message={"Revenue Share"}
              val={value?.rs}
              onChange={HandleChange('rs')}
              name={"rs"}
              meter={"%"} 
            />
            <Select 
              nameLab={"CR"}
              place={"40"}
              message={"Conversion rate"}
              val={val?.cr}
              onChange={HandleChange('cr')}
              name={"cr"}
              meter={"%"} 
            />
            <Select 
              nameLab={"NGR"}
              place={"1230"}
              message={"Net Gaming Revenue"}
              val={val?.ngr}
              onChange={HandleChange('ngr')}
              name={"ngr"}
              meter={"$"} 
            />
            <Select 
              nameLab={"Total Frequency"}
              place={"2"}
              message={"The total frequency is the value obtained by adding up all search frequencies."}
              val={val?.tf}
              onChange={HandleChange('tf')}
              name={"tf"}
              meter={"$"} 
            />
            <Select 
              nameLab={"Average Position"}
              place={"15"}
              message={"A relative ranking of the position of your site on Google, where 1 is the topmost position, 2 is the next position, and so on."}
              val={val?.ap}
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
