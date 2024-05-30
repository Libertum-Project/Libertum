'use client';
import Marquee from 'react-fast-marquee';
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
  const brands: string[] = [borrow, chose, earn, get, market, stay, tokens, trade];
  const combinedBrands = useMemo(() => [...brands, ...brands, ...brands], [brands]);

  return (
    <div className={css.container}>
      <Marquee speed={75}>
        {combinedBrands.map((brand: string, index: number) => (
          <div key={index} className={css.slide}>
            <Image src={brand} alt={`Brand ${index}`} width="130" height="130" className="w-[130px] h-[130px]" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
