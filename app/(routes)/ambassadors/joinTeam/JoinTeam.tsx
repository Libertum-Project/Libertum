'use client';
import { useState, useEffect } from 'react';
import css from './JoinTeam.module.css';
import alanPhoto from './assets/alan.svg';
import javvadPhoto from './assets/javvad.svg';
import discord from './assets/socialsIcons/discord.svg';
import linkedin from './assets/socialsIcons/linkedin.svg';
import telegram from './assets/socialsIcons/telegram.svg';
import twitter from './assets/socialsIcons/twitter.svg';
import Image from 'next/image';
import Link from 'next/link';

export function JoinTeam() {
  const ambassadors = [
    {
      name: 'Alan Gormley',
      image: alanPhoto,
      summary: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nulla nisi. Curabitur interdum velit eu condimentum laoreet. Nulla gravida congue ultricies. Sed feugiat eu ipsum in feugiat. Cras sed fringilla est. Morbi velit torto.',
      socials: {
        linkedin: '/',
        discord: '/',
        telegram: '/',
        twitter: '/',
      },
    },
    {
      name: 'Javvad Azam',
      image: javvadPhoto,
      summary: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nulla nisi. Curabitur interdum velit eu condimentum laoreet. Nulla gravida congue ultricies. Sed feugiat eu ipsum in feugiat. Cras sed fringilla est. Morbi velit torto.',
      socials: {
        linkedin: '/',
        discord: '/',
        telegram: '/',
        twitter: '/',
      },
    },
    {
      name: 'Alan Gormley',
      image: alanPhoto,
      summary: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nulla nisi. Curabitur interdum velit eu condimentum laoreet. Nulla gravida congue ultricies. Sed feugiat eu ipsum in feugiat. Cras sed fringilla est. Morbi velit torto.',
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
          Libertum Ambassadors, stemming from varied career backgrounds and
          spanning the globe, exemplify diversity. For instance, Natasha
          Jamison, a Marketing Executive with the National Gallery, and Isabella
          May, a trainee lawyer, each bring unique perspectives. Despite their
          differing professional journeys, they unite in their zeal for learning
          and championing the future of finance through RWA tokenisation.
        </p>
        <div className={css.cardsContainer}>
          {ambassadors.map((ambassador, index) => (
            <div key={index} className={css.card}>
              <div className={css.imageContainer}>
                <Image
                  alt={ambassador.name}
                  src={ambassador.image}
                  width={120}
                  height={120}
                />
              </div>

              <div>
                <h4>{ambassador.name}</h4>
                <h5>{ambassador.summary}</h5>
              </div>

              <p>{ambassador.description}</p>

              <div className={css.socialMediaFrame}>
                <Link
                  href={ambassador.socials.linkedin}
                  className={css.socialMediaIcon}
                >
                  <Image alt="LinkedIn" src={linkedin} width={18} height={18} />
                </Link>
                <Link
                  href={ambassador.socials.discord}
                  className={css.socialMediaIcon}
                >
                  <Image alt="Discord" src={discord} width={18} height={18} />
                </Link>
                <Link
                  href={ambassador.socials.telegram}
                  className={css.socialMediaIcon}
                >
                  <Image alt="Telegram" src={telegram} width={18} height={18} />
                </Link>
                <Link
                  href={ambassador.socials.twitter}
                  className={css.socialMediaIcon}
                >
                  <Image alt="Twitter" src={twitter} width={18} height={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
