import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import Layout from "../components/layout";
import { Navbar } from "../components/navbar";
import { Question } from "../components/question";
import { Recommended } from "../components/recommended";
import { Service } from "../components/service";
import { Widget } from "../components/widget";
import { Wrapper } from "../components/wrapper";


export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
};
