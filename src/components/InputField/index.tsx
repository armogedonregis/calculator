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
  changeHandler?: any;
  valSlide?: number;
  HandleSlide?: any;
}> = ({
   HandleChange, val, Handler, options, value, changeHandler,
   valSlide, HandleSlide
}) => {


  return (
    <Container>
        <SelectCountry 
          options={options}
          value={value}
          changeHandler={changeHandler}
        />
            <Select 
              nameLab={"CPA"}
              message={"Cost per action"}
              val={val.cpa}
              onChange={HandleChange('cpa')}
              name={"cpa"}
              meter={"$"} 
            />
            <Select 
              nameLab={"RS"}
              message={"Revenue Share"}
              val={val?.rs}
              onChange={HandleChange('rs')}
              name={"rs"}
              meter={"%"} 
            />
            <Select 
              nameLab={"CR"}
              message={"Conversion rate"}
              val={val?.cr}
              onChange={HandleChange('cr')}
              name={"cr"}
              meter={"%"} 
            />
            <Select 
              nameLab={"NGR"}
              message={"Net Gaming Revenue"}
              val={val?.ngr}
              onChange={HandleChange('ngr')}
              name={"ngr"}
              meter={"$"} 
            />
            <Select 
              nameLab={"Total Frequency"}
              message={"The total frequency is the value obtained by adding up all search frequencies."}
              val={val?.tf}
              onChange={HandleChange('tf')}
              name={"tf"}
            />
            <Select 
              nameLab={"Average Position"}
              message={"A relative ranking of the position of your site on Google, where 1 is the topmost position, 2 is the next position, and so on."}
              val={val?.ap}
              onChange={HandleChange('ap')}
              name={"ap"}
            />
        <Slider
          valSlide={valSlide}
          HandleSlide={HandleSlide}
        />
        <Button
          onClick={Handler}
          className="block ml-auto">Calculate</Button>
    </Container>
  );
}
