"use client";
import { type ReactElement } from "react";
import { useState, useEffect, ChangeEvent } from "react";
import { BuyButton } from "./BuyButton";
import Image from "next/image";
import css from "./TokenPurchaseSection.module.css";
import info from "./info.svg";
import libertum from "./libertum_input.svg";
import usd from "./USDC.svg";

export function TokenPurchaseSection(): ReactElement {
  const LBM_PRICE: number = 0.06;
  const MIN_USD: number = 50;
  const MIN_LBM: number = parseFloat((MIN_USD / LBM_PRICE).toFixed(1));

  const [lbmAmount, setLbmAmount] = useState<number>(MIN_LBM);
  const [usdAmount, setUsdAmount] = useState<number>(MIN_USD);

  const handleLbmInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputLbmValue = parseFloat(event.target.value);
    setLbmAmount(inputLbmValue);
    setUsdAmount(parseFloat((inputLbmValue * LBM_PRICE).toFixed(3)));
  };

  const handleUsdInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputUsdValue = parseFloat(event.target.value);
    setUsdAmount(inputUsdValue);
    setLbmAmount(parseFloat((inputUsdValue / LBM_PRICE).toFixed(1)));
  };

  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputUsdValue = parseFloat(event.target.value) || 0;
    setUsdAmount(inputUsdValue);
    setLbmAmount(parseFloat((inputUsdValue / LBM_PRICE).toFixed(1)));
  };

  useEffect(() => {
    if (usdAmount <= 0) {
      setUsdAmount(50);
      setLbmAmount(parseFloat((50 / LBM_PRICE).toFixed(1)));
    }
    if (usdAmount > 10000) {
      setUsdAmount(10000);
      setLbmAmount(parseFloat((10000 / LBM_PRICE).toFixed(1)));
    }
  }, [usdAmount]);

  const handleBlur = () => {
    if (isNaN(usdAmount)) {
      setUsdAmount(50);
      setLbmAmount(parseFloat((50 / LBM_PRICE).toFixed(1)));
    }
  };

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
              1 Libertum (LBM) <b>= {LBM_PRICE}</b> <span>USD</span>
            </p>
          </div>
          <div className={css.moreInfoSection}>
            <Image src={info} alt="info" width={16} height={16} />
            <span>View instructions</span>
          </div>
        </div>
        <input
          className={css.inputRange}
          type="range"
          name=""
          id=""
          min={50}
          max={10000}
          value={usdAmount}
          onChange={handleRangeChange}
        />
      </div>
      <div className={css.inputSection}>
        <div className={css.inputContainer}>
          <input
            type="number"
            value={lbmAmount}
            onChange={handleLbmInputChange}
            onBlur={handleBlur}
          />
          <div>
            <Image src={libertum} alt="Libertum" width={25} height={25} />
            <p>Libertum (LBM)</p>
          </div>
        </div>
        <div className={css.inputContainer}>
          <input
            type="number"
            value={usdAmount}
            onChange={handleUsdInputChange}
            onBlur={handleBlur}
          />
          <div>
            <Image src={usd} alt="USD" width={25} height={25} />
            <p>USDC.e</p>
          </div>
        </div>
      </div>
      <div className={css.purchaseButtons}>
        <BuyButton  lbmAmount={lbmAmount} usdAmount={usdAmount}/>

        <a href="#">Buy USDC.e</a>
      </div>
    </article>
  );
}
