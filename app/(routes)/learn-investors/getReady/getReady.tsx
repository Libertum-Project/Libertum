'use client';
import { type ReactElement, useState, useEffect } from 'react';

import css from './getReady.module.css';

export function GetReady(): ReactElement {
  const data = [
    {
      title: 'Fractional Rental Income',
      text: 'Every property is tokenized and you can purchase all or a fraction of the total property for the right to the rental income without any dilution to the economic benefits.',
    },
    {
      title: 'Collateral',
      text: 'Property tokenizer must provide the property as collateral, giving investors reassurance that the rent will be paid on time. In the event of default, Libertum reserves the right to reclaim the collateral, safeguarding the interests of fractionalized rental income token holders.',
    },
    {
      title: 'Earn rental yield',
      text: 'Every property comes with a guaranteed rental income locked in for the term period of time. ',
    },
    {
      title: 'Qualified properties ',
      text: 'All properties are qualified assets with legally due diligence and long term lease already in place.',
    },
    {
      title: 'P2P marketplace',
      text: 'Sell your tokens anytime by creating a listing on our P2P marketplace. ',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 950px)');
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
      setIsMobile(mediaQuery.matches);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section className={css.whyNowContainer}>
      {isMobile ? (
        <div className={css.backgroundNoVideo}></div>
      ) : (
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-2.mp4" type="video/mp4" />
        </video>
      )}
      <div className={css.whyNow}>
        <div className={css.grid}>
          <h2 className={css.gridTitle}>
            Get ready for the next-gen property investing - experience the future today!{' '}
          </h2>
          {data.map((item, index) => (
            <div key={index} className={css.card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
