'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import css from './JoinTeam.module.css';
import brondon from './assets/brondon.jpg';
import profile from './assets/profile.svg';
import fab from './assets/fab.jpg';
import discord from './assets/socialsIcons/discord.svg';
import linkedin from './assets/socialsIcons/linkedin.svg';
import telegram from './assets/socialsIcons/telegram.svg';
import twitter from './assets/socialsIcons/twitter.svg';

const JoinTeam = () => {
  const ambassadors = [
    {
      name: 'Mr Brondor',
      image: brondon,
      summary: 'Meet Mr. Brondor',
      description:
        'A crypto analyst and content creator with a passionate community on X, with a background in economics and finance. As a community leader and visual artist, he brings a unique perspective to the evolving world of Web3, Blockchain, Fin-Tech products and RWA',
      socials: {
        linkedin: '/',
        discord: '/',
        telegram: '/',
        twitter: '/',
      },
    },
    {
      name: 'Fabinacci',
      image: fab,
      summary: 'Web3 & blockchain enthusiast since 2018.',
      description:
        'Fascinated by rapidly evolving technologies and passionate about projects that bridge the gap between web 2 and 3, providing real-world utility to people within the strongest narratives of the decade: RWA, AI and GameFi. People-connector and advisor.',
      socials: {
        linkedin: '/',
        discord: '/',
        telegram: '/',
        twitter: '/',
      },
    },
    {
      name: 'It could be you',
      image: profile,
      summary: 'Join now!',
      description: '',
      socials: {
        linkedin: '/',
        discord: '/',
        telegram: '/',
        twitter: '/',
      },
    },
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1380px)');
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1380);
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
    <section className={css.joinContainer}>
      {isMobile ? (
        <div className={css.backgroundNoVideo}></div>
      ) : (
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-2.mp4" type="video/mp4" />
        </video>
      )}

      <div className={css.joinTeamFrame}>
        <h2>Join our Ambassadors team</h2>
        <p>
          Libertum Ambassadors, stemming from varied career backgrounds and spanning the globe, exemplify diversity. For
          instance, Natasha Jamison, a Marketing Executive with the National Gallery, and Isabella May, a trainee
          lawyer, each bring unique perspectives. Despite their differing professional journeys, they unite in their
          zeal for learning and championing the future of finance through RWA tokenisation.
        </p>
        <div className={css.cardsContainer}>
          {ambassadors.map((ambassador, index) => (
            <div key={index} className={css.card}>
              <div className={css.imageContainer}>
                <Image alt={ambassador.name} src={ambassador.image} width={120} height={120} />
              </div>

              <div>
                <h4>{ambassador.name}</h4>
                <h5>{ambassador.summary}</h5>
              </div>

              <p>{ambassador.description}</p>
              {ambassador.name !== 'It could be you' && (
                <div className={css.socialMediaFrame}>
                  <Link href={ambassador.socials.linkedin} className={css.socialMediaIcon}>
                    <Image alt="LinkedIn" src={linkedin} width={18} height={18} />
                  </Link>
                  <Link href={ambassador.socials.discord} className={css.socialMediaIcon}>
                    <Image alt="Discord" src={discord} width={18} height={18} />
                  </Link>
                  <Link href={ambassador.socials.telegram} className={css.socialMediaIcon}>
                    <Image alt="Telegram" src={telegram} width={18} height={18} />
                  </Link>
                  <Link href={ambassador.socials.twitter} className={css.socialMediaIcon}>
                    <Image alt="Twitter" src={twitter} width={18} height={18} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
