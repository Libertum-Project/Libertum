import React from 'react';
import { Hero } from './hero/hero';
import { BrandCarrousel } from './brandsCarrousel/BrandCarrousel';
import Partners from './partners/Partners';

export default function Ecosystem() {
  return (
    <div>
      <Hero />
      <BrandCarrousel />
      <Partners />
    </div>
  );
}
