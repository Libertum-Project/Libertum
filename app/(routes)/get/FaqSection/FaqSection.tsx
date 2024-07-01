import css from './FaqSection.module.css';
import FAQ from './FaqItem';
import { faqData } from './faqData';

const FaqSection = () => {
  return (
    <section className={css.faqSectionContainer}>
      <div className={css.faqSection}>
        <h3>Frequently Asked Questions</h3>
        <div className={css.faqContainer}>
          {faqData.map((faqItem) => (
            <FAQ question={faqItem.question} answer={faqItem.answer} key={faqItem.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
