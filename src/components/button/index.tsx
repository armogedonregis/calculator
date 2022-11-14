import { MouseEventHandler } from "react";
import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.button`
border-radius: 4px;
${tw`
    p-[12px 64px]
    bg-neon-blue
    text-blue-btn
    font-RFExp
    lg:text-xl
    text-sm
    hover:bg-neon-light
    active:bg-neon-dark
    duration-200
`}
`;

export const Button: React.FC<{
    children?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({children, className, onClick}) => {

  return (
    <Container onClick={onClick} className={className}>{children}</Container>
  );
}
