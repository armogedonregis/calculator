import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
${tw`
    mb-[16px]
`}
`;

const Lab = styled.label`
${tw`
    lg:text-xl
    text-sm
    text-gray
    flex
    items-center
`}
`;

const InfoIcon = styled.img`
${tw`
    lg:ml-[10px]
    ml-[8px]
    cursor-pointer
`}
`;

const Content = styled.div`
${tw`
    mt-1
    relative
`}
`;

const Dollar = styled.div`
${tw`
    pointer-events-none 
    absolute 
    inset-y-0 
    z-[10]
    left-0 flex items-center lg:pl-[24px]
    pl-[20px]
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
::placeholder {
    color: white;
}
::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
${tw`
    block 
    lg:w-[412px]
    w-full
    border-gray
    text-white
    lg:h-[48px]
    h-[37px]
    pr-12 
`}
`;

export const Select: React.FC<{
    nameLab?: string;
    meter?: string;
    place?: string;
    message?: string;
    val?: number;
    name?: string;
    onChange?: any;
}> = ({ nameLab, meter, 
    place, message, val, name, onChange }) => {

  return (
    <Container>
        <Lab>
            {nameLab}
            <div className="relative flex flex-col items-center group">

            <InfoIcon src="./assets/vector/info.svg" alt="" />
            <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
			<span className="relative z-10 p-2 w-full text-sm leading-none whitespace-nowrap text-white font-bold rounded-[4px] bg-fiol">{message}</span>
			<div className="w-3 h-3 -mt-2 rotate-45 bg-fiol"></div>
            </div>
		</div>
        </Lab>
        <Content>
            <Dollar>
                <span>{meter}</span>
            </Dollar>
            <Input
            className={`${meter != null ? "lg:pl-[51px] pl-[37px]" : "pl-[20px] lg:pl-[24px]"}`}
            type="number"
            name={name}
            value={val}
            onChange={(e: any) => onChange(e.target.value)}
            placeholder={place}
            />
        </Content>
    </Container>
  );
}
