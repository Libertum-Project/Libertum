import { Hero } from "./hero/Hero";
import { BrandCarrousel } from "./brandsCarrousel/BrandCarrousel";
import { Cards } from "../cards/Cards";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandCarrousel />
      <Cards />
    </main>
  )
}
