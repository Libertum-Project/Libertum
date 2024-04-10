'use client';
import { useState, useEffect } from 'react';
import css from './JoinTeam.module.css';

export function JoinTeam() {
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
          <div className={css.card}>
            image
            <div>
              <h4>name</h4>
              <h5>summary</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non nulla nisi. Curabitur interdum velit eu condimentum laoreet.
              Nulla gravida congue ultricies. Sed feugiat eu ipsum in feugiat.
              Cras sed fringilla est. Morbi velit torto.
            </p>
            <div>social media</div>
          </div>
        </div>
      </div>
    </section>
  );
}
