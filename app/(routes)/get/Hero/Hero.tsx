'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { TokenPurchaseSection } from './TokenPurchaseSection/TokenPurchaseSection';
import css from './Hero.module.css';
import checkbox from './checkbox.svg';
import shield from './shield.png';

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

      <section className={css.hero}>
        <article className={css.text}>
          <Image src="/assets/dark-mode-get.png" alt="Get" width={450} height={450} />
          <div className={css.paragraphs}>
            <p>The Libertum GET tool enables users to swap their tokens on the base network to “GET” more $LBM</p>
          </div>
          <div className={css.tokenOptions}>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} /> <p>Connect your wallet</p>
            </div>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} />{' '}
              <p>Choose the token you want to exchange for LBM</p>
            </div>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} /> <p>Authorize the use of chosen token</p>
            </div>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} /> <p>SWAP the token into LBM</p>
            </div>
          </div>

          <div className={css.frameButton}>
            <p>In the future users will be able to swap cross-chain tokens simply and efficiently.</p>
          </div>

          <div className={css.auditInfo}>
            <p>
              <span>
                <Link href="https://github.com/solidproof/projects/tree/main/2024/Libertum">Audit</Link>
              </span>
              and
              <span>
                <Link href="https://github.com/solidproof/projects/tree/main/2023/Libertum">KYC</Link>
              </span>
              powered by
            </p>
            <Image src={shield} alt="shield" width={124} height={31} />
          </div>
        </article>
        <TokenPurchaseSection />
      </section>
    </div>
  );
};

export default Hero;
