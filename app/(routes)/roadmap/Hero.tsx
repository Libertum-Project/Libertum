'use client';
import { type ReactElement, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '@/app/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/utils/motion';

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
    <div className="relative pt-[5rem] overflow-hidden">
      {isMobile ? (
        <div className="heroGradient"></div>
      ) : (
        <video autoPlay muted loop className="heroVideo">
          <source src="./bg-video-1.mp4" type="video/mp4" />
        </video>
      )}

      <div className="lg:max-w-containerWidth py-[7rem] px-4 mx-auto  flex flex-col items-center gap-16 relative z-50 box-border justify-center flex-1">
        <div className="flex flex-col justify-center gap-4 items-center lg:w-[48rem] box-border ">
          <TypingText title="LIBERTUM ROADMAP" textStyles="heroOvertitle" />
          <TitleText
            title="Libertum:
            Doing things differently"
            textStyles="heroTitle"
          />
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.p
              variants={fadeIn('up', 'tween', 1, 1)}
              className="text-white font-montserrat lg:text-center font-normal"
            >
              Libertum is an entire ecosystem designed to break down the barriers of traditional real estate and cater
              to a new generation of investors. 2014 is the year that Libertum differentiates itself from other RWA real
              estate projects! We go beyond tokenising real estate and trading on secondary markets. With $LBM at the
              centre of our ecosystem we are creating a circular economy where token holders can not only invest and
              earn in properties, they will be able to live work and play in them as well. 
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
