import { type ReactElement } from "react";
import Image from "next/image";
import css from "./Tokenomics.module.css";
import graph from "./graph.svg";

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
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill="#7F1FAF" />
              </svg>
              <p>Private Sale</p>
              <span>1%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.90918" r="8" fill="#65E422" />
              </svg>
              <p>Project Development</p>
              <span>1%</span>
            </div>
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
              <p>Advisors</p>
              <span>1%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.72705" r="8" fill="#86603B" />
              </svg>
              <p>Air Drop</p>
              <span>1%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.63623" r="8" fill="#FE8358" />
              </svg>
              <p>Marketing</p>
              <span>2%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.54541" r="8" fill="#46B8F7" />
              </svg>
              <p>Ambassador Program</p>
              <span>3%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.45459" r="8" fill="#FB8BFD" />
              </svg>
              <p>Staking Reward</p>
              <span>4%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.36377" r="8" fill="#B11E1F" />
              </svg>
              <p>Liquidity</p>
              <span>5%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.27246" r="8" fill="#26AE69" />
              </svg>
              <p>Public Presale</p>
              <span>15%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.18164" r="8" fill="#3D622A" />
              </svg>
              <p>WL Presale</p>
              <span>15%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <circle cx="8" cy="8.09082" r="8" fill="#21E6E9" />
              </svg>
              <p>Core Team</p>
              <span>25%</span>
            </div>
            <div className={css.tokenomicsItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill="#FEB767" />
              </svg>
              <p>Treasury Reserve</p>
              <span>27%</span>
            </div>
          </div>
          <Image src={graph} alt="graph" width={328} height={137} />
        </div>
      </div>
    </section>
  );
}
