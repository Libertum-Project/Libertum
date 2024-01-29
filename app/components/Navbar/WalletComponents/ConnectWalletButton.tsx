"use client";
import { useContext, type ReactElement } from "react";
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
import ContractContext from "@/context/ContractContext";

export function ConnectWalletButton({
  handleToggleOpenMenu,
}: any): ReactElement {
  const { open, close } = useWeb3Modal();
  const { isConnected, address, chainId } = useWeb3ModalAccount();
  const { open: openState, selectedNetworkId } = useWeb3ModalState();
  const { switchToPolygonMainnet } = useContext(ContractContext);

  const handleCloseModal = () => {
    handleToggleOpenMenu && handleToggleOpenMenu();
  };

  const handleConnectWallet = async () => {
    if (isConnected && chainId !== 137) {
      close();
      switchToPolygonMainnet();
     
        if (!openState) {
        await open({ view: "Networks" });
        }
    } else {
      open();
    }
  };

  useEffect(() => {
    if (isConnected) {
      switchToPolygonMainnet();
    }
  }, [isConnected, address, selectedNetworkId]);

  return (
    <div
      className={css.connectWalletButtonContainer}
      suppressHydrationWarning
      onClick={handleCloseModal}
    >
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
        <div className={css.w3mBtn}>
          <w3m-account-button balance="hide" />
        </div>
      )}
    </div>
  );
}
