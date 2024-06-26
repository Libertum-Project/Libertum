'use client';
import { useMemo } from 'react';

import { BrandCarrousel } from '@/app/components/BrandCarrousel';
import { ecosystemCarrousel } from '@/constants/carrousel';

import { Hero } from './hero/hero';
import LibertumEcosystem from './thelibertum/theLibertumEcosystem';
import { TechStack } from './techStack/TechStack';

export default function Ecosystem() {
  const combinedBrands = useMemo(
    () => [...ecosystemCarrousel, ...ecosystemCarrousel, ...ecosystemCarrousel],
    [ecosystemCarrousel],
  );

  return (
    <div>
      <Hero />
      <div className="mt-[-6rem] z-10">
        <BrandCarrousel brands={combinedBrands} speed={75} gradient={false} width={115} height={115} />
      </div>
      <LibertumEcosystem />

      <TechStack />
    </div>
  );
}
