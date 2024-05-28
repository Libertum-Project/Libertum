import css from './page.module.css';
import Subscribe from './Subscribe';

export default function page() {
  return (
    <div className={css.container}>
      <div className={css.background}></div>
      <div className={css.frame}>
        <h2>
          {' '}
          <span className={css.title}> Waitlist! </span> Secure your VIP pass to the pre-launch excitement.
        </h2>
        <p>
          {' '}
          Reserve your spot on the waitlist for exclusive early access to the Libertum platform. Simply enter your
          email, and we make sure you will be among the first in line to experience and earn passive rental income
          platform when it is unveiled!{' '}
        </p>

        <div className={css.subscribeForm}>
          <Subscribe />
        </div>
      </div>
    </div>
  );
}
