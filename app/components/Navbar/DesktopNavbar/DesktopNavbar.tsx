"use client";
import { type ReactElement } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./DesktopNavbar.module.css";
import logo from "@/public/horizontal-logo.svg";
import { LearnModal } from "./modals/LearnModal";
import { DocsModal } from "./modals/DocsModal";
import { ConnectWalletButton } from "../WalletComponents/ConnectWalletButton";

export function DesktopNavbar(): ReactElement {
  const [isLearnModalVisible, setIsLearnModalVisible] = useState(false);
  const [isDocsModalVisible, setIsDocsModalVisible] = useState(false);

  const handleShowLearnModal = () => {
    setIsLearnModalVisible(true);
    setIsDocsModalVisible(false);
  };

  const handleHideLearnModal = () => {
    setIsLearnModalVisible(false);
  };

  const handleShowDocsModal = () => {
    setIsDocsModalVisible(true);
    setIsLearnModalVisible(false);
  };

  const handleHideDocsModal = () => {
    setIsDocsModalVisible(false);
  };

  return (
    <>
      <nav className={css.desktopNavbar}>
        <Link href={"./"}>
          <Image src={logo} alt="libertum logo" width="140.727" height="18" />
        </Link>

        <div className={css.links}>
          <Link href="./ico">Buy LBM</Link>
          <a href="/comingsoon">Explore Properties</a>
          <a
            href="/comingsoon"
            onMouseEnter={handleShowLearnModal}
            onTouchStart={handleShowLearnModal}
          >
            Learn ↓
          </a>
          <a href="/community">Community</a>
          <a
            href="/comingsoon"
            onMouseEnter={handleShowDocsModal}
            onTouchStart={handleShowDocsModal}
          >
            Docs ↓
          </a>
          <ConnectWalletButton />
        </div>
      </nav>
      {isLearnModalVisible && (
        <LearnModal handleHideModal={handleHideLearnModal} />
      )}

      {isDocsModalVisible && (
        <DocsModal handleHideDocsModal={handleHideDocsModal} />
      )}
    </>
  );
}
