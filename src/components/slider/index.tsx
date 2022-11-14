import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
${tw`
    lg:mb-[32px]
    mb-[24px]
`}
`;

const Label = styled.label`
${tw`
    mb-[12px]
    lg:text-xl
    text-sm
    text-gray
`}
`;

const Input = styled.input`
  height: 4px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
:focus {
  outline: none;
}
::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #353535;
  background: #a79bb1;
  border-radius: 28px;
  border: 0px solid #f3c846;
}
::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #353535;
  border: 3px solid #71fbe4;
  height: 16px;
  width: 16px;
  border-radius: 15px;
  background: #000A3E;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
}
:focus::-webkit-slider-runnable-track {
  background: #a79bb1;
}
::-moz-range-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #353535;
  background: #a79bb1;
  border-radius: 28px;
  border: 0px solid #f3c846;
}
::-moz-range-thumb {
  box-shadow: 0px 0px 0px #353535;
  border: 3px solid #71fbe4;
  height: 16px;
  width: 16px;
  border-radius: 15px;
  background: #000A3E;
  cursor: pointer;
}
::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
::-ms-fill-lower {
  background: #a79bb1;
  border: 0px solid #f3c846;
  border-radius: 15px;
  box-shadow: 0px 0px 0px #353535;
}
::-ms-fill-upper {
  background: #a79bb1;
  border: 0px solid #f3c846;
  border-radius: 15px;
  box-shadow: 0px 0px 0px #353535;
}
::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #353535;
  border: 3px solid #71fbe4;
  height: 16px;
  width: 16px;
  border-radius: 15px;
  background: #000A3E;
  cursor: pointer;
}
:focus::-ms-fill-lower {
  background: #a79bb1;
}
:focus::-ms-fill-upper {
  background: #a79bb1;
}
${tw`
    w-full
`}
`;

const Span = styled.span`
${tw`
    relative 
    before:content-[''] 
    before:absolute 
    before:top-[-18px] 
    before:z-[-1] 
    before:w-[12px] 
    before:h-[12px] 
    before:bg-gray 
    before:rounded-full
`}
`;

export const Slider: React.FC = () => {

const [val, setVal] = useState<number>(3);

const HandleChange = (e: { target: { value: any; }; }) => {
    setVal(e.target.value);
};


  return (
    <Container>
        <Label>Advertiser Complexity</Label>
        <div>
            <Input 
                type="range" 
                min={1}
                max={5}
                step={1}
                onChange={HandleChange} 
                value={val} 
            />
            <div className="w-full flex justify-between text-xl font-normal font-RFD">
              <Span className="ml-[4px] before:left-[-4.3px]">1</Span>
              <Span className="ml-[3px]">2</Span>
              <Span className="ml-[3px]">3</Span>
              <Span>4</Span>
              <Span className="mr-[3px] before:left-[0.8px]">5</Span>
            </div>
        </div>
    </Container>
  );
}
