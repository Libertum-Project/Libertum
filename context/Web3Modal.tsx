"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const polygon = {
  chainId: 137,
  name: "Polygon",
  currency: "MATIC",
  explorerUrl: "https://polygonscan.com",
  rpcUrl: "https://polygon-rpc.com",
};

const ethereum = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const metadata = {
  name: "Libertum",
  description: "Libertum",
  url: "https://libertum.io",
  icons: [""],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [polygon, ethereum],
  defaultChain: polygon,
  projectId,
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children;
}
