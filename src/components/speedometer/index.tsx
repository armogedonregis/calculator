import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
border: 4px solid #5C7EB3;
border-radius: 20px;
${tw`
    p-[40px 30px 30px 30px]
    lg:w-[736px]
`}
@media(max-width: 1023px) {
  svg {
    margin: 0 auto;
  }
}
`;

const TextContainer = styled.div`
${tw`
  flex justify-center items-center
  mt-[-100px]
`}
`;

const Content = styled.div`
${tw`
  mb-[30px]
`}
`;

const Title = styled.h3`
${tw`
  text-white
  font-bold
  text-xl
  mr-[61px]
  mb-[20px]
`}
`;

const Text = styled.p<{
  post?: boolean;
}>`
${({ post }) => 
post ? tw`` : tw`mb-[20px]`
}
${tw`
  text-gray
  text-xl
`}
`;


export const Speedometer: React.FC<{
  rev?: number;
  deal?: string;
  fd?: number;
  product?: number;
  web?: number;
}> = ({
  rev, deal, fd, product, web
}) => {
  const num = rev != undefined ? rev : 100;
  const radius = 203;
  const percent = num;
  const strokeWidth = radius * 0.2;
  const innerRadius = radius - strokeWidth / 2;
  const circumference = innerRadius * 2 * Math.PI;
  const arc = circumference * (270 / 360);
  const dashArray = `${arc} ${circumference}`;
  const transform = `rotate(135, ${radius}, ${radius})`;
  const transformArr = `rotate(${(percent * 270) / 200000}deg)`;
  const percentNormalized = Math.min(Math.max(percent, 0), 200000);
  const offset = arc - (percentNormalized / 200000) * arc;
  
  return (
    <Container>
       <svg style={{marginTop: '-100px'}} width="605" height="605" viewBox="0 0 605 605" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g style={{ transform: 'translate(100px, 100px)'}}>
          <circle cx={radius} cy={radius}
          fill="transparent" r={innerRadius}
          stroke="#420176"
          strokeWidth={strokeWidth} 
          strokeDasharray={dashArray}
          transform={transform}
          />
          <circle cx={radius} cy={radius}
          fill="transparent" r={innerRadius}
          stroke="url(#grad)"
          strokeWidth={strokeWidth} 
          strokeDasharray={dashArray}
          strokeDashoffset={offset}
          transform={transform}
          style={{
            transition: "stroke-dashoffset 0.3s",
          }}
          />
        </g>
        <g>
          <g style={{ transform: transformArr, transformBox: 'fill-box', transformOrigin: '100% 0px', transition: 'all 0.3s ease 0s'}}>

<path d="M215.056 378.123L223.205 386.136L318.812 295.023L304.551 281L215.056 378.123Z" fill="url(#paint0_linear_79_12468)"/>
          </g>
<path d="M408.289 404.545C428.714 383.741 442.532 357.362 448.006 328.725C453.48 300.088 450.366 270.472 439.054 243.601C427.742 216.73 408.738 193.803 384.432 177.702C360.125 161.602 331.601 153.048 302.446 153.114C273.291 153.181 244.806 161.866 220.574 178.077C196.341 194.289 177.442 217.303 166.254 244.226C155.065 271.148 152.086 300.778 157.691 329.389C163.296 358.001 177.235 384.316 197.755 405.027" stroke="#5C7EB3" strokeWidth="2"/>
<path d="M394.092 389.46C411.499 371.729 423.276 349.248 427.942 324.843C432.607 300.438 429.953 275.198 420.314 252.298C410.674 229.398 394.479 209.859 373.765 196.138C353.05 182.418 328.741 175.128 303.895 175.185C279.048 175.243 254.772 182.645 234.12 196.461C213.468 210.277 197.362 229.891 187.826 252.835C178.29 275.78 175.751 301.032 180.527 325.415C185.303 349.798 197.182 372.225 214.669 389.875" stroke="#5C7EB3"/>
<path d="M302 147H304V174.685L302 174.739L302 147Z" fill="#71FBE4"/>
<rect x="458" y="288" width="2" height="28" transform="rotate(90 458 288)" fill="#71FBE4"/>
<path d="M178.366 288L178.178 290L150 290L150 288L178.366 288Z" fill="#71FBE4"/>
<rect x="435.066" y="219.147" width="2" height="27.9785" transform="rotate(60 435.066 219.147)" fill="#71FBE4"/>
<rect x="173.734" y="218.424" width="2" height="28.0976" transform="rotate(-60 173.734 218.424)" fill="#71FBE4"/>
<rect x="367.398" y="191.789" width="2" height="28.0127" transform="rotate(-146.078 367.398 191.789)" fill="#71FBE4"/>
<rect x="321.993" y="164.055" width="1" height="9" transform="rotate(-172.808 321.993 164.055)" fill="#5C7EB3"/>
<rect x="358.613" y="174.818" width="1" height="9" transform="rotate(-155.025 358.613 174.818)" fill="#5C7EB3"/>
<rect x="340.962" y="167.932" width="1" height="9" transform="rotate(-164.173 340.962 167.932)" fill="#5C7EB3"/>
<rect x="384.616" y="189.988" width="1" height="9" transform="rotate(-145.072 384.616 189.988)" fill="#5C7EB3"/>
<rect x="412.022" y="216.557" width="1" height="9" transform="rotate(-127.289 412.022 216.557)" fill="#5C7EB3"/>
<rect x="399.603" y="202.248" width="1" height="9" transform="rotate(-136.438 399.603 202.248)" fill="#5C7EB3"/>
<rect x="427.161" y="241.128" width="1" height="9" transform="rotate(-117.042 427.161 241.128)" fill="#5C7EB3"/>
<rect x="438.864" y="277.46" width="1" height="9" transform="rotate(-99.2587 438.864 277.46)" fill="#5C7EB3"/>
<rect x="434.627" y="258.993" width="1" height="9" transform="rotate(-108.407 434.627 258.993)" fill="#5C7EB3"/>
<rect width="1" height="9" transform="matrix(0.992131 -0.125203 -0.125203 -0.992131 283.42 164.055)" fill="#5C7EB3"/>
<rect width="1" height="9" transform="matrix(0.906489 -0.42223 -0.42223 -0.906489 246.8 174.818)" fill="#5C7EB3"/>
<rect width="1" height="9" transform="matrix(0.962088 -0.272738 -0.272738 -0.962088 264.451 167.932)" fill="#5C7EB3"/>
<rect width="1" height="9" transform="matrix(0.815258 -0.579098 -0.579098 -0.815258 222.394 187.917)" fill="#5C7EB3"/>
<rect width="1" height="9" transform="matrix(0.599441 -0.800419 -0.800419 -0.599441 195.205 214.705)" fill="#5C7EB3"/>
<rect width="1" height="9" transform="matrix(0.719074 -0.694934 -0.694934 -0.719074 207.507 200.297)" fill="#5C7EB3"/>
<rect width="1" height="9" transform="matrix(0.45493 -0.890527 -0.890527 -0.45493 179.125 238.221)" fill="#5C7EB3"/>
<rect width="1" height="9" transform="matrix(0.161215 -0.986919 -0.986919 -0.161215 167.411 274.548)" fill="#5C7EB3"/>
<rect width="1" height="9" transform="matrix(0.316073 -0.948735 -0.948735 -0.316073 171.654 256.083)" fill="#5C7EB3"/>
<rect x="223.796" y="169.455" width="2" height="28.0493" transform="rotate(-35 223.796 169.455)" fill="#71FBE4"/>
<path d="M454.85 452.072C484.344 422.029 504.298 383.938 512.203 342.586C520.107 301.234 515.609 258.468 499.275 219.665C482.941 180.863 455.499 147.755 420.4 124.506C385.3 101.257 344.111 88.9043 302.011 89.0006C259.91 89.097 218.778 101.638 183.786 125.048C148.793 148.457 121.503 181.69 105.347 220.567C89.19 259.444 84.8882 302.23 92.982 343.545C101.076 384.86 121.204 422.861 150.835 452.768" stroke="#5C7EB3"/>
<path d="M308 89.0002L303 94.5558L298 89.0002H308Z" fill="#5C7EB3"/>
<path d="M416.874 122L410.044 123.83L408.214 117L416.874 122Z" fill="#5C7EB3"/>
<path d="M485.838 193.25L478.888 191.951L480.187 185L485.838 193.25Z" fill="#5C7EB3"/>
<path d="M515.442 292.125L510.174 287.408L514.892 282.14L515.442 292.125Z" fill="#5C7EB3"/>
<path d="M89 295L94.268 290.268L89.5508 285L89 295Z" fill="#5C7EB3"/>
<path d="M120.279 192.006L127.153 190.348L125.495 183.474L120.279 192.006Z" fill="#5C7EB3"/>
<path d="M189.157 122.133L196.045 123.733L197.644 116.845L189.157 122.133Z" fill="#5C7EB3"/>
        </g>
<defs>
<filter id="filter0_d_79_12468" x="142.144" y="399.41" width="68.5841" height="68.371" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.443137 0 0 0 0 0.984314 0 0 0 0 0.894118 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_79_12468"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_79_12468" result="shape"/>
</filter>
<linearGradient id="paint0_linear_79_12468" x1="219.13" y1="382.13" x2="311.681" y2="288.012" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="0.8"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0.21796" stopColor="#EC3768"/>
          <stop offset="0.619698" stopColor="#B332B4"/>
          <stop offset="0.870076" stopColor="#7F2DFB"/>
          <stop offset="1" stopColor="#71FBE4"/>
          </linearGradient>
</defs>
 <g>
<text fill="white" fontFamily="RFDewi" fontSize="36" fontWeight="400" x="300" y="428" style={{textAnchor: "middle"}}>$ {Math.floor(percent)}</text>
<text fill="#71FBE4" fontFamily="RFDewiExpanded" fontSize="18" fontWeight="700" x="300" y="454" style={{textAnchor: "middle"}}>REVENUE</text>
 </g>
 
</svg>

        <TextContainer>
          <Content>
            <Title>Deal Type</Title>
            <Title>FD Per Month:</Title>
            <Title>Click On The Product</Title>
            <Title>Click On The Webite</Title>
          </Content>
          <Content>
            <Text>{deal}</Text>
            <Text>{fd}</Text>
            <Text>{product}</Text>
            <Text>{web}</Text>
          </Content>
        </TextContainer>
        <Text post>In this calculation were used such 
          formulas, as Perpetual sincerity out 
          suspected necessary one but provision 
          satisfied. Respect nothing use set waiting 
          pursuit nay you looking. If on prevailed 
          concluded ye abilities. Address say 
          you new.
        </Text>
    </Container>
  );
};

