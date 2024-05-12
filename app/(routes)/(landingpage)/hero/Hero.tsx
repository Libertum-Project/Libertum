'use client';
import { type ReactElement, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '@/app/components/CustomTexts';

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
          <div>
            <motion.h1
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
            >
              Real Estate Accessible
            </motion.h1>
            <TypingText title="To Everyone" textStyles="heroTitle text-left" />
          </div>

          <div className={css.paragraphs}>
            <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }}>
              Libertum is more than an investment platform; it is a catalyst for positive change in the world of real
              estate finance. We connect Real Estate Owners and millions of Investors across the globe, collaborating to
              unlock the true value of real estate.
            </motion.p>
          </div>
        </article>
        <motion.div className={css.buttons}
         initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }}>
        
          <Link href="/subscribe" className={css.button1}>
            <div className={css.buttonFrame}>
              <Image src="/assets/rocket.svg" alt="N" width={21} height={21} className={css.logo} />
              <p>Start Tokenizing</p>
            </div>

            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>

          <Link href="https://earn.libertum.io/" target="_blank" className={css.button1}>
            <div className={css.buttonFrame}>
              <Image src="/assets/icons/earn.png" alt="earn" width={36} height={36} className={css.logo} />
              <p>Stake LBM</p>
            </div>

            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>

          <Link href="/get" className={css.button}>
            <div className={css.buttonFrame}>
              <Image src="/assets/icons/get.png" alt="get" width={36} height={36} className={css.logo} />
              <p>Get LBM</p>
            </div>

            <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
