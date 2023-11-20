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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background></Background>
      <Navbar web3Enabled={false} />

      <div className="items-center w-full lg:py-4 md:px-12">
        <HeroSection></HeroSection>
        <BrandCarousel></BrandCarousel>
        <GridInfoSection></GridInfoSection>
      </div>

      <div className="bg-gradient-to-b from-transparent lg:mx-auto to-[#cfdde8df] min-w-screen-2xl to-10%">
        <LargeInfoSection></LargeInfoSection>
        <PropertyCarousel></PropertyCarousel>
        <MarketplaceGraph></MarketplaceGraph>
        <FAQ></FAQ>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
