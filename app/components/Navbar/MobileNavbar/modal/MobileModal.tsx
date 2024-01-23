import { type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./MobileModal.module.css";
import leftArrow from "../../leftArrow.svg";
import wallet from "../../wallet.svg";

export function MobileModal(): ReactElement {
  return (
    <div className={css.mobileModalContainer}>
      <div className={css.mobileModal}>
        <Link href="./ico" className={css.border}>
          Buy LBM
        </Link>
        <Link href="#" className={css.border}>
          Explore Properties
        </Link>
        <div className={css.border}>
          <p>Learn</p>
          <Link href="#">→ Investors</Link>
          <Link href="#">→ Property Owners</Link>
          <Link href="#">→ RWA Tokenisation</Link>
        </div>
        <Link href="/community" className={css.border}>
          Community
        </Link>
        <div>
          <p>Docs</p>
          <Link href="#">→ Token Utility</Link>
          <Link href="#">→ White Paper</Link>
          <Link href="#">→ Pitch Deck</Link>
        </div>
        <button>
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
}
