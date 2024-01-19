import { type ReactElement } from "react";
import css from "./FaqSection.module.css";
import FAQ from './FaqItem';
import { faqData } from './faqData';

export function FaqSection(): ReactElement {
  return (
    <section className={css.faqSectionContainer}>
      <div className={css.faqSection}>
        <h3>Frequently Asked Questions</h3>
        <div className={css.faqContainer}>
          {faqData.map((faqItem) => (
            <FAQ question={faqItem.question} answer={faqItem.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
