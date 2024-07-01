'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/horizontal-logo.svg';

import css from './MobileNavbar.module.css';
import menuBtn from './menu.svg';
import close from './close.svg';
import MobileModal from './modal/MobileModal';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      if (isMenuOpen) {
        bodyElement.style.overflow = 'auto';
      } else {
        const shouldAllowScroll = window.innerHeight < 700;
        bodyElement.style.overflow = shouldAllowScroll ? 'auto' : 'hidden';
      }
    }
  };

  return (
    <>
      <nav className={css.mobileNavBarContainer}>
        <div className={css.mobileNavBar}>
          <Link href={'./'} onClick={isMenuOpen ? handleToggleOpenMenu : undefined}>
            <Image src={logo} alt="libertum logo" width="140.727" height="18" />
          </Link>
          <button className={css.menuBtn} onClick={handleToggleOpenMenu}>
            <Image
              src={isMenuOpen ? close : menuBtn}
              alt={isMenuOpen ? 'close' : 'Menu'}
              width={isMenuOpen ? 24 : undefined}
              height={isMenuOpen ? 24 : undefined}
            />
          </button>
        </div>
      </nav>
      {isMenuOpen && <MobileModal handleToggleOpenMenu={handleToggleOpenMenu} />}
    </>
  );
};

export default MobileNavbar;
