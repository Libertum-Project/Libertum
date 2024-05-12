'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import linkedinLogo from '../assets/linkedin.svg';

import css from './Card.module.css';
import { fadeIn } from '@/utils/motion';

export function Card({ image, name, position, description, linkedin, index }) {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)} // we need to put the index to have them one by one
      initial='hidden'
      animate='show'
    >
      <div className={css.card}>
        <div className={css.removeWhenUse}>
          <Image alt={`image of ${name}`} src={image} width={257} height={257} />
        </div>
        <div className={css.details}>
          <div className={css.title}>
            <h2>{name}</h2>
            <h4>{position}</h4>
          </div>
          <p>{description}</p>
          <div className={css.linkedin}>
            <Link href={linkedin} target="_blank">
              <Image alt="linkedin" src={linkedinLogo} width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
