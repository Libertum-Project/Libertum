'use client';

import { ReactElement, useMemo } from 'react';
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

export function BrandCarrousel(): ReactElement {
  const brands = useMemo(
    () => [
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
    ],
    [],
  );

  const combinedBrands = useMemo(() => [...brands, ...brands, ...brands], [brands]);

  return (
    <div className={css.container}>
      <div className={css.carrouselContainer}>
        {combinedBrands.map((brand, index) => (
          <div key={index} className={css.slide}>
            <Image src={brand} alt={`Brand ${index}`} width="80" height="24" />
          </div>
        ))}
      </div>
    </div>
  );
}