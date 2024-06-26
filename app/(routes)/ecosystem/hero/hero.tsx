'use client';
import { type ReactElement, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import css from './hero.module.css';

export function Hero(): ReactElement {
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

      <div className={css.heroAmbassadors}>
        <div className={css.textAmbassadors}>
          <h3>LIBERTUM ECOSYSTEM</h3>
          <h1>Libertum Technology</h1>
          <div className={css.paragraphsAmbassadors}>
            <p>
              Libertum is an entire ecosystem designed to break down the barriers of traditional real estate and cater
              to a new generation of investors.
            </p>
          </div>

          <Link href="#form" className={css.applyButton}>
            <p>JOIN OUR WAITLIST NOW</p>
            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>
        </div>
      </div>
    </div>
  );
}
