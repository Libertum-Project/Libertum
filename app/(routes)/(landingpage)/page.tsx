import { Hero } from "./hero/Hero";
import { BrandCarrousel } from "./brandsCarrousel/BrandCarrousel";
import { Cards } from "./cards/Cards";
import { Tags } from "./tags/Tags";
import { Brands } from "./brands/Brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandCarrousel />
      <Cards />
      <Tags />
      <Brands />
    </main>
  )
}
