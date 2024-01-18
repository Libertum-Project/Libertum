import { type ReactElement } from "react";
import Image from "next/image";
import css from "./Roadmap.module.css";
import leftArrow from "@/public/assets/vector.svg";

export function Roadmap(): ReactElement {
  return (
    <section className={css.roadmapContainer}>
      <div className={css.roadmap}>
        <h3>Roadmap</h3>
        <div className={css.cardContainer}>
          <div className={css.card}>
            <div className={css.header}>
              <p>Phase 01</p>
              <div className={css.arrowContainer}>
                <Image
                  src={leftArrow}
                  alt="left arrow"
                  width={20}
                  height={13}
                />
              </div>
            </div>
            <div className={css.content}>
              <p>
                Project Concept
                <br />
                UK Company Registration
                <br />
                Tokenomics
                <br />
                MVP 1.0
                <br />
                Smart Contract Development
                <br />
                Private Sale
                <br />
                Community Building
                <br />
              </p>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.header}>
              <p>Phase 02</p>
              <div className={css.arrowContainer}>
                <Image
                  src={leftArrow}
                  alt="left arrow"
                  width={20}
                  height={13}
                />
              </div>
            </div>
            <div className={css.content}>
              <p>
                Licencing
                <br />
                Smart Contract Audit
                <br />
                Geo Growth
                <br />
                Commercialize Marketplace
                <br />
                Tokenise First Real Estate
                <br />
                Community Events Launch
                <br />
                Giveaway & Airdrops Launch
                <br />
              </p>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.header}>
              <p>Phase 03</p>
              <div className={css.arrowContainer}>
                <Image
                  src={leftArrow}
                  alt="left arrow"
                  width={20}
                  height={13}
                />
              </div>
            </div>
            <div className={css.content}>
              <p>
                Whitelist presale
                <br />
                Public PreSale
                <br />
                LBM Launch
                <br />
                DEX Listing
                <br />
                Token Staking Pool Launch
                <br />
              </p>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.header}>
              <p>Phase 04</p>
              <div className={css.arrowContainer}>
                <Image
                  src={leftArrow}
                  alt="left arrow"
                  width={20}
                  height={13}
                />
              </div>
            </div>
            <div className={css.content}>
              <p>
                Acquisition of the first Real Estate
                <br />
                Consider CEX Listing
                <br />
                Targeted to tokenise 20 Real Estates
                <br />
                Expansion & Geo Growth
                <br />
                Feasibility of Valuator AI
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
