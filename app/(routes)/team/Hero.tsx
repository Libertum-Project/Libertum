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
              Explore the future of real estate with us. Our leadership team has over 80 years of collective experience in disrupting legacy thinking. Experts in blockchain innovation, Web3, SAAS products, and global marketplaces, we've been reshaping industry since 2010. Join us in revolutionizing real estate for tomorrow.
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
