import { type ReactElement } from "react";
import Link from "next/link";
import css from "./MobileModal.module.css";
import { ConnectWalletButton } from "../../WalletComponents/ConnectWalletButton";

interface MobileModalProp {
  handleToggleOpenMenu: () => void;
}

export function MobileModal({
  handleToggleOpenMenu,
}: MobileModalProp): ReactElement {
  return (
    <div className={css.mobileModalContainer}>
      <div className={css.mobileModal}>
        <Link href="./ico" className={css.border}>
          Buy LBM
        </Link>
        <Link href="/comingsoon" className={css.border}>
          Explore Properties
        </Link>
        <div className={css.border}>
          <p>Learn</p>
          <Link href="/comingsoon">→ Investors</Link>
          <Link href="/comingsoon">→ Property Owners</Link>
          <Link href="/comingsoon">→ RWA Tokenisation</Link>
        </div>
        <Link href="/community" className={css.border}>
          Community
        </Link>
        <div>
          <p>Docs</p>
          <Link href="/comingsoon">→ Token Utility</Link>
          <Link href="/comingsoon">→ White Paper</Link>
          <Link href="/comingsoon">→ Pitch Deck</Link>
        </div>
        <ConnectWalletButton handleToggleOpenMenu={handleToggleOpenMenu} />
      </div>
    </div>
  );
}
