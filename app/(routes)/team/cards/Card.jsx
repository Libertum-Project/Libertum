import Image from 'next/image';
import Link from 'next/link';

import linkedinLogo from '../assets/linkedin.svg';

import css from './Card.module.css';

export const Card = ({ image, name, position, description, linkedin }) => {
  return (
    <div className={css.card}>
      <div className={css.removeWhenUse}>
        <Image alt={`image of ${name}`} src={image} width={257} height={257} />
      </div>
      <div className={css.details}>
        <div className={css.title}>
          <h2>{name}</h2>
          <h4>{position}</h4>
        </div>
        <p>{description}</p>
        <div className={css.linkedin}>
          <Link href={linkedin} target="_blank">
            <Image alt="linkedin" src={linkedinLogo} width={18} height={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};
