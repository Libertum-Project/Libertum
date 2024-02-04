"use client";
import { useContext, useState, useEffect, type ReactElement } from "react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import Image from "next/image";
import leftArrow from "./leftArrow.svg";
import wallet from "./wallet.svg";
import css from "./WalletComponents.module.css";
import ContractContext from "@/context/ContractContext";

const isTest: boolean = process.env.NEXT_PUBLIC_IS_TEST === "true" || false;
let correctChainId: number;

if (isTest) {
  correctChainId = 80001;
} else {
  correctChainId = 137;
}

export function ConnectWalletButton({}: any): ReactElement {
  const [isUserConnected, setIsUserConnected] = useState(false);
  const { open } = useWeb3Modal();
  const { isConnected, chainId } = useWeb3ModalAccount();
  const { switchToPolygonMainnet, switchToPolygonTestnet } =
    useContext(ContractContext);

  useEffect(() => {
    setIsUserConnected(isConnected);
  }, [isConnected]);

  const handleConnectWallet = () => {
    open();
  };

  if (isConnected && chainId !== correctChainId) {
    if (isTest) {
      switchToPolygonTestnet();
    } else {
      switchToPolygonMainnet();
    }
  }

  return (
    <div className={css.connectWalletButtonContainer}>
      {!isUserConnected ? (
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
        <div className={css.w3mBtn}>
          <w3m-account-button balance="hide" />
          <w3m-network-button />
        </div>
      )}
    </div>
  );
}
