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

const polygon = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com'
}

const polygonMumbai = {
  chainId: 80001,
  name: 'Mumbai',
  currency: 'MATIC',
  explorerUrl: 'https://mumbai.polygonscan.com',
  rpcUrl: 'https://matic-mumbai.chainstacklabs.com'
}

// 3. Create modal
const metadata = {
  name: 'Libertum',
  description: 'Fractionalized rental income',
  url: 'https://libertum.io',
  icons: []
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, polygon, polygonMumbai],
  projectId
});

export function Web3ModalProvider({ children }) {
  return children;
};