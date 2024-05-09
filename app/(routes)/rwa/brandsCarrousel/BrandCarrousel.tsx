'use client';
import Marquee from 'react-fast-marquee';

import { ReactElement, useEffect, useRef, useMemo, useState } from 'react';
import Image from 'next/image';
import css from './BrandCarrousel.module.css';
import aptos from './brands/aptos.svg';
import aws from './brands/aws.svg';
import coinFluence from './brands/coinFluence.svg';
import coinweb from './brands/coinweb.svg';
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
      realestateAgency
    ],
    []
  );

  const combinedBrands = useMemo(
    () => [...brands, ...brands, ...brands],
    [brands]
  );

  return (
    <div className={css.container}>
      <Marquee speed={50} pauseOnHover>
        {combinedBrands.map((brand, index) => (
          <div key={index} className={css.slide}>
            <Image
              src={brand}
              alt={`Brand ${index}`}
              width="80"
              height="24"
              className="w-[60px] h-auto mx-[4rem]"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
