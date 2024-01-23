"use client";
import { type ReactElement } from "react";
import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import css from "./TokenPurchaseSection.module.css";
import info from "./info.svg";
import libertum from "./libertum_input.svg";
import usd from "./USD_input.svg";

export function TokenPurchaseSection(): ReactElement {
  const LBM_PRICE: number = 0.066;

  const [lbmAmount, setLbmAmount] = useState<number>(758.6);
  const [usdAmount, setUsdAmount] = useState<number>(50);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

  const handleLbmInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputLbmValue = parseFloat(event.target.value) || 0;
    setLbmAmount(inputLbmValue);
    setUsdAmount(parseFloat((inputLbmValue * LBM_PRICE).toFixed(3)));
    setTooltipVisible(false);
  };

  const handleUsdInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputUsdValue = parseFloat(event.target.value) || 0;
    setUsdAmount(inputUsdValue);
    setLbmAmount(parseFloat((inputUsdValue / LBM_PRICE).toFixed(1)));
    setTooltipVisible(false);
  };

  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputUsdValue = parseFloat(event.target.value) || 0;
    setUsdAmount(inputUsdValue);
    setLbmAmount(parseFloat((inputUsdValue / LBM_PRICE).toFixed(1)));
    setTooltipVisible(false);
  };

  useEffect(() => {
    setTooltipVisible(usdAmount < 50);

    if (usdAmount <= 0) {
      setUsdAmount(50);
      setLbmAmount(parseFloat((50 / LBM_PRICE).toFixed(1)));
    }
    if (usdAmount > 10000) {
      setUsdAmount(10000);
      setLbmAmount(parseFloat((10000 / LBM_PRICE).toFixed(1)));
    }
  }, [usdAmount]);

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
          />
          <div>
            <Image src={usd} alt="USD" width={25} height={25} />
            <p>$ USD</p>
          </div>
        </div>
      </div>
      <div className={css.purchaseButtons}>
        <button
          disabled={usdAmount < 50}
          title={
            tooltipVisible
              ? "To participate, the USDC Amount must be at least $50. Please enter a valid amount."
              : undefined
          }
        >
          Buy Now
        </button>
        <a href="#">Buy USDC.e</a>
      </div>
    </article>
  );
}
