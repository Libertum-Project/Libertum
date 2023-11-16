"use client";

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';

// 1. Get projectId
const projectId = 'f97954f064b9d40ed1fe9c631eae642b';

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
};

// 3. Create modal
const metadata = {
  name: 'Libertum',
  description: 'Fractionalized rental income',
  url: 'https://libertum.io',
  icons: []
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
});

export function Web3ModalProvider({ children }) {
  return children;
};