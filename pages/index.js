import Head from "next/head";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import LargeInfoSection from "../components/largeInfoSection";
import GridInfoSection from "../components/gridInfoSection";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import BrandCarousel from "../components/brandCarousel";
import PropertyCarousel from "../components/propertyCarousel";
import MarketplaceGraph from "../components/marketplaceGraph";
import TokenSection from "../components/tokenSection";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import Background from "../components/background";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Head>
        <title>Libertum</title>
        <meta name="description" content="Libertum.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background></Background>
      <div>
        <Navbar web3Enabled={false} />

        <div className="items-center w-full lg:py-16 md:px-12">
          <HeroSection></HeroSection>
          <BrandCarousel></BrandCarousel>
          <GridInfoSection></GridInfoSection>
        </div>

        <div className="bg-gradient-to-b from-transparent lg:mx-auto to-[#cfdde8df] min-w-screen-2xl to-10%">
          <LargeInfoSection></LargeInfoSection>
          <PropertyCarousel></PropertyCarousel>
          <MarketplaceGraph></MarketplaceGraph>
          {/* <TokenSection></TokenSection> */}
          <FAQ></FAQ>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
