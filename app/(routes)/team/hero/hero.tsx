'use client';
import { type ReactElement, useState, useEffect } from 'react';
import Image from 'next/image';
import css from './hero.module.css';
import Link from 'next/link';
import { Card } from '../cards/Card';
import alan from '../assets/alan.svg';
import javvad from '../assets/javvad.svg';
import xavier from '../assets/xavier.svg';
import none from '../assets/none.svg';

export function Hero(): ReactElement {
  const members = [
    {
      id: 1,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Business transformation expert, aiming to disrupt legacy thinking, drive strategy development, and increase creativity. With expertise in Web3 technologies and real estate, his goal is setting new standards for Web3 engagement and valuing creation while bridging the traditional Web2 world.',
      linkedin: '/linkedin.com'
    },
    {
      id: 2,
      image: javvad,
      name: 'Javvad Azam',
      position: 'CEO & Co-Founder​',
      description:
        "Chartered accountant with +20 years of experience in real estate and hospitality investments, with a passion for Web3 technologies. He is deeply committed to leading transformative projects in real-world asset tokenization to leverage blockchain's potential for global impact.",
      linkedin: '/linkedin.com'
    },
    {
      id: 3,
      image: xavier,
      name: 'Xavier Litt',
      position: 'CMO',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
    {
      id: 4,
      image: none,
      name: 'Łukasz Rżanek',
      position: 'CTO',
      description:
        "With over 25 years of industry experience and 15 as a CTO, a pioneer in Web3 technologies, known for developing decentralized market protocols and innovative NFT protocols on Ethereum networks.",
      linkedin: '/linkedin.com'
    }
  ];

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
        </div>
        <div className={css.leadershipTeam}>
            <h2>Leadership Team</h2>
            <div className={css.members}>
              {members.map((member) => (
                <Card
                  key={member.id}
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  description={member.description}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}
