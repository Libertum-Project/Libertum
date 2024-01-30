"use client";
import { useContext, type ReactElement } from "react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import Image from "next/image";
import leftArrow from "./leftArrow.svg";
import wallet from "./wallet.svg";
import css from "./WalletComponents.module.css";
import ContractContext from "@/context/ContractContext";

export function ConnectWalletButton({
  handleToggleOpenMenu,
}: any): ReactElement {
  const { open } = useWeb3Modal();
  const { isConnected, chainId } = useWeb3ModalAccount();
  const { switchToPolygonMainnet } = useContext(ContractContext);

  const handleCloseModal = () => {
    handleToggleOpenMenu && handleToggleOpenMenu();
  };

  const handleConnectWallet = () => {
    open();
  };

  if (isConnected && chainId !== 137) {
    switchToPolygonMainnet();
  }

  return (
    <div
      className={css.connectWalletButtonContainer}
      suppressHydrationWarning
      onClick={handleCloseModal}
    >
      {!isConnected ? (
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
