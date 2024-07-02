import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Partners } from '../partners/Partners';

import libertumLogo from './assets/libertumLogo.svg';
import css from './theLibertumEcosystem.module.css';
import ecosystem from './assets/ecosystem.svg';
import { EcosystemTabs } from './EcosystemTabs';

export const LibertumEcosystem = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <section>
          <Image src={libertumLogo} alt="Libertum Logo" width={60} height={60} className="w-auto xl:w-[60px]" />
          <h2>The Libertum Ecosystem</h2>
        </section>
        <p className=" font-black text-9xl">
          The Libertum  platform is designed with the user at its core. We have partnered with leading technology
          providers to deliver an experience like no other in the RWA space. Our entire platform is being developed with
          a single purpose in mind; to create liquidity for every single member of our community. You’re welcome!!
        </p>
        <Link href="#form" className={css.applyButton}>
          <p>JOIN US ON THIS TRANSFORMATIVE JOURNEY</p>
          <Image alt="left arrow" src="/assets/leftArrowBLACK.svg" width={13.207} height={8.708} />
        </Link>
      </div>

      <EcosystemTabs />

      <Partners />

      <div className={css.ecosystemGraph}>
        <Image src={ecosystem} alt="ecosystem graph" width={100} height={100} />
      </div>
    </div>
  );
};
