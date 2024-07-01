'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import css from './hero.module.css';

const Hero = () => {
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

      <div className={css.heroCommunity}>
        <div className={css.textCommunity}>
          <h1>Welcome to the future of real estate investing</h1>
          <div className={css.paragraphsCommunity}>
            <p>
              Invest in high quality real estate with just $50 and start earning rental income from day one. Join our
              resilient fractional rental income platform now and let the future invest in you.
            </p>
          </div>
        </div>

        <div className={css.whiteBox}>
          <h2 className={css.whiteBoxTitle}>Real Assets, Real Returns</h2>
          <p className={css.whiteBoxText}>
            Libertum&apos;s Rental Income Token (RIT) - Invest in real estate on the blockchain effortlessly with rental
            income tokens. Tokens give you regular monthly income and capital repayment, providing a hassle-free
            opportunity to grow your investment.
          </p>

          <Link href="/community" className={css.whiteBoxButton}>
            <p>Learn More</p>
            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
