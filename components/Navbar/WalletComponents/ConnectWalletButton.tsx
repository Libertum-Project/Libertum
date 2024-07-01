import Link from 'next/link';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';

import { ServerImage } from '../../ServerImage';

import css from './WalletComponents.module.css';
import leftArrow from './leftArrow.svg';

const ConnectWalletButton = () => {
  const address = useAddress();

  return (
    <div>
      {address ? (
        <ConnectWallet
          className={css.connectWalletButton}
          detailsBtn={() => {
            return (
              <button
                className="flex justify-between items-center px-4 py-2 bg-libertumGreen bg-opacity-30 rounded-[5px] border border-libertumGreen backdrop-blur-[10px] text-white gap-3 override-link text-sm"
                style={{ border: '1px solid rgb(0, 179, 181)' }}
              >
                <ServerImage alt="Wallet" src="/assets/wallet.svg" width={10} height={10} />
                {`${address.substring(0, 4)}....${address.substring(address.length - 4)}`}
                <span>
                  <ServerImage alt="left arrow" src={leftArrow} width={9.207} height={4.708} />
                </span>
              </button>
            );
          }}
        />
      ) : (
        <Link
          href="/login"
          className="flex justify-between items-center px-4 py-2 bg-libertumGreen bg-opacity-30 rounded-[5px] border border-libertumGreen backdrop-blur-[10px] text-white gap-3 override-link"
        >
          <ServerImage
            alt="Wallet"
            src="/assets/wallet.svg"
            width={10}
            height={10}
            style={{
              marginLeft: 0,
            }}
          />
          {address ? 'Wallet' : 'Connect Wallet'}
          <ServerImage
            alt="left arrow"
            src={leftArrow}
            width={9.207}
            height={4.708}
            style={{
              marginLeft: 0,
            }}
          />
        </Link>
      )}
    </div>
  );
};

export default ConnectWalletButton;