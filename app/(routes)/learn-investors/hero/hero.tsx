import { type ReactElement } from "react";
import Image from "next/image";
import css from "./hero.module.css";
import Link from "next/link";


export function Hero(): ReactElement {
  return (
    <div className={css.heroContainer}>
      <video autoPlay muted loop className={css.video}>
        <source src="./bg-video-1.mp4" type="video/mp4" />
      </video>
      <div className={css.heroCommunity}>
        <div className={css.textCommunity}>
          <h1>Welcome to the future of real estate investing</h1>
          <div className={css.paragraphsCommunity}>
            <p>
            Invest in high quality real estate with just $50 and start earning rental income from day one. Join our resilient fractional rental income platform now and let the future invest in you.           
            </p>          
          </div>

        </div>

        <div className={css.whiteBox}>
          <h2 className={css.whiteBoxTitle}>Real Assets, Real Returns</h2>
          <p className={css.whiteBoxText}>
          Libertum&apos;s Rental Income Token (RIT) - Invest in real estate on the blockchain effortlessly with rental income tokens. Tokens give you regular monthly income and capital repayment, providing a hassle-free opportunity to grow your investment.
          </p>

          <Link href="/comingsoon" className={css.whiteBoxButton}>
          <p>Learn More</p>
          <Image
                alt="left arrow"
                src="/assets/leftArrow.svg"
                width={13.207}
                height={8.708}
            /> 
          </Link>

        </div>
      </div>
    </div>
  );
}