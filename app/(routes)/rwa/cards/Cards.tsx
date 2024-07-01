import Image from 'next/image';
import Link from 'next/link';

import css from './Cards.module.css';
import firstImage from './assets/firstImage.svg';
import secondImage from './assets/secondImage.svg';

const Cards = () => {
  return (
    <div className={css.container}>
      {/* first card */}
      <div className={css.cardContainer}>
        <div className={css.information}>
          <div className={css.informationTitle}>
            <h3>Real World Asset (RWA) Tokenization</h3>
            <h2>RWA tokenization refers to the process of converting real-world assets into digital tokens</h2>
          </div>

          <p>
            In the world of blockchain and cryptocurrencies, the idea of tokenization has proven to be revolutionary.
            Tokenization involves transforming tangible assets into digital tokens on a blockchain, signifying ownership
            or entitlements. This ground breaking technology is capable of representing a diverse range of assets, from
            entire properties to the right to the rental income they generate… enter Libertum! 
          </p>

          <Link href="/community">
            <button className={css.button}>
              Learn More
              <Image alt="left arrow" src="/assets/leftArrowBLACK.svg" width={13.207} height={8.708} />
            </button>
          </Link>
        </div>
        <div className={css.imageContainer}>
          <Image src={firstImage} width="394" height="437" alt="buildings" />
        </div>
      </div>

      {/* second card */}
      <div className={`${css.cardContainer} ${css.secondCard}`}>
        <div className={css.imageContainer}>
          <Image src={secondImage} width="394" height="437" alt="buildings" />
        </div>
        <div className={css.information}>
          <div className={css.informationTitle}>
            <h3>Real Estate Tokenization </h3>
            <h2>Tokenization is the process of representing ownership as tokens on the Blockchain </h2>
          </div>

          <p>
            The Libertum solution converts a property into tokens or divisible digital shares. These are directly linked
            to an agreed and guaranteed rental yield for investors. These tokens can be traded on a Peer2Peer
            marketplace transforming an illiquid market into one where hundreds of property transactions can happen
            every minute, transforming the traditional Real estate market. 
          </p>

          <Link href="/community">
            <button className={css.button}>
              Learn More
              <Image alt="left arrow" src="/assets/leftArrowBLACK.svg" width={13.207} height={8.708} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
