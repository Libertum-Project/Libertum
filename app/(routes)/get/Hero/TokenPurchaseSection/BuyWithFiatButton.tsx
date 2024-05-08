'use client';
import { type ReactElement, useContext } from 'react';
import Image from 'next/image';
import { TransakConfig, Transak } from '@transak/transak-sdk';
import Pusher from 'pusher-js';

import credit from '@/public/assets/credit.svg';
import arrow from '@/public/assets/leftArrow.svg';
import { fetchEnvironmentVariables } from '@/utils/fetchEnvironmentVariables';
import MessageBoxContext from '@/context/MessageBoxContext';

const pusher = new Pusher('1d9ffac87de599c61283', { cluster: 'ap2' });

interface BuyButtonProps {
  lbmAmount: number;
  usdAmount: number;
}

export const BuyWithFiatButton = ({ lbmAmount, usdAmount }: BuyButtonProps) => {
  const { setShowConnectToNetworkMessage } = useContext(MessageBoxContext);

  let SMART_CONTRACT_ADDRESS: string;
  let SOURCE_TOKEN: string;

  let TRANSAK_API_KEY: string;

  const getEnvironmentVariables = async () => {
    const { pLBM_address, USDC_address, transakApiKey } = await fetchEnvironmentVariables();
    SMART_CONTRACT_ADDRESS = pLBM_address;
    SOURCE_TOKEN = USDC_address;
    TRANSAK_API_KEY = transakApiKey;
  };

  const getSupplyCalldata = (lbmAmount: number | null) => {
    return (
      <>
        <button>
          <div>
            <Image src={credit} alt="wallet" width={24} height={24} />
            <p>Buy With Credit Card</p>
          </div>
          <Image src={arrow} alt="wallet" width={24} height={24} />
        </button>
      </>
    );
  };
};
