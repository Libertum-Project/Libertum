"use client";
import { type ReactElement } from "react";
import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./TokenPurchaseSection.module.css";
import info from "@/public/assets/info.svg";
import libertum from "@/public/assets/libertum_input.svg";
import usd from "@/public/assets/USDT.png";
//import { BuyNowModal } from "./BuyNowModal";
import { BuyWithCryptoButton } from "./BuyWithCryptoButton";

export function TokenPurchaseSection(): ReactElement {
  /*
  const [showBuyModal, setShowBuyModal] = useState(false);

  const handleBuyModal = () => {
    setShowBuyModal(!showBuyModal);
  }
 */
  const LBM_PRICE: number = 0.066;
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
    <article className={css.tokenPurchaseSection} id="tokenPurchaseSection">
      <div className={css.purchaseInfo}>
        <div>
          <p className={css.tittle}>Upcoming Public Round 1</p>
          <span>MONDAY 19 FEB 2024</span>
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
          <Link href="#video" scroll className={css.moreInfoSection}>
            <Image src={info} alt="info" width={16} height={16} />
            <span>View instructions</span>
          </Link>
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
            id="lbmAmountInput"
            value={lbmAmount}
            onChange={handleLbmInputChange}
            onBlur={handleBlur}
          />
          <label htmlFor="lbmAmountInput">
            <Image src={libertum} alt="Libertum" width={25} height={25} />
            <p>Libertum (LBM)</p>
          </label>
        </div>
        <div className={css.inputContainer}>
          <input
            type="number"
            id="usdAmountInput"
            value={usdAmount}
            onChange={handleUsdInputChange}
            onBlur={handleBlur}
          />
          <label htmlFor="usdAmountInput">
            <Image src={usd} alt="USD" width={25} height={25} />
            <p>USDT</p>
          </label>
        </div>
      </div>
      <div className={css.purchaseButtons}>
        <BuyWithCryptoButton lbmAmount={lbmAmount} usdAmount={usdAmount} />

        {/*
        <button onClick={handleBuyModal}>Buy Now</button>
        {showBuyModal && <BuyNowModal handleBuyModal={handleBuyModal} lbmAmount={lbmAmount} usdAmount={usdAmount} />}
          */}
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0x55d398326f99059fF775485246999027B3197955"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy USDT
        </a>
      </div>
    </article>
  );
}
