"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const mainnet = {
  chainId: 137,
  name: "Polygon",
  currency: "MATIC",
  explorerUrl: "https://polygonscan.com",
  rpcUrl: "https://polygon-rpc.com",
};

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children;
}
