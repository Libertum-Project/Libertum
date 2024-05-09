import { ContactForm } from '../community/hero/contactForm/contactFrom';

import { Hero } from './hero/hero';
import { Feed } from './feed/feed';
import { GetReady } from './getReady/getReady';
import css from './page.module.css';

export default function page() {
  return (
    <div>
      <Hero />
      <Feed />
      <GetReady />

      <div className={css.ContactFormcontainer}>
        <div className={css.contactForm}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
