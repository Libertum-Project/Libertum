'use client';
import css from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <form
      action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo4NTg1OTE3LCJhZGRyZXNzX2Jvb2tfaWQiOjU2NTYyNywibGFuZyI6ImVuIn0="
      method="post"
    >
      <div className={css.inputGroup}>
        <input className={css.input} placeholder="Email" type="email" required name="email" />
        <input type="hidden" name="sender" value="34d375e0-f3d7-4010-ac6d-2eae41659b9a" />
        <button
          className={css.buttonSubmit}
          // type="button"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
