import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import css from './Cards.module.css';
import firstImage from './assets/firstImage.svg';
import secondImage from './assets/secondImage.svg';
import thirdImage from './assets/thirdImage.svg';

export function Cards(): ReactElement {
  return (
    <div className={css.container}>
      <div className={css.ecosystem}>
        <Image alt="left arrow" src="/Ecosystem.svg" width={400} height={400} />
      </div>
      {/* first card */}
      <div className={css.cardContainer}>
        <div className={css.information}>
          <div className={css.informationTitle}>
            <h2>RWA Tokenization</h2>
            <h3>Unlock the Revenues of any Real Estate Property</h3>
          </div>
          <br />
          <p>
            The next stage in the evolution of real estate investment is here. Libertum will reduce the need for
            intermediaries, making real estate investment cost-effective and efficient.
          </p>
          <br />
          <br />
          <p>
            Through tokenization, property owners can quickly raise capital while investors enjoy passive income backed
            by real collateral. This innovative approach creates a decentralized digital system that seamlessly
            integrates with the physical world.
          </p>
          <br />
          <br />
          <p>
            🛡️ Investment Security - Your investment is linked to a Real-World Asset
            <br />
            <br />
            💰 Profit not property – Enjoy the benefits of a property without the overheads
            <br />
            <br />
            🔀 Diversification – Access Premium markets and properties
          </p>
          <br />

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
          <Image src={secondImage} width={394} height={437} alt="buildings" />
        </div>
        <div className={css.information}>
          <div className={css.informationTitle}>
            <h2>Property Owners </h2>
            <h3>Access Interest free capital for your next Investment</h3>
          </div>
          <br />
          <p>
            Libertum’s solution offers property owners a compelling advantage over traditional finance rates. Simply
            list your property on the Libertum Marketplace to unlock your properties potential. Access global pool of
            investors and benefit from affordable capital, improved liquidity and connect to global investors.
          </p>
          <br />
          <br />
          <p>
            💰 Access to capital— interest free, with terms you shape and define
            <br />
            <br />
            🕹️ Control Your Asset — unlike costly complicated and expensive alternatives, you maintain ownership of your
            property
            <br />
            <br />⚡ Speed to Market – List in weeks (not months), avoid traditionally expensive bureaucratic real
            estate processes
          </p>
          <br />
          <Link href="/community">
            <button className={css.button}>
              Learn More
              <Image alt="left arrow" src="/assets/leftArrowBLACK.svg" width={13.207} height={8.708} />
            </button>
          </Link>
        </div>
      </div>
      {/* third card */}
      <div className={css.cardContainer}>
        <div className={css.information}>
          <div className={css.informationTitle}>
            <h2>Retail Investors </h2>
            <h3>Unlimited access to a Global Pool of premium Properties</h3>
          </div>
          <br />
          <p>
            Real Estate remains the most sought after investments. Diversify your portfolio and begin your journey in
            real estate investment. Libertum is a simple and intuitive platform that allows you to invest in premium
            properties to immediately enjoy rental income. Unlike alternative solutions that establish complex and
            costly ownership infrastructures, the Libertum investor community enjoy the profit generated from the
            property not the cost of ownership.
          </p>
          <br />
          <br />
          <p>
            🌐 Tokenization - access to high-value real estate assets represented by NFTs
            <br />
            <br />
            ⛓️ Enhanced Liquidity — trade their tokens on our P2P blockchain-powered platforms.
            <br />
            <br />
            💰 Passive income – consistently earn rental income proportionate to your investment
          </p>
          <br />
          <Link href="/community">
            <button className={css.button}>
              Early Access
              <Image alt="left arrow" src="/assets/leftArrowBLACK.svg" width={13.207} height={8.708} />
            </button>
          </Link>
        </div>

        <div className={css.imageContainer}>
          <Image src={thirdImage} width="394" height="437" alt="buildings" />
        </div>
      </div>
    </div>
  );
}
