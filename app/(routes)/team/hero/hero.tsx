'use client';
import { type ReactElement, useState, useEffect } from 'react';
import Image from 'next/image';
import css from './hero.module.css';
import Link from 'next/link';

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
          <h3>OUR TEAM</h3>
          <h1>Meet The Team Behind Libertum</h1>
          <div className={css.paragraphsAmbassadors}>
            <p>
              At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut
              ipsi auctori huius disciplinae placet: constituam, quid sit
              numeranda nec me ab illo inventore verita...
            </p>
          </div>

          <div>
            <h2>Leadership Team</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
