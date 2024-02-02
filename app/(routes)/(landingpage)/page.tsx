import { Hero } from "./hero/Hero";
import { BrandCarrousel } from "./brandsCarrousel/BrandCarrousel";
import { Cards } from "./cards/Cards";
import { TagComponent } from "./tags/tag";
import { Brands } from "./brands/Brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandCarrousel />
      <Cards />
      <TagComponent />
      <Brands />
    </main>
  );
}
