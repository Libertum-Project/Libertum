'use client';
import { ReactElement } from 'react';

import Image from 'next/image';

import css from './BrandCarrousel.module.css';
import aptos from './brands/aptos.svg';
import aws from './brands/aws.svg';
import coinFluence from './brands/coinFluence.svg';
import googleForStartups from './brands/googleforStatups.svg';
import hotelCollection from './brands/hotelCollection.svg';
import hubspot from './brands/Hubspot.svg';
import leonmisk from './brands/leonmiks.svg';
import microsoft from './brands/microsoft.svg';
import plume from './brands/plume.svg';
import polygon from './brands/polygon.svg';
import realestateAgency from './brands/realstateagency.svg';

const brands: string[] = [
  aptos,
  aws,
  coinFluence,
  googleForStartups,
  hotelCollection,
  hubspot,
  leonmisk,
  microsoft,
  plume,
  polygon,
  realestateAgency,
];

export function BrandCarrousel(): ReactElement {
  return (
    <div className={css.container}>
      <div className={css.carrouselContainer}>
        {brands.map((brand: string, index: number) => (
          <div key={index} className={css.slide}>
            <Image src={brand} alt={`Brand ${index}`} width="80" height="24" />
          </div>
        ))}
      </div>
    </div>
  );
}
