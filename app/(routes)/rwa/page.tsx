import { Hero } from './hero/Hero';
import { BrandCarrousel } from './brandsCarrousel/BrandCarrousel';
import { Cards } from './cards/Cards';
import { TagComponent } from './tags/tag';

export default function Rwa() {
  return (
    <>
      <Hero />
      <BrandCarrousel />
      <Cards />
      <TagComponent />
    </>
  );
}
