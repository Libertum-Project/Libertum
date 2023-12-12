import dynamic from "next/dynamic";
import Header from "./Header";
import HeroSection from "./HeroSection.jsx";
const BrandCarousel = dynamic(() => import("./BrandCarousel.jsx"));
const GridInfoSection = dynamic(() => import("./GridInfoSection.jsx"));
const LargeInfoSection = dynamic(() => import("./LargeInfoSection.jsx"));
const PropertyCarousel = dynamic(() => import("./PropertyCarousel.jsx"));
const MarketplaceGraph = dynamic(() => import("./MarketplaceGraph.jsx"));
const AsSeenOn = dynamic(() => import("./AsSeenOn"));
const HowToBuy = dynamic(() => import("./HowToBuy"));

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <Header />
        <HeroSection />
      </div>
      <BrandCarousel />
      <div className="bg-gradient-to-b from-transparent lg:mx-auto to-[#cfdde8df] min-w-screen-2xl to-10%">
        <GridInfoSection />
        <LargeInfoSection />
        <PropertyCarousel />
        <AsSeenOn />
        <HowToBuy />
        <MarketplaceGraph />
      </div>
    </main>
  );
}
