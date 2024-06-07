import { type ReactElement } from 'react';
import Image from 'next/image';

import css from './Brands.module.css';
import ap from './assets/ap.svg';
import benziga from './assets/benziga.svg';
import bloomberg from './assets/bloomberg.svg';
import coinmarket from './assets/coinmarket.svg';
import marketwatch from './assets/marketwatch.svg';
import yahoo from './assets/yahoo.svg';

const brands: string[] = [ap, benziga, bloomberg, coinmarket, marketwatch, yahoo];

export function Brands(): ReactElement {
  return (
    <div className={css.container}>
      <div className={css.brandContainer}>
        {brands.map((brand, index) => (
          <div key={index} className={css.slide}>
            <Image src={brand} alt={`Brand ${index}`} width="99" height="36" />
          </div>
        ))}
      </div>
    </div>
  );
}
