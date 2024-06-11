import { BrandCarrousel } from '@/app/components/BrandCarrousel';
import { brandsCarrousel } from '@/constants/carrousel';

import { Hero } from './hero/Hero';
import { Cards } from './cards/Cards';
import { TagComponent } from './tags/tag';

export default function Rwa() {
  return (
    <>
      <Hero />
      <BrandCarrousel brands={brandsCarrousel} speed={75} gradient={true} width={75} height={75} gap={12} />
      <Cards />
      <TagComponent />
    </>
  );
}
