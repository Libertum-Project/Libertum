import { type ReactElement } from "react";
import Link from "next/link";
import css from "./MobileModal.module.css";
import { ConnectWalletButton } from "../../WalletComponents/ConnectWalletButton";

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
        <ConnectWalletButton />
      </div>
    </div>
  );
}
