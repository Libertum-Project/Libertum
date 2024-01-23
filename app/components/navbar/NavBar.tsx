import { type ReactElement } from "react";
import css from "./NavBar.module.css";
import Image from "next/image";
import logo from "@/public/horizontal-logo.svg";
import menuBtn from "./menu.svg";
import leftArrow from "./leftArrow.svg";
import wallet from "./wallet.svg";
import Link from "next/link";

export function NavBar(): ReactElement {
  return (
    <nav className={css.navBar}>
      <Link href={"./"}>
        <Image src={logo} alt="libertum logo" width="140.727" height="18" />
      </Link>
      <button className={css.menuBtn}>
        <Image src={menuBtn} alt="Menu" />
      </button>

      <div className={css.desktopNavBar}>
        <Link href="./ico">Buy LBM</Link>
        <a href="#">Explore Properties</a>
        <a href="#">Learn</a>
        <a href="/community">Community</a>
        <a href="#">Docs</a>
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
  );
}
