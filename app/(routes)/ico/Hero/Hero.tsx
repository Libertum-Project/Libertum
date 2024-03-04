'use client'
import { type ReactElement,  useState, useEffect } from "react";
import { TokenPurchaseSection } from "./TokenPurchaseSection/TokenPurchaseSection";
import Image from "next/image";
import css from "./Hero.module.css";
import checkbox from "./checkbox.svg";
import shield from "./shield.png";
import Link from "next/link";

export function Hero(): ReactElement {

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 950px)");
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
      setIsMobile(mediaQuery.matches);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className={css.heroContainer}>
      {isMobile ? 
        <div className={css.backgroundNoVideo}></div> 
        : 
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-1.mp4" type="video/mp4" />
        </video> 
      }

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
              <p>Staking Pool – Additional $LBM Reward </p>
            </div>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} />{" "}
              <p>Reinvest in Fractionalized Rental Income Token (RIT)</p>
            </div>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} />{" "}
              <p>Enjoy 20% Reduction in Buying Fees</p>
            </div>
            <div>
              <Image src={checkbox} alt="checkbox" width={24} height={24} />{" "}
              <p>Voting on Corporate Social Responsibility Projects</p>
            </div>
          </div>

          <div className={css.frameButton}>
              <p>
              Register Now!
              </p>
          
          <Link href="/subscribe" className={css.button1}>
          <p>White List</p>           
            {/* <Image
              alt="left arrow"
              src="/assets/leftArrow.svg"
              width={16.207}
              height={10.708}
            /> */}
          </Link>
          </div>
          

          <div className={css.auditInfo}>
            <p>            
              <span>
              <Link href="https://github.com/solidproof/projects/tree/main/2024/Libertum">
                Audit
              </Link>
              </span> 
              and 
              <span>
              <Link href="https://github.com/solidproof/projects/tree/main/2023/Libertum">
                KYC
              </Link>
              </span> 
              powered by
            </p>
            <Image src={shield} alt="shield" width={124} height={31} />

          </div>
        </article>
        <TokenPurchaseSection />
      </section>
    </div>
  );
}
