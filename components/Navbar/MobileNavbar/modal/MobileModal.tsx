import Link from 'next/link';

import ConnectWalletButton from '../../WalletComponents/ConnectWalletButton';

import css from './MobileModal.module.css';

interface MobileModalProp {
  handleToggleOpenMenu: () => void;
}

const MobileModal = ({ handleToggleOpenMenu }: MobileModalProp) => {
  return (
    <div className={css.mobileModalContainer} onClick={handleToggleOpenMenu}>
      <div className={css.mobileModal}>
        <Link href="./get" className={css.border}>
          Get LBM
        </Link>
        <Link href="https://www.marketplace.libertum.io/login" className={css.border}>
          Explore Properties
        </Link>
        <div className={css.border}>
          <p>Learn</p>
          <Link href="/learn-investors">→ Investors</Link>
          <Link href="/propertyowners">→ Property Owners</Link>
          <Link href="/rwa">→ RWA Tokenisation</Link>
        </div>
        <div>
          <p>Docs</p>
          <Link href="/Libertum_Pitch.pdf" target="_blank">
            → Token Utility
          </Link>
          <Link href="/whitepaperLibertum.pdf" target="_blank">
            → White Paper
          </Link>
          <Link href="/Libertum_Pitch.pdf" target="_blank">
            → Pitch Deck
          </Link>
          <Link href="/rfp">→ RFP</Link>
          <Link href="https://blog.libertum.io/">→Blog</Link>
        </div>
        <div>
          <p>Community</p>
          <Link href="/community" target="_blank">
            → Socials
          </Link>
          <Link href="/ambassadors" target="_blank">
            → Ambassadors
          </Link>
        </div>

        <div>
          <p>More</p>
          <Link href="/roadmap" target="_blank">
            → Roadmap
          </Link>
          <Link href="/team" target="_blank">
            → Libertum Team
          </Link>
          <Link href="/ecosystem" target="_blank">
            → Ecosystem
          </Link>
        </div>

        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default MobileModal;
