"use client";
import { type ReactElement } from "react";
import { useEffect } from "react";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalState,
} from "@web3modal/ethers/react";
import Image from "next/image";
import leftArrow from "./leftArrow.svg";
import wallet from "./wallet.svg";
import css from "./WalletComponents.module.css";

export function ConnectWalletButton({
  handleToggleOpenMenu,
}: any): ReactElement {
  const { open, close } = useWeb3Modal();
  const { isConnected, address, chainId } = useWeb3ModalAccount();
  const { selectedNetworkId } = useWeb3ModalState();

  const handleConnectWallet = () => {
    handleToggleOpenMenu && handleToggleOpenMenu();
    if (isConnected && chainId !== 137) {
      close();
      switchToPolygonMainnet();
    } else {
      open();
    }
  };

  useEffect(() => {
    if (isConnected) {
      switchToPolygonMainnet();
    } else {
    }
  }, [isConnected, address, selectedNetworkId]);

  function isEthereumWithRequest(obj: any): obj is {
    request: (args: { method: string; params?: any[] }) => Promise<any>;
  } {
    return obj && typeof obj.request === "function";
  }

  const switchToPolygonMainnet = async () => {
    const polygonMainnetData = {
      chainId: "0x89", // 137
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    };

    if (isEthereumWithRequest(window.ethereum)) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: polygonMainnetData.chainId }],
        });
      } catch (error) {
        if ((error as any).code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [polygonMainnetData],
            });
          } catch (addError) {
            console.error("Error adding Polygon Mainnet:", addError);
          }
        } else {
          console.error("Error switching to Polygon Mainnet:", error);
        }
      }
    }
  };

  //<w3m-account-button />

  if (isConnected && chainId !== 137) {
    switchToPolygonMainnet();
  }

  return (
    <div className={css.connectWalletButtonContainer} suppressHydrationWarning>
      {!isConnected || (isConnected && chainId !== 137) ? (
        <button
          className={css.connectWalletButton}
          onClick={handleConnectWallet}
        >
          <div>
            <Image alt="Wallet" src={wallet} width={16} height={16} />
            <p>Connect Wallet</p>
          </div>
          <Image
            alt="left arrow"
            src={leftArrow}
            width={13.207}
            height={8.708}
          />
        </button>
      ) : (
        <w3m-account-button balance="hide" />
      )}
    </div>
  );
}
