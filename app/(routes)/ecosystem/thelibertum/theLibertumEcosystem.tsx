import React from "react";
import Image from "next/image";
import stay from "./assets/stay.svg";
import market from "./assets/market.svg";
import libertumLogo from "./assets/libertumLogo.svg";
import tokenise from "./assets/tokenise.svg";
import earn from "./assets/earn.svg";
import trade from "./assets/trade.svg";
import borrow from "./assets/borrow.svg";
import choose from "./assets/choose.svg";
import css from "./theLibertumEcosystem.module.css";
import ecosystem from "./assets/ecosystem.svg"
import Link from "next/link";

export default function LibertumEcosystem () {
  return(
    <div className={css.container}>
      <div className={css.title}>
        <section>
          <Image
          src={libertumLogo}
          alt="Libertum Logo"
          width={60}
          height={60}
          />    
          <h2>The Libertum Ecosystem</h2>
          </section>
          <p className=" font-black text-9xl">
          The Libertum  platform is designed with the user at its core. We have partnered with leading technology providers to deliver an experience like no other in the RWA space. Our entire platform is being developed with a single purpose in mind; to create liquidity for every single member of our community. You’re welcome!!
          </p>

          <Link href="#form" className={css.applyButton}>
            <p >JOIN US ON THIS TRANSFORMATIVE JOURNEY</p>
            <Image
              alt="left arrow"
              src="/assets/leftArrow.svg"
              width={13.207}
              height={8.708}
            />
          </Link>
      </div>

<div>

</div>

<div className={css.ecosystemGraph}>
<Image
src={ecosystem}
alt="ecosystem graph"
width={100}
height={100}

/>
</div>
    </div>
  )
}; 
