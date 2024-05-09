import Image from 'next/image';

import leftArrow from '../Navbar/WalletComponents/leftArrow.svg';
import wallet from '../Navbar/WalletComponents/wallet.svg';

import network from './network.png';
import css from './MessageBox.module.css';

const ConnectWallet = ({ setShowConnectWallet }: any) => {
  return (
    <div className={css.messageBoxContainer}>
      <div className={css.messageBox}>
        <div className={css.header}>
          <Image className={css.networkImage} src={network} alt="network" width={48} height={48} />
          <h2>You are not connected</h2>
        </div>

        <button className={css.connectWalletButton}>
          <div>
            <Image alt="Wallet" src={wallet} width={16} height={16} />
            <p>Connect Wallet</p>
          </div>
          <Image alt="left arrow" src={leftArrow} width={13.207} height={8.708} />
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
