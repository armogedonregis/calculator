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

const InfoIcon = styled.svg`
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

const TextHide = styled.span<{
    small?: boolean;
}>`
${({ small }) => 
small ? tw`w-full whitespace-nowrap` : tw`w-[20rem]`
}
${tw`
    relative 
    z-10 
    left-[40px]
    lg:left-[initial]
    p-2
    leading-none 
    text-white 
    font-bold 
    rounded-[4px] 
    bg-fiol
    text-sm 
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
            <InfoIcon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                <path d="M8.5 7.33333C8.5 7.05719 8.27614 6.83333 8 6.83333C7.72386 6.83333 7.5 7.05719 7.5 7.33333H8.5ZM7.5 10.6667C7.5 10.9428 7.72386 11.1667 8 11.1667C8.27614 11.1667 8.5 10.9428 8.5 10.6667H7.5ZM8.0332 5.33333H8.5332C8.5332 5.05719 8.30935 4.83333 8.0332 4.83333V5.33333ZM8.0332 5.4L8.03308 5.9C8.16571 5.90003 8.29292 5.84737 8.38671 5.7536C8.48051 5.65982 8.5332 5.53263 8.5332 5.4H8.0332ZM7.9668 5.39998H7.4668C7.4668 5.67608 7.69058 5.89992 7.96667 5.89998L7.9668 5.39998ZM7.9668 5.33333V4.83333C7.69065 4.83333 7.4668 5.05719 7.4668 5.33333H7.9668ZM8 13.5C4.96243 13.5 2.5 11.0376 2.5 8H1.5C1.5 11.5899 4.41015 14.5 8 14.5V13.5ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5V1.5C4.41015 1.5 1.5 4.41015 1.5 8H2.5ZM8 2.5C11.0376 2.5 13.5 4.96243 13.5 8H14.5C14.5 4.41015 11.5899 1.5 8 1.5V2.5ZM13.5 8C13.5 11.0376 11.0376 13.5 8 13.5V14.5C11.5899 14.5 14.5 11.5899 14.5 8H13.5ZM7.5 7.33333V10.6667H8.5V7.33333H7.5ZM7.5332 5.33333V5.4H8.5332V5.33333H7.5332ZM8.03333 4.9L7.96692 4.89998L7.96667 5.89998L8.03308 5.9L8.03333 4.9ZM8.4668 5.39998V5.33333H7.4668V5.39998H8.4668ZM7.9668 5.83333H8.0332V4.83333H7.9668V5.83333Z" fill="white"/>
                </g>
            </InfoIcon>
            <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
			<TextHide small={message?.length != undefined && message?.length < 40 ? true : false}>{message}</TextHide>
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
