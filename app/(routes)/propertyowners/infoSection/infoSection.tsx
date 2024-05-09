'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import css from './infoSection.module.css';

export default function InfoSection() {
  return (
    <div className={css.container}>
      <h2>
        Are you thinking of buying new premises, acquiring a supplier or competitor, or funding to hit ambitious growth
        plans?
      </h2>
      <p>
        Need funds for investment and growth? Look no further! At Libertum, we provide a peer-to-peer funding model that
        allows commercial property owners to tokenize their properties. This means you can access interest-free capital
        based on your property&apos;s rental yields, saving yourself from hefty interest payments and avoiding a
        negative equity position. 
      </p>

      <div className={css.cards}>
        <div className={css.card}>
          <h3>Bad credit history and commercial refinance</h3>
          <p>You can access interest free capital through property Tokenization, regardless of your credit history.</p>
        </div>
        <div className={css.card}>
          <h3>Fees Structure</h3>
          <p>
            → Arrangement fee – 3% per cent initial cost of the property value i.e. £100,000 interest-free capital
            equals £3,000 fee which includes security fees, marketing and listing fees.
          </p>
          <p>
            {' '}
            → Transaction fee - 3% per cent of interest-free funding raised through our property Tokenization platform{' '}
          </p>
        </div>
      </div>

      <Link href="/community" className={css.button}>
        <p>Get in touch</p>

        <Image alt="left arrow" src="/assets/arrowDifferent.svg" width={13.207} height={8.708} />
      </Link>
    </div>
  );
}
