'use client';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';

const BSC = {
  chainId: 56,
  name: 'BNB Smart Chain Mainnet',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com',
  rpcUrl: 'https://bsc-dataseed1.binance.org/',
};

const ethereum = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com',
};

const metadata = {
  name: 'Libertum',
  description: 'Libertum',
  url: 'https://libertum.io',
  icons: [''],
};

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children;
}
