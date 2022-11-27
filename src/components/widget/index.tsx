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
    relative
`}
`;

const Img = styled.img<{
  mob?: boolean;
}>`
${({ mob }) => 
mob ? tw`lg:display[none] top-[1185px] right-[-20px]` :
 tw`display[none] lg:block top-[310px] right-[-320px]`
}
${tw`
  absolute z-[-1]
  opacity-50 select-none
  pointer-events-none
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

  const NgrGeo = (x: number, y: number, z: number) => {
    let num = x * Math.exp(y * z)
    return num;
  }
const [dataResponse, setdataResponse] = useState();
  useEffect(() => {
    async function getPageData() {
      const apiUrl = 'http://localhost:3000/api/getdata';
      const res = await fetch(apiUrl);
      const response: any = await res.json();
      setdataResponse(response.results)
      console.log(response.results)
      console.log(dataResponse)
    }
    getPageData();
  }, [])

  
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


  const [rev, setRev] = useState<number>(20000);
  const [deal, setDeal] = useState<string>('RevShare');
  const [fd, setFd] = useState<number>(23);
  const [product, setProduct] = useState<number>(23);
  const [web, setWeb] = useState<number>(23);

  const HandleChange = (fieldName: string) => (fieldValue: number) => {
    setVal((prev: any) => ({
      ...prev,
      [fieldName]: fieldValue
    }));
};

// Click on website

  const WebSum = (x: number) => {
    let num = val.tf * 0.613 * (Math.pow(x, (-1.784)));
    return Math.round(num);;
  };

  // Click on product

  const ProductSum = (x: number) => {
    let num = x * 0.6;
    return Math.round(num);
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
    let num = Math.round(num1)
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
      const num1 = val.cpa * fd 
      return Math.round(num1)
    } else if (deal === 'RevShare') {
      const num2 = val.rs / 100 * (val.ngr != '' ? val.ngr : value.ngr) * fd * 5.44
      return Math.round(num2)
    } else if (deal === 'Hybrid') {
      const num3 = val.cpa * fd + val.rs / 100 * (val.ngr != '' ? val.ngr : value.ngr) * fd * 5.44
      return Math.round(num3)
    } else {
      const num4 = (val.cpa != '' ? val.cpa : value.cpa) * fd
      return Math.round(num4)
    }
  }

  useEffect(() => {
    if(fd != 23) {
      setWeb(WebSum(val.ap))
      setProduct(ProductSum(web))
      setFd(FDSum())
      setDeal(DealType())
      setRev(Revenue())
    }
    }, [rev, deal, fd, product, web]);
    
  const Handl = () => {
    setWeb(WebSum(val.ap))
    setProduct(ProductSum(web))
    setFd(FDSum())
    setDeal(DealType())
    setRev(Revenue())
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
        <Img src="./assets/images/grid-background.png" alt="" />
        <Img mob src="./assets/images/grid-background_mob.png" alt="" />
    </Container>
  );
}
