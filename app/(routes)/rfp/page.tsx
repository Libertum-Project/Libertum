import Link from 'next/link';
import css from './Rfp.module.css';
import { ContactForm } from './contactForm/contactFrom';

export default function Rfp() {
  return (
    <div className={css.container}>
      <div className={css.background}></div>
      <div className={css.frame}>
        <h2>
          {' '}
          <span className={css.error}>Request For Proposal:</span>
        </h2>
        <p>
          Libertum is currently seeking proposals for an <span className={css.error}>Indefinite
          Delivery/Indefinite Quantity (IDIQ) </span> contract to provide engagement
          tools for our community. The solution partner will be required to
          develop and deploy sophisticated software Infrastructure for
          Decentralized Tokenized RWA real estate markets. 
          <br />
          The solution provider
          should have a proven ability to provide community engagement solutions
          such as staking pools for both liquidity and funding, and community
          engagement and transparency tools for Libertums LBM token and the
          subsequent Rental Income Token (RIT). 
          <br />
          Proposals will be evaluated
          using the best value trade-off method, with non-price factors being
          significantly more important than price. 
          <br />
          Applications are due by April
          5, 2024, and proposals are due by April 10, 2024.
        </p>

            <div className={css.contactForm}>
            <ContactForm />

            </div>

      </div>
    </div>
  );
}
