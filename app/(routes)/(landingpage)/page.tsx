import BrandCarrousel from '@/components/BrandCarrousel';
import { brandsCarrousel } from '@/constants/carrousel';

import Hero from './hero/Hero';
import Cards from './cards/Cards';
import TagComponent from './tags/tag';
import Brands from './brands/Brands';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandCarrousel brands={brandsCarrousel} speed={18} gradientWidth={500} width={65} height={24} />
      <Cards />
      <TagComponent />
      <Brands />
    </main>
  );
}
