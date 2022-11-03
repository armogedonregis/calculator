import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
::-webkit-scrollbar {
    width: 0px;
  }
  ${tw`
  lg:max-w-[1920px]
  w-screen
  overflow-y-scroll
  lg:px-[322px]
  px-[16px]
  mx-auto
  relative z-50
`}
`;
