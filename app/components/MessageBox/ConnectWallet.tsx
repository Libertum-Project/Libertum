import { useWeb3Modal } from "@web3modal/ethers/react";
import css from "./MessageBox.module.css";
import network from "./network.png";
import Image from "next/image";
import leftArrow from "../Navbar/WalletComponents/leftArrow.svg";
import wallet from "../Navbar/WalletComponents/wallet.svg";

const ConnectWallet = ({ setShowConnectWallet }: any) => {

  const { open } = useWeb3Modal();
  const handleConnectWallet = () => {
    open();
    setShowConnectWallet(false);
  };

  const handleContinue = (event: any) => {
    event.preventDefault();
    setShowConnectWallet(false);
  };

  const message =
  "Ready to buy $LBM? Connect your wallet to Binance Smart Chain."

  return (
    <div
      className={css.messageBoxContainer}
      onClick={(event) => {
        handleContinue(event);
      }}
    >
      <div className={css.messageBox}>
        <div className={css.header}>
          <Image className={css.networkImage} src={network} alt="network" width={48} height={48} />
          <h2>You are not connected</h2>
        </div>
        <div>
          <p>{message}</p>
        </div>
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
      </div>
    </div>
  );
};

export default ConnectWallet;
