'use client';
import { type ReactElement, useState, useEffect } from 'react';
import Image from 'next/image';
import css from './hero.module.css';
import Link from 'next/link';
import alan from '../assets/alan.svg';
import { Card } from '../cards/Card';

export function Hero(): ReactElement {
  const members = [
    {
      id: 1,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
    {
      id: 2,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
    {
      id: 3,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
    {
      id: 4,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
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
