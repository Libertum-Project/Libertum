import css from './Card.module.css';
import Image from 'next/image';
import alan from '../assets/alan.svg';

export function Card() {
  return (
    <div className={css.card}>
      <div className={css.removeWhenUse}>
        <Image alt="image of Alan" src={alan} width={257} height={257} />
      </div>
      <div className={css.details}>
        <div className={css.title}> 
        <h2>Alan Gormley</h2>
        <h3>COO & Co-Founder</h3>
        </div>

        <p>
          Business transformation expert, aiming to disrupt legacy thinking,
          drive strategy development, and increase creativity. With expertise in
          Web3 technologies and real estate, his goal is setting new standards
          for Web3 engagement and valuing creation while bridging the
          traditional Web2 world.
        </p>
        <p>in</p>
      </div>
    </div>
  );
}
