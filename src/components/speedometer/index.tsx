import dynamic from "next/dynamic";
import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
${tw`
    
`}
`;

const ReactSpeedometer = dynamic(
    () => import('react-d3-speedometer'),
    { ssr: false },
);

export const Speedometer: React.FC = () => {

  return (
    <Container>
        <ReactSpeedometer
            value={1200000}
            minValue={0}
            width={500}
            height={470}
            maxValue={2000000}
            maxSegmentLabels={5}
        />
    </Container>
  );
};
