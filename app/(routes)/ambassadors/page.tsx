import React from 'react';
import { Hero } from "./hero/hero";
import  WhatIs  from "./whatIs/WhatIs";
import { Included } from './included/Included';

export default function page() {
  return (
    <div>
      <Hero />
      <WhatIs />
      <Included />
    </div>
  );
}
