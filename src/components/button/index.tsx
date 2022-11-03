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
`}
`;

export const Button: React.FC<{
    children?: string;
    className?: string;
}> = ({children, className}) => {

  return (
    <Container className={className}>{children}</Container>
  );
}
