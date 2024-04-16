'use client';

import { ReactElement, useMemo } from 'react';
import Image from 'next/image';
import css from './BrandCarrousel.module.css';
import borrow from './brands/borrow.svg';
import chose from './brands/chose.svg';
import earn from './brands/earn.svg';
import get from './brands/get.svg';
import market from './brands/market.svg';
import stay from './brands/stay.svg';
import tokens from './brands/tokens.svg';
import trade from './brands/trade.svg';

export function BrandCarrousel(): ReactElement {
  const brands = useMemo(
    () => [
      borrow,
      chose,
      earn,
      get,
      market,
      stay,
      tokens,
      trade,
      borrow,
      chose,
      earn,
      get,
      market,
      stay,
      tokens,
      trade,
    ],
    []
  );

  const combinedBrands = useMemo(
    () => [...brands, ...brands, ...brands],
    [brands]
  );

  return (
    <div className={css.container}>
      <div className={css.carrouselContainer}>
        {combinedBrands.map((brand, index) => (
          <div key={index} className={css.slide}>
            <Image
              src={brand}
              alt={`Brand ${index}`}
              width="132"
              height="132"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
