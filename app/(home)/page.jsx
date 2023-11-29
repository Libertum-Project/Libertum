import dynamic from "next/dynamic";
import HeroSection from "./HeroSection.jsx";
import Navbar from "../components/Navbar.jsx";
const BrandCarousel = dynamic(() => import("./BrandCarousel.jsx"));
const GridInfoSection = dynamic(() => import("./GridInfoSection.jsx"));
const LargeInfoSection = dynamic(() => import("./LargeInfoSection.jsx"));
const PropertyCarousel = dynamic(() => import("./PropertyCarousel.jsx"));
const MarketplaceGraph = dynamic(() => import("./MarketplaceGraph.jsx"));
const FAQ = dynamic(() => import("./Faq.jsx"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BrandCarousel />
      <div className="bg-gradient-to-b from-transparent lg:mx-auto to-[#cfdde8df] min-w-screen-2xl to-10%">
        <GridInfoSection />
        <LargeInfoSection />
        <PropertyCarousel />
        <MarketplaceGraph />
        <FAQ />
      </div>
    </main>
  );
}
