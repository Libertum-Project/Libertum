'use client';

import React, { createContext, useState } from 'react';
import {
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  localWallet,
  metamaskWallet,
  walletConnect,
} from '@thirdweb-dev/react';
import { Ethereum, Base, Polygon, Optimism, Binance, Fantom, Arbitrum, Avalanche } from '@thirdweb-dev/chains';

const ThirdwebContext = createContext<any>(undefined);

export function ThirdwebContextProvider({ children }: { children: React.ReactNode }) {
  const clientId = process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID;
  // State to manage the active blockchain
  const [activeChain, setActiveChain] = useState(Base);

  // Function to update the active blockchain
  const selectBlockchain = (chainId: string | number) => {
    const chainMap: any = {
      1: Ethereum,
      10: Optimism,
      56: Binance,
      137: Polygon,
      250: Fantom,
      8453: Base,
      42161: Arbitrum,
      43114: Avalanche,
    };
    setActiveChain(chainMap[chainId] || Base);
  };
  return (
    <ThirdwebContext.Provider value={{ selectBlockchain }}>
      <ThirdwebProvider
        theme="light"
        activeChain={activeChain}
        clientId={clientId}
        supportedChains={[Ethereum, Base, Optimism, Binance, Polygon, Fantom, Arbitrum, Avalanche]}
        supportedWallets={[
          metamaskWallet({ recommended: true }),
          coinbaseWallet(),
          walletConnect(),
          localWallet(),
          embeddedWallet({
            auth: {
              options: ['email', 'google', 'apple', 'facebook'],
            },
          }),
        ]}
      >
        {children}
      </ThirdwebProvider>
    </ThirdwebContext.Provider>
  );
}

export const useBlockchainSelection = () => {
  const context = React.useContext(ThirdwebContext);
  if (!context) {
    throw new Error('useBlockchainSelection must be used within a ThirdwebContextProvider');
  }
  return context.selectBlockchain;
};
