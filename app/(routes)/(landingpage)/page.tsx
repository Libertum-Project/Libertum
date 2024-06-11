import { BrandCarrousel } from '@/app/components/BrandCarrousel';
import { brandsCarrousel } from '@/constants/carrousel';

import { Hero } from './hero/Hero';
import { Cards } from './cards/Cards';
import { TagComponent } from './tags/tag';
import { Brands } from './brands/Brands';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandCarrousel brands={brandsCarrousel} speed={75} gradient={true} width={65} height={24} gap={12} />
      <Cards />
      <TagComponent />
      <Brands />
    </main>
  );
}
