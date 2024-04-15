import css from './TokenPurchaseSection.module.css';
import { BuyWithCryptoButton } from './BuyWithCryptoButton';

import logo from '@/public/assets/logo.svg';
import close from '@/public/assets/close.svg';
import Image from 'next/image';

import { type ReactElement } from 'react';

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
    <div className={css.buyModalContainer} onClick={handleBuyModal}>
      <div className={css.buyModal}>
        <Image
          className={css.closeImage}
          src={close}
          alt="close"
          width={24}
          height={24}
        />
        <div className={css.imageContainer}>
          <Image src={logo} alt="logo" width={60} height={60} />
        </div>
        <h3>Choose payment method</h3>
        <BuyWithCryptoButton lbmAmount={lbmAmount} usdAmount={usdAmount} />
      </div>
    </div>
  );
}
