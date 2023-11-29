import { useEffect } from "react";
import dynamic from 'next/dynamic';
import Head from "next/head";
import Lenis from "@studio-freight/lenis";
import AnimatedDrawer from "../components/Header";
import Navbar from '../components/navbar'
import HeroSection from "../components/heroSection";
const Background = dynamic(() => import('../components/background'));
const BrandCarousel = dynamic(() => import('../components/brandCarousel'));
const GridInfoSection = dynamic(() => import('../components/gridInfoSection'));
const LargeInfoSection = dynamic(() => import('../components/largeInfoSection'));
const PropertyCarousel = dynamic(() => import('../components/propertyCarousel'));
const MarketplaceGraph = dynamic(() => import('../components/marketplaceGraph'));
const FAQ = dynamic(() => import('../components/faq'));
const Footer = dynamic(() => import('../components/footer'));
import { Slide } from "react-awesome-reveal";


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
      {/* <Navbar web3Enabled={false} /> */}
      <div className="h-screen">
      <AnimatedDrawer />
      <HeroSection></HeroSection>
      </div>

      <Slide direction={"up"} triggerOnce={false}>
      <div className="items-center w-full lg:py-4 md:px-12">        
        <BrandCarousel></BrandCarousel>
      </div>
      
      </Slide>

      <div className="items-center w-full lg:py-4 md:px-12 bg-gradient-to-b from-transparent lg:mx-auto to-[#cfdde8df] min-w-screen-2xl to-10%">
        <GridInfoSection></GridInfoSection>
        <LargeInfoSection></LargeInfoSection>

      </div>

      <div className="bg-gradient-to-b from-transparent lg:mx-auto to-[#cfdde8df] min-w-screen-2xl to-10%">
      <Slide direction={"up"} triggerOnce={false}>
        <PropertyCarousel></PropertyCarousel>
      </Slide>
        <MarketplaceGraph></MarketplaceGraph>
        {/* <FAQ></FAQ> */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
