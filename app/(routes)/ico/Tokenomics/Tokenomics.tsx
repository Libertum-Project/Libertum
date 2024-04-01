import { type ReactElement } from 'react';
import Image from 'next/image';
import css from './Tokenomics.module.css';
import graph from './graph.svg';

export function Tokenomics(): ReactElement {
  return (
    <section className={css.tokenomicsContainer}>
      <div className={css.tokenomics}>
        <h3>Tokenomics</h3>
        <p className={css.bodyText}>
          We believe in a conservative approach to ensure price stability. Only
          a small - but significant - percentage of $LBM will be unlocked at the
          token generation event. This means that $LBM will enjoy stability and
          reputational excellence.
        </p>
        <div className={css.graphContainer}>
          <div className={css.graphDescription}>
            {/* TOKEN SALE - Pink */}
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.45459" r="8" fill="#CB61C7" />
              </svg>
              <p>Token Sale</p>
              <span>19%</span>
            </div>

            {/* TEAM - Orange */}
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.63623" r="8" fill="#FFA143" />
              </svg>
              <p>Team</p>
              <span>25%</span>
            </div>

            {/* ECOSYSTEM / PARTNERS - Blue */}
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.81836" r="8" fill="#2840EA" />
              </svg>
              <p>Ecosystem & Partners</p>
              <span>13%</span>
            </div>

            {/* STAKING REWARD 4% - Red */}
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.81836" r="8" fill="#FF5252" />
              </svg>
              <p>Staking Reward</p>
              <span>4%</span>
            </div>

            {/* TREASURY RESERVE / 35% - Teal (Verde azul) */}
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.81836" r="8" fill="#00B3B5" />
              </svg>
              <p>Treasury Reserve</p>
              <span>35%</span>
            </div>

            {/* MARKETING & ADVISORY 4% - Apple Green */}
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.81836" r="8" fill="#87E12C" />
              </svg>
              <p>Marketing & Advisory</p>
              <span>4%</span>
            </div>

          </div>          
          <Image src={graph} alt="graph" width={328} height={137} />
        </div>
      </div>
    </section>
  );
}
