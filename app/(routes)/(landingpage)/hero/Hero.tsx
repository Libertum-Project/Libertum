'use client';
import { type ReactElement, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import css from './Hero.module.css';

export function Hero(): ReactElement {
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
    <div className={css.heroContainer}>
      <div>
        {isMobile ? (
          <div className={css.backgroundNoVideo}></div>
        ) : (
          <video autoPlay muted loop className={css.video}>
            <source src="./bg-video-1.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <section className={css.hero}>
        <article className={css.text}>
          <h1>
            Tokenization Technology
            <br />
            for Real World Assets
          </h1>
          <div className={css.paragraphs}>
            <p>
              Libertum is the all-in-one tokenization technology, marketplace, and community. Libertum enables anyone to
              tokenize, trade and access liquidity with any Real World Asset.
            </p>
            <p>
              We’re more than an investment platform. Our end-to-end technology allows millions of investors to connect,
              buy and sell, lend and borrow, leveraging assets such as real estate, commodities, precious metals and
              gems, royalties, art, securities and more, all across the globe.
            </p>
          </div>
        </article>
        <div className={css.buttons}>
          <Link href="/subscribe" className={css.button1}>
            <div className={css.buttonFrame}>
              <Image src="/assets/rocket.svg" alt="N" width={21} height={21} className={css.logo} />
              <p>Start Tokenizing</p>
            </div>

            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>

          {/*
          <Link href="/subscribe" className={css.button1}>
            <div className={css.buttonFrame}>
              <Image
                src="/assets/marketIcon.svg"
                alt="N"
                width="13"
                height="13"
                className={css.logo}
              />
              <p>Explore Properties</p>
            </div>

            <Image
              alt="left arrow"
              src="/assets/leftArrow.svg"
              width={13.207}
              height={8.708}
            />
          </Link>
            */}

          <Link href="https://earn.libertum.io/" target="_blank" className={css.button1}>
            <div className={css.buttonFrame}>
              <Image src="assets/earn.svg" alt="earn" width={36} height={36} className={css.logo} />
              <p>Stake LBM</p>
            </div>

            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>

          <Link href="/get" className={css.button}>
            <div className={css.buttonFrame}>
              <Image src="/assets/get-icon-light.png" alt="N" width="13" height="13" className={css.logo} />
              <p>Get LBM</p>
            </div>

            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>
        </div>
      </section>
    </div>
  );
}
