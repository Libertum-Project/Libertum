'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/horizontal-logo.svg';
import { ConnectWalletButton } from '../WalletComponents/ConnectWalletButton';

import css from './DesktopNavbar.module.css';
import { LearnModal } from './modals/LearnModal';
import { DocsModal } from './modals/DocsModal';
import { MoreModal } from './modals/MoreModal';
import { CommunityModal } from './modals/CommunityModal';

export const DesktopNavbar = () => {
  const [isLearnModalVisible, setIsLearnModalVisible] = useState(false);
  const [isDocsModalVisible, setIsDocsModalVisible] = useState(false);
  const [isMoreModalVisible, setIsMoreModalVisible] = useState(false);
  const [isCommunityModalVisible, setIsCommunityModalVisible] = useState(false);

  const handleShowLearnModal = () => {
    setIsLearnModalVisible(true);
    setIsDocsModalVisible(false);
    setIsMoreModalVisible(false);
    setIsCommunityModalVisible(false);
  };

  const handleShowDocsModal = () => {
    setIsDocsModalVisible(true);
    setIsLearnModalVisible(false);
    setIsMoreModalVisible(false);
    setIsCommunityModalVisible(false);
  };

  const handleShowMoreModal = () => {
    setIsMoreModalVisible(true);
    setIsLearnModalVisible(false);
    setIsDocsModalVisible(false);
    setIsCommunityModalVisible(false);
  };
  const handleShowCommunityModal = () => {
    setIsCommunityModalVisible(true);
    setIsLearnModalVisible(false);
    setIsDocsModalVisible(false);
    setIsMoreModalVisible(false);
  };

  const handleHideModals = () => {
    setIsDocsModalVisible(false);
    setIsLearnModalVisible(false);
    setIsMoreModalVisible(false);
    setIsCommunityModalVisible(false);
  };

  return (
    <>
      <nav className={css.desktopNavbar}>
        <Link href={'./'} onMouseEnter={handleHideModals} onTouchStart={handleHideModals}>
          <Image src={logo} alt="libertum logo" width="140.727" height="18" />
        </Link>

        <div className={css.links}>
          <Link href="./get" onMouseEnter={handleHideModals} onTouchStart={handleHideModals}>
            Get LBM
          </Link>
          <a
            href="https://www.marketplace.libertum.io/login"
            onMouseEnter={handleHideModals}
            onTouchStart={handleHideModals}
          >
            Explore Properties
          </a>

          <a href="#" onMouseEnter={handleShowLearnModal} onTouchStart={handleShowLearnModal}>
            Learn ↓
          </a>
          <a href="#" onMouseEnter={handleShowCommunityModal} onTouchStart={handleShowLearnModal}>
            Community ↓
          </a>

          <a href="#" onMouseEnter={handleShowDocsModal} onTouchStart={handleShowDocsModal}>
            Docs ↓
          </a>

          <a href="#" onMouseEnter={handleShowMoreModal} onTouchStart={handleShowMoreModal}>
            More ↓
          </a>

          <div onMouseEnter={handleHideModals} onTouchStart={handleHideModals}>
            <ConnectWalletButton />
          </div>
        </div>
      </nav>
      {isLearnModalVisible && <LearnModal handleHideModals={handleHideModals} />}

      {isDocsModalVisible && <DocsModal handleHideModals={handleHideModals} />}

      {isMoreModalVisible && <MoreModal handleHideModals={handleHideModals} />}

      {isCommunityModalVisible && <CommunityModal handleHideModals={handleHideModals} />}
    </>
  );
};
