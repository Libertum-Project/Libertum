'use client';
import { type ReactElement, useContext, useEffect, useState } from 'react';
/*
import Image from "next/image";
import coin from "@/public/assets/coin.svg";
import arrow from "@/public/assets/leftArrow.svg";
 */
import MessageBoxContext from '@/context/MessageBoxContext';
import ContractContext from '@/context/ContractContext';
import { buyTokens } from '@/utils/smartContracts/pLBM/buyTokens';

interface BuyButtonProps {
  lbmAmount: number;
  usdAmount: number;
}

export function BuyWithCryptoButton({
  lbmAmount,
  usdAmount,
}: BuyButtonProps): ReactElement {
  const {
    setShowPendingMessage,
    setShowFailMessage,
    setShowSuccessMessage,
    setIsLoading,
    setErrorMessage,
    setNetworkScanURL,
    setShowConnectToNetworkMessage,
    setShowNotEnoughUSDT,
    setShowConnectWallet,
  } = useContext(MessageBoxContext);

  const { setUpdateContractInfo } = useContext(ContractContext);
  const [buttonReason, setButtonReason] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <button>
      Buy Now
      {/*
      <div>
        <Image src={coin} alt="wallet" width={24} height={24} />
        <p>Buy With Crypto</p>
      </div>
      <Image src={arrow} alt="coin" width={24} height={24} />
        */}
    </button>
  );
}
