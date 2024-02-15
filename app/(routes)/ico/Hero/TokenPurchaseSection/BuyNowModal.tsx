import css from "./TokenPurchaseSection.module.css";
import { BuyWithCryptoButton } from "./BuyWithCryptoButton";
import { BuyWithFiatButton } from "./BuyWithFiatButton";

import { type ReactElement } from "react";

interface BuyNowModalProps {
  handleBuyModal: () => void;
  lbmAmount: number;
  usdAmount: number;
}

export function BuyNowModal({
  handleBuyModal,
  lbmAmount,
  usdAmount,
}: BuyNowModalProps): ReactElement {
  return (
    <div className={css.buyModalContainer}onClick={handleBuyModal}>
      <div className={css.buyModal}>
        <BuyWithCryptoButton lbmAmount={lbmAmount} usdAmount={usdAmount} />
        <BuyWithFiatButton lbmAmount={lbmAmount} usdAmount={usdAmount} />
      </div>
    </div>
  );
}
