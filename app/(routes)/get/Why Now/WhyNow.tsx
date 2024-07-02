'use client';
import { useState, useEffect } from 'react';

import css from './WhyNow.module.css';

export const WhyNow = () => {
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
      <div className={css.whyNow} id="getPadding">
        <h2 className={css.whyNowHeading}>Why Now?</h2>
        <div className={css.bodyTextContainer}>
          <p className={css.whyNowBodyText}>Hard work always catches up with perfect timing.</p>
          <p className={css.whyNowBodyText}>
            Libertum is positioned to reshape the real estate investment landscape and unlock new possibilities for
            investors worldwide.
          </p>
        </div>
        <div className={css.keyPointsContainer}>
          <div className={css.keyPoints}>
            <h3 className={css.keyPointHeading}>RWA Tokenization</h3>
            <p>
              Real Estate Tokenization is projected to experience tremendous growth, Libertum is determined to
              capitalize on our early start and unique approach.
            </p>
          </div>
          <div className={css.keyPoints}>
            <h3 className={css.keyPointHeading}>Favorable Market</h3>
            <p>
              Predictions suggest an extremely positive crypto market in 2024, with RWA projects projected to lead this
              growth.
            </p>
          </div>
          <div className={css.keyPoints}>
            <h3 className={css.keyPointHeading}>Rising Cost of Living</h3>
            <p>
              The escalating global cost of living is posing insurmountable challenges for individuals looking to invest
              in real estate.
            </p>
          </div>
          <div className={css.keyPoints}>
            <h3 className={css.keyPointHeading}>High Interest Rates</h3>
            <p>
              The prevailing high interest rate increases the cost of borrowing money, especially within the commercial
              sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
