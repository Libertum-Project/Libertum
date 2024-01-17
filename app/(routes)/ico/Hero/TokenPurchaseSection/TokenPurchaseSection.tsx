import { type ReactElement } from "react";
import Image from "next/image";
import css from "./TokenPurchaseSection.module.css";
import info from "./info.svg";
import libertum from "./libertum_input.svg";
import usd from "./USD_input.svg";

export function TokenPurchaseSection(): ReactElement {
  return (
    <article className={css.tokenPurchaseSection}>
      <div className={css.purchaseInfo}>
        <div>
          <p className={css.tittle}>Upcoming Public Round 1</p>
          <span>MIDNIGHT 19 FEB 2024</span>
        </div>
        <p>
          We do the math in real-time, simply input your amount in your desired
          rate and we will convert it to LBM.
        </p>
      </div>
      <div className={css.conversionSection}>
        <div className={css.conversionInfoContainer}>
          <div className={css.conversionInfo}>
            <p>
              1 Libertum (LBM) <b>= 0.06</b> <span>USD</span>
            </p>
          </div>
          <div className={css.moreInfoSection}>
            <Image src={info} alt="info" width={16} height={16} />
            <span>View instructions</span>
          </div>
        </div>
        <input className={css.inputRange} type="range" name="" id="" />
      </div>
      <div className={css.inputSection}>
        <div className={css.inputContainer}>
          <input type="number" placeholder="833" />
          <div>
            <Image src={libertum} alt="Libertum" width={25} height={25} />
            <p>Libertum (LBM)</p>
          </div>
        </div>
        <div className={css.inputContainer}>
          <input type="number" placeholder="50"/>
          <div>
            <Image src={usd} alt="USD" width={25} height={25} />
            <p>$ USD</p>
          </div>
        </div>
      </div>
      <div className={css.purchaseButtons}>
        <button>Buy Now</button>
        <a href="#">Buy USDC.e</a>
      </div>
    </article>
  );
}
