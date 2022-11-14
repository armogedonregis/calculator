import { useEffect, useState } from "react";
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

  const [val, setVal] = useState<any>({
    cpa: '',
    rs: '',
    cr: '',
    ngr: '',
    tf: '',
    ap: '',
  });
  
  const [web, setWeb] = useState<number>(23);
  const [web2, setWeb2] = useState<number>();

  const HandleChange = (fieldName: number) => (fieldValue: any) => {
    setVal((prev: any) => ({
      ...prev,
      [fieldName]: fieldValue
    }));
};

// Click on website

  const WebSum = (x: number) => {
    let num1 = 15000 * 0.613 * (Math.pow(x, (-1.784)));
    let num = Math.floor(num1);
    return num;
  };

  // Click on product

  const ProductSum = (x: number) => {
    let num = x * 0.6;
    return num;
  }

  // FD per month

  const FDSum = (x: number) => {
    let num = x * 0.83
    return num;
  }

  // Revenue

  const RevSum = (x: number) => {
    
  }
  

  const Handl = () => {
    setWeb(
      WebSum(val.ap)
    );
    setWeb2(
      ProductSum(web)
    )
  }


  return (
    <Container>
        <InputField
          HandleChange={HandleChange}
          val={val}
          Handler={Handl}
        />
        <Speedometer 
        webSite={web}
        webSite2={web2}
        />
    </Container>
  );
}
