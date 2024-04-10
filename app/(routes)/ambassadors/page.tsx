import React from 'react';
import { Hero } from "./hero/hero";
import  WhatIs  from "./whatIs/WhatIs";

export default function page() {
  return (
    <div>
      <Hero />
      <WhatIs />
    </div>
  );
}
