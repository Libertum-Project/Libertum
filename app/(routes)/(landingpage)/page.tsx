'use client';
import { useMemo } from 'react';

import { BrandCarrousel } from '@/app/components/BrandCarrousel';
import { brandsCarrousel } from '@/constants/carrousel';

import { Hero } from './hero/Hero';
import { Cards } from './cards/Cards';
import { TagComponent } from './tags/tag';
import { Brands } from './brands/Brands';

export default function Home() {
  const combinedBrands = useMemo(() => [...brandsCarrousel, ...brandsCarrousel, ...brandsCarrousel], [brandsCarrousel]);

  return (
    <main>
      <Hero />
      <BrandCarrousel brands={combinedBrands} speed={75} gradient={true} width={65} height={24} />
      <Cards />
      <TagComponent />
      <Brands />
    </main>
  );
}
