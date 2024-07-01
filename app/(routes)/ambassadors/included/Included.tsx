import Image from 'next/image';

import access from '../assets/access.svg';
import merchandise from '../assets/merchandise.svg';
import more from '../assets/more.svg';
import preview from '../assets/previewroadmaps.svg';
import remuneration from '../assets/remuneration.svg';

import css from './Included.module.css';

const Included = () => {
  const cards = [
    {
      title: 'Exclusive access to special events',
      image: access,
    },
    {
      title: 'Remuneration',
      image: remuneration,
    },
    {
      title: 'Preview roadmaps',
      image: preview,
    },
    {
      title: 'Libertum merchandise',
      image: merchandise,
    },
    {
      title: 'And more!',
      image: more,
    },
  ];

  return (
    <div className={css.container}>
      <h2>What’s included for Ambassadors?</h2>
      <div className={css.frame}>
        {cards.map((card, index) => (
          <div key={index} className={css.card}>
            <div className={css.imageContainer}>
              <Image src={card.image} alt={card.title} width={64} height={64} />
            </div>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Included;
