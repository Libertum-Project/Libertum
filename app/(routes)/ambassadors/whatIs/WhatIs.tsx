import css from './WhatIs.module.css';
import image from "./assets/image.svg";
import Image from 'next/image';
import Link from 'next/link';

export default function WhatIs() {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <div>
          <div>
            <h2>What is an Ambassador?</h2>
            <p className={css.paragraph}>
              By becoming an Ambassador, you will assist us in spreading the
              word about RWA tokenisation and our efforts in the Libertum
              Ecosystem. Ambassadors have the power to host events, craft
              content, and be part of the upcoming tokenisation wave.
            </p>
          </div>
          <Link href="#form" className={css.applyButton}>
            <p>Apply Now</p>
            <Image
              alt="left arrow"
              src="/assets/leftArrowBLACK.svg"
              width={13.207}
              height={8.708}
            />
          </Link>
        </div>

        <div className={css.imageContainer}>
          <Image
            alt="image ambassadors"
            src={image}
            width={419}
            height={367}
          />
        </div>
      </div>
    </div>
  );
}
