import { type ReactElement } from 'react';
import Link from 'next/link';
import css from './MobileModal.module.css';
import ConnectWalletButton from '../../WalletComponents/ConnectWalletButton';

interface MobileModalProp {
  handleToggleOpenMenu: () => void;
}

export function MobileModal({
  handleToggleOpenMenu,
}: MobileModalProp): ReactElement {
  return (
    <div className={css.mobileModalContainer} onClick={handleToggleOpenMenu}>
      <div className={css.mobileModal}>
        <Link href="./get" className={css.border}>
          Get LBM
        </Link>
        <Link href="/comingsoon" className={css.border}>
          Explore Properties
        </Link>
        <Link href="https://blog.libertum.io/" className={css.border}>
          Blog
        </Link>
        <div className={css.border}>
          <p>Learn</p>
          <Link href="/learn-investors">→ Investors</Link>
          <Link href="/propertyowners">→ Property Owners</Link>
          <Link href="/rwa">→ RWA Tokenisation</Link>
        </div>
        <Link href="/community" className={css.border}>
          Community
        </Link>
        <div>
          <p>Docs</p>
          <Link href="/Libertum_Tokenomics.pdf" target="_blank">
            → Token Utility
          </Link>
          <Link href="/whitepaperLibertum.pdf" target="_blank">
            → White Paper
          </Link>
          <Link href="/Libertum_Pitch.pdf" target="_blank">
            → Pitch Deck
          </Link>
          <Link href="/rfp">→ RFP</Link>
        </div>
        <ConnectWalletButton />
      </div>
    </div>
  );
}
