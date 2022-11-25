import styled from "styled-components";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import Layout from "../components/layout";
import { Navbar } from "../components/navbar";
import { Question } from "../components/question";
import { Recommended } from "../components/recommended";
import { Service } from "../components/service";
import { Widget } from "../components/widget";
import { Wrapper } from "../components/wrapper";

const BgGrad = styled.div`
background: linear-gradient(359.04deg, #170622 0.9%, #530975 26.01%, #5709A0 51.94%, #23053C 78.28%) no-repeat;
@media(min-width: 1024px) {
  height: 2450px;
}
@media(max-width: 1023px) {
  height: 2800px;
}
width: 100%;
position: absolute;
`;

export default function Home() {
  return (
    <Layout>
      <BgGrad />
      <Wrapper>
        <Navbar />
        <main>
            <Hero />
            <Widget />
            <Recommended />
            <Service />
            <Question />
        </main>
        <Footer />
      </Wrapper>
      <BgGrad />
    </Layout>
  );
};
