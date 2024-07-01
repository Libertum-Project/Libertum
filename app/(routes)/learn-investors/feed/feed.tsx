import Image from 'next/image';
import Link from 'next/link';

import css from './feed.module.css';
import Cards from './cards/cards';
import Calculator from './calculator/calculator';

const Feed = () => {
  return (
    <div className={css.container}>
      <Calculator />

      <Link href="/comingsoon" className={css.button}>
        <div className={css.buttonFrame}>
          <Image src="/assets/marketIcon.svg" alt="icon" width="18" height="18" />
          <p>Explore Properties</p>
        </div>
        <Image src="/assets/leftArrow.svg" alt="icon" width="14" height="9" />
      </Link>

      <Cards />
    </div>
  );
};

export default Feed;
