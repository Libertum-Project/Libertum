import React from 'react';
import Image from 'next/image';

import css from './partners.module.css';
import ad360 from './assets/ad360.svg';
import coinweb from './assets/coinweb.svg';
import defactor from './assets/defactor.svg';
import microsoft from './assets/microsoft.svg';
import nd from './assets/nd.svg';
import plume from './assets/plume.svg';
import thirdweb from './assets/thirdweb.svg';
import unizen from './assets/unizen.svg';

export default function Partners() {
  const partners = [plume, thirdweb, microsoft, coinweb, defactor, nd, ad360, unizen];

  return (
    <div className={css.container}>
      <h2>Our technology partners</h2>
      <h3>Technology Partners</h3>
      <div className={css.partnersContainer}>
        {partners.map((partner, index) => (
          <div className={css.imageContainer} key={index}>
            <Image src={partner} alt={`partner-${index}`} width={106} height={38} />
          </div>
        ))}
      </div>
    </div>
  );
}
