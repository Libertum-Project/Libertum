import React from 'react';
import { Hero } from './hero/hero';
import { BrandCarrousel } from './brandsCarrousel/BrandCarrousel';
import Partners from './partners/Partners';
import LibertumEcosystem from './thelibertum/theLibertumEcosystem';
import { TechStack } from './techStack/TechStack';

export default function Ecosystem() {
  return (
    <div>
      <Hero />
      <BrandCarrousel />
      <Partners />
      <LibertumEcosystem />
      <TechStack />
    </div>
  );
}
