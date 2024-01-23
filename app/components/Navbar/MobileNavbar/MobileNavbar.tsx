import { type ReactElement } from "react";
import css from "./MobileNavbar.module.css";
import Image from "next/image";
import logo from "@/public/horizontal-logo.svg";
import menuBtn from "./menu.svg";
import leftArrow from "../leftArrow.svg";
import wallet from "../wallet.svg";
import Link from "next/link";

export function MobileNavbar(): ReactElement {
  return (
    <nav className={css.mobileNavBarContainer}>
      <div className={css.mobileNavBar}>
        <Link href={"./"}>
          <Image src={logo} alt="libertum logo" width="140.727" height="18" />
        </Link>
        <button className={css.menuBtn}>
          <Image src={menuBtn} alt="Menu" />
        </button>
      </div>
    </nav>
  );
}
