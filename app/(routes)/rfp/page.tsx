import Link from 'next/link';

import css from './Rfp.module.css';
import { ContactForm } from './contactForm/contactFrom';
import { TagComponent } from './tags/tag';

export default function Rfp() {
  return (
    <div className={css.container}>
      <div className={css.background}></div>
      <div className={css.frame}>
        <TagComponent />
      </div>
    </div>
  );
}
