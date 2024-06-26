'use client';
import { useMemo } from 'react';

import { BrandCarrousel } from '@/app/components/BrandCarrousel';
import { brandsCarrousel } from '@/constants/carrousel';

import { Hero } from './hero/Hero';
import { Cards } from './cards/Cards';
import { TagComponent } from './tags/tag';

export default function Rwa() {
  const combinedBrands = useMemo(() => [...brandsCarrousel, ...brandsCarrousel, ...brandsCarrousel], [brandsCarrousel]);
  return (
    <>
      <Hero />
      <BrandCarrousel brands={combinedBrands} speed={75} gradient={true} width={75} height={75} />
      <Cards />
      <TagComponent />
    </>
  );
}
