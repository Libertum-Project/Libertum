'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ambassadorsImage from '../assets/ambassadorsHero.svg';

import css from './hero.module.css';

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1380px)');
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1380);
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
          <h3>JOIN US ON OUR MISSION</h3>
          <h1>Libertum Ambassador Program</h1>
          <div className={css.paragraphsAmbassadors}>
            <p>
              Tailored for RWA and blockchain enthusiasts, with a keen interest in delving into the practical uses of
              blockchain technology. The main goal of this programme is to champion and promote the Libertum ecosystem,
              offering an exclusive gateway to the realm of RWA, DeFi, real-world asset tokenisation, and numerous
              avenues for personal development.
            </p>
          </div>

          <Link href="#form" className={css.applyButton}>
            <p>Apply Now</p>
            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>
        </div>

        <div className={css.imageContainer}>
          <Image alt="image ambassadors" src={ambassadorsImage} width={545} height={545} />
        </div>
      </div>
    </div>
  );
};
