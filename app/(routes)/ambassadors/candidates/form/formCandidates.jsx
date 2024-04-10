import css from './form.module.css';
import Image from 'next/image';

export function FormCandidates() {
  return (
    <div className={css.formContainer}>
      <h2>Applications are now open!</h2>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" name="" id="" placeholder="Email" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Leave a message..."
      ></textarea>

      <div className={css.formFooter}>
        <p>
          At Libertum, we are dedicated to safeguarding and respecting your
          privacy. Your personal information is used solely to manage your
          account and deliver the requested products and services. Occasionally,
          we would like to update you on our offerings and relevant content. If
          you agree to this, please indicate your preferred contact method
          below:
        </p>
        <label>
        <input type="checkbox" name="checkbox1" value="option1" />
          I consent to receiving additional communications from Libertum.
       </label>
        <p>
          You have the option to opt out of these communications at any time. By
          clicking submit, you authorise defactor.com to securely store and
          process the provided personal data for the requested content.
        </p>
      </div>

      <button className={css.buttonSubmit}>
        Submit 
        <Image src="/assets/arrowForm.svg" alt='submit' width={16} height={16}/>
      </button>
    </div>
  );
}
