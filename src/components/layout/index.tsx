import styled from "styled-components";
import Head from "next/head";
import tw from "twin.macro";

type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
};

const PageContainer = styled.div`
background: linear-gradient(359.04deg, #170622 0.9%, #530975 26.01%, #5709A0 51.94%, #23053C 78.28%);
  ${tw`
    flex
    flex-col
    w-screen
    text-white
    lg:bg-bg
    bg-bg-mob
    font-RFD
    h-screen
    items-center
    overflow-x-hidden
    relative
  `}
`;

const BgContainer = styled.div`
background-image: url('assets/images/bg_texture.png');
mix-blend-mode: overlay;
opacity: 0.4;
${tw`
  absolute w-full h-screen
`}
`;

export default function Layout({
  title = "Alfaleads",
  keywords = "Alfaleads",
  description = "Alfaleads",
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
        <PageContainer>
          <BgContainer />
          {children}
          </PageContainer>
    </>
  );
}
