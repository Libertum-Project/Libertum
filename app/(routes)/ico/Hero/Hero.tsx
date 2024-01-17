import { type ReactElement } from "react";
import { TokenPurchaseSection } from "./TokenPurchaseSection/TokenPurchaseSection";
import Image from "next/image";
import css from "./Hero.module.css";
import checkbox from "./checkbox.svg";
import shield from "./shield.png";

export function Hero(): ReactElement {
  return (
    <div className={css.heroContainer}>
      <video autoPlay muted loop className={css.video}>
        <source src="./bg-video-1.mp4" type="video/mp4" />
      </video>
      <section className={css.hero}>
        <article className={css.text}>
          <h1>LBM: Making investment in real estate accessible to all</h1>
          <div className={css.paragraphs}>
            <p>
              We are committed that 5% net profit is used to buy back and burn
              $LBM - reducing circulation and increase $LBM price.
            </p>
            <p>Plus the LBM Utility Token can be:</p>
          </div>
          <div className={css.tokenOptions}>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} />{" "}
              <span>01</span> <p>Staking Pool – Additional $LBM Reward </p>
            </div>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} />{" "}
              <span>02</span>{" "}
              <p>Reinvest in Fractionalized Rental Income Token (RIT)</p>
            </div>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} />{" "}
              <span>03</span> <p>Enjoy 20% Reduction in Buying Fees</p>
            </div>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} />{" "}
              <span>04</span>{" "}
              <p>Voting on Corporate Social Responsibility Projects</p>
            </div>
          </div>
          <div className={css.auditInfo}>
            <p>
              <span>Audit</span> and <span>KYC</span> powered by
            </p>
            <Image src={shield} alt="shield" width={124} height={31} />
          </div>
        </article>
        <TokenPurchaseSection />
      </section>
    </div>
  );
}
