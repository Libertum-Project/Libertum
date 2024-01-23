"use client";
import { type ReactElement } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./DesktopNavbar.module.css";
import logo from "@/public/horizontal-logo.svg";
import leftArrow from "../leftArrow.svg";
import wallet from "../wallet.svg";
import { LearnModal } from "./modals/LearnModal";
import { DocsModal } from "./modals/DocsModal";

export function DesktopNavbar(): ReactElement {
  const [isLearnModalVisible, setIsLearnModalVisible] = useState(false);
  const [isDocsModalVisible, setIsDocsModalVisible] = useState(false);

  const handleShowLearnModal = () => {
    setIsLearnModalVisible(true);
  };

  const handleHideLearnModal = () => {
    setIsLearnModalVisible(false);
  };

  const handleShowDocsModal = () => {
    setIsDocsModalVisible(true);
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
          <a href="#">Explore Properties</a>
          <a
            href="#"
            onMouseEnter={handleShowLearnModal}
            onTouchStart={handleShowLearnModal}
          >
            Learn ↓
          </a>
          <a href="#">Community</a>
          <a
            href="#"
            onMouseEnter={handleShowDocsModal}
            onTouchStart={handleShowDocsModal}
          >
            Docs ↓
          </a>
          <button>
            <Image alt="Wallet" src={wallet} width={16} height={16} />
            Connect Wallet{" "}
            <Image
              alt="left arrow"
              src={leftArrow}
              width={13.207}
              height={8.708}
            />
          </button>
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
