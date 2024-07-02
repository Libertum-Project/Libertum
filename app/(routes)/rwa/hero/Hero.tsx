'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import css from './Hero.module.css';

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 950px)');
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
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
    <div className={css.heroContainer}>
      {isMobile ? (
        <div className={css.backgroundNoVideo}></div>
      ) : (
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-1.mp4" type="video/mp4" />
        </video>
      )}

      <section className={css.hero}>
        <article className={css.text}>
          <div className={css.frameText}>
            <h3>Real World Assets</h3>
            <h1>A Global Challenge</h1>
          </div>

          <div className={css.paragraphs}>
            <p>
              Real estate investment traditionally requires significant capital investment The industry faces liquidity
              issues, and geographical diversification of portfolios can be impossible. Yet… Real Estate investment is
              consistently considered as one of the best investments.
              <br />
              Imagine if these problems could be eliminated!
            </p>
          </div>
        </article>
        <div className={css.buttons}>
          <Link href="/comingsoon" className={css.button}>
            <div className={css.buttonFrame}>
              <p>Learn More</p>
            </div>
            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>
        </div>
      </section>
    </div>
  );
};
