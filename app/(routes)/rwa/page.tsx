import BrandCarrousel from '@/app/components/BrandCarrousel';
import { brandsCarrousel } from '@/constants/carrousel';

import { Hero } from './hero/Hero';
import { Cards } from './cards/Cards';
import { TagComponent } from './tags/tag';

export default function Rwa() {
  return (
    <>
      <Hero />
      <BrandCarrousel brands={brandsCarrousel} speed={18} gradientWidth={500} width={75} height={75} />
      <Cards />
      <TagComponent />
    </>
  );
}
