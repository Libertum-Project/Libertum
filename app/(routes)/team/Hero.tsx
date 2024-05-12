'use client';
import { type ReactElement, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from './cards/Card';

import { TypingText, TitleText } from '@/app/components/CustomTexts';
import { leaderMembers } from './teamMembers';

function Hero(): ReactElement {
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
          <TypingText title="OUR TEAM" textStyles="heroOvertitle" />
          <TitleText title="Meet The Team Behind Libertum" textStyles="heroTitle" />
          <div>
            <motion.p
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ delay: 1, duration: 2 }}
              className="text-white font-montserrat lg:text-center font-normal"
            >
              We facilitate connections between real estate owners and millions of investors worldwide, harnessing the
              power of Web3 and blockchain technology to unlock the true value of real estate. With a proven track
              record of building cutting-edge tech platforms globally, we've been leading the charge in disrupting the
              real estate industry.
            </motion.p>
          </div>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className=" text-white text-center text-4xl font-semibold mb-[3rem] "
          >
            Leadership Team
          </motion.h2>
          <div className="flex w-full lg:w-[75.125rem] justify-between flex-col lg:flex-row items-center h-[110rem] lg:h-fit">
            {leaderMembers.map((member) => (
              <Card
                key={member.id}
                image={member.image}
                name={member.name}
                position={member.position}
                description={member.description}
                linkedin={member.linkedin}
                index={member.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
