import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Flag from 'react-world-flags';
import { InputField } from "../InputField";
import { Speedometer } from "../speedometer";
import Geo from '../../data/geo.json';


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

  interface ValueType {
    value: string;
    label: any;
    cpa: number;
    cr: number;
    ngr: number;
  }

  const [value, setValue] = useState<ValueType>({
    value: '',
    label: '',
    cpa: 0,
    cr: 0,
    ngr: 0,
  })

  const changeHandler = (value: any) => {
    setValue(
      value
    )
    console.log(value)
  }

  const options: any = Geo.map(item => {{
      return (
        {
          value: item.Code,
          label: (
            <div className="flex ml-[8px]">
              <Flag className="mr-[16px]" code={item.Code} height={16} width={24} />
              <span>{item.Country} ({item.Code})</span>
            </div>
          ),
          cpa: item.CPA,
          cr: item.CR,
          ngr: item.NGR,
        }
      )
    }})

    

    
  const [val, setVal] = useState<any>({
    cpa: '',
    rs: '',
    cr: '',
    ngr: '',
    tf: '',
    ap: '',
  });

  // Slider 

  const [valSlide, setValSlide] = useState<number>(3);

  const HandleSlide = (e: { target: { value: number; }; }) => {
      setValSlide(e.target.value);
  };
  
  const [rev, setRev] = useState<number>();
  const [deal, setDeal] = useState<string>('RevShare');
  const [fd, setFd] = useState<number>(23);
  const [product, setProduct] = useState<number>(1);
  const [web, setWeb] = useState<number>(3);

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

  const FDSum = () => {
    const ValueFd = () => {
      switch (+valSlide) {
        case 1: 
          return 0.05;
        case 2:
          return 0.15;
        case 4:
          return 0.6;
        case 5:
          return 1;
        default:
          return 0.3;
        }
      }
    let num1 = (val.cr != '' ? val.cr : value.cr) / 100 * product * ValueFd();
    let num = Math.floor(num1)
    return num;
  }

  // DealType

  const DealType = () => {
    if (val.cpa === '' && val.rs != '') {
      return 'RevShare'
    } else if (val.cpa != '' && val.rs === '') {
      return 'CPA'
    } else if (val.cpa != '' && val.rs != '') {
      return 'Hybrid'
    } else {
      return 'Нет данных'
    }
  }
  
  // Revenue

  const Revenue = () => {
    if (deal === 'CPA') {
      return val.cpa * fd
    } else if (deal === 'RevShare') {
      return val.rs / 100 * (val.ngr != '' ? val.ngr : value.ngr) * fd * 5.44
    } else if (deal === 'Hybrid') {
      return val.cpa * fd + val.rs / 100 * (val.ngr != '' ? val.ngr : value.ngr) * fd * 5.44
    } else {
      return (val.cpa != '' ? val.cpa : value.cpa) * fd
    }
  }

  const Handl = () => {
    setWeb(
      WebSum(val.ap)
    );
    setProduct(
      ProductSum(web)
    )
    setFd(
      FDSum()
    )
    setDeal(
      DealType()
    )
    setRev(
      Revenue()
    )
  }


  return (
    <Container>
        <InputField
          HandleChange={HandleChange}
          val={val}
          Handler={Handl}
          options={options}
          value={value}
          changeHandler={changeHandler}
          valSlide={valSlide}
          HandleSlide={HandleSlide}
        />
        <Speedometer 
        rev={rev}
        deal={deal}
        fd={fd}
        product={product}
        web={web}
        />
    </Container>
  );
}
