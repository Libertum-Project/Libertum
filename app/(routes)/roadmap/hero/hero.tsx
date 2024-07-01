'use client';
import { useState, useEffect } from 'react';

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

      <div className={css.heroAmbassadors}>
        <div className={css.textAmbassadors}>
          <h3>LIBERTUM ROADMAP</h3>
          <h1>
            Libertum:
            <br />
            Doing things differently
          </h1>
          <div className={css.paragraphsAmbassadors}>
            <p>
              Libertum is an entire ecosystem designed to break down the barriers of traditional real estate and cater
              to a new generation of investors. 2014 is the year that Libertum differentiates itself from other RWA real
              estate projects! We go beyond tokenising real estate and trading on secondary markets. With $LBM at the
              centre of our ecosystem we are creating a circular economy where token holders can not only invest and
              earn in properties, they will be able to live work and play in them as well. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
