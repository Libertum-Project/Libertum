import { ReactElement } from 'react';
import Marquee from 'react-fast-marquee';
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
  const brands = [
    { name: 'Aptos', src: aptos },
    { name: 'AWS', src: aws },
    { name: 'Coinfluence', src: coinFluence },
    { name: 'Google For Startups', src: googleForStartups },
    { name: 'Hotel Collection', src: hotelCollection },
    { name: 'Hubspot', src: hubspot },
    { name: 'Leonmisk', src: leonmisk },
    { name: 'Microsoft', src: microsoft },
    { name: 'Plume', src: plume },
    { name: 'Polygon', src: polygon },
    { name: 'Real Estate Agency', src: realestateAgency },
  ];

  return (
    <div className={css.container}>
      <Marquee speed={50} pauseOnHover>
        {brands.map((brand, index) => (
          <div key={index} className={css.slide}>
            <Image
              src={brand.src}
              alt={`Brand: ${brand.name}`}
              width="80"
              height="24"
              className="w-[4rem] h-auto mx-[4rem]"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
