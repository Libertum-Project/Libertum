import React from 'react';

import { BrandCarrousel } from '@/app/components/BrandCarrousel';
import { ecosystemCarrousel } from '@/constants/carrousel';

import { Hero } from './hero/hero';
import LibertumEcosystem from './thelibertum/theLibertumEcosystem';
import { TechStack } from './techStack/TechStack';
// import Partners from './partners/Partners';

export default function Ecosystem() {
  return (
    <div>
      <Hero />
      <div className="mt-[-6rem] z-10">
        <BrandCarrousel brands={ecosystemCarrousel} speed={75} gradient={false} width={115} height={115} gap={0} />
      </div>
      <LibertumEcosystem />

      {/* <Partners /> */}

      <TechStack />
    </div>
  );
}
