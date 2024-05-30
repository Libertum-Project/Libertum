'use client';

import React, { createContext, useState, ReactNode, useContext, ReactElement, FC } from 'react';
import {
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  localWallet,
  metamaskWallet,
  walletConnect,
} from '@thirdweb-dev/react';
import { Ethereum, Base, Polygon, Optimism, Binance, Fantom, Arbitrum, Avalanche } from '@thirdweb-dev/chains';

type ThirdwebContextType = {
  selectBlockchain: (chainId: string | number) => void;
};

const ThirdwebContext = createContext<ThirdwebContextType | undefined>(undefined);

interface ThirdwebContextProviderProps {
  children: ReactNode;
}

export const ThirdwebContextProvider: FC<ThirdwebContextProviderProps> = ({ children }): ReactElement => {
  const clientId = process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID;
  // State to manage the active blockchain
  const [activeChain, setActiveChain] = useState(Base);

  // Function to update the active blockchain
  const selectBlockchain = (chainId: string | number) => {
    const chainMap: { [key: string]: any } = {
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
};

export const useBlockchainSelection = (): ((chainId: string | number) => void) => {
  const context = useContext(ThirdwebContext);
  if (!context) {
    throw new Error('useBlockchainSelection must be used within a ThirdwebContextProvider');
  }
  return context.selectBlockchain;
};
