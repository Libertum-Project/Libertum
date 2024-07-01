'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import css from './contactForm.module.css';

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_o8ckx7h', 'template_r8p0gnq', form.current ?? '', 'K3xhSEXO5y1bVyrXc').then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Your message could not be sent. Please try again or email us at hello@libertum.io.');
      },
    );
  };

  return (
    <div className={css.formContainer}>
      <section>
        <h2 className={css.title}> Get in touch </h2>
        <p className={css.information}> We aim to respond to your messages within 48 hrs.</p>
      </section>

      <form ref={form} onSubmit={sendEmail} className={css.inputsBox}>
        <input type="text" id="user_name" name="user_name" placeholder="Name" required className={css.input} />

        <input
          type="email"
          placeholder="Email"
          className={css.input}
          id="user_email"
          name="user_email"
          required
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="I am interested in..."
          className={css.input}
          id="subject"
          name="subject"
          required
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Leave a message - (Optional)"
          className={css.inputMessage}
          id="message"
          name="message"
        />

        <button className={css.button} type="submit">
          Submit
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path
              d="M14.0602 6.21334L4.72683 1.54667C4.35849 1.36334 3.94258 1.29808 3.53579 1.35977C3.129 1.42147 2.75114 1.60712 2.45372 1.89141C2.1563 2.17571 1.9538 2.54482 1.87383 2.94841C1.79385 3.352 1.8403 3.77044 2.00683 4.14667L3.60683 7.72667C3.64314 7.81323 3.66183 7.90615 3.66183 8C3.66183 8.09386 3.64314 8.18678 3.60683 8.27334L2.00683 11.8533C1.8713 12.1578 1.814 12.4913 1.84015 12.8236C1.8663 13.1558 1.97506 13.4763 2.15655 13.7558C2.33805 14.0353 2.58652 14.2651 2.87938 14.4241C3.17224 14.5832 3.50022 14.6666 3.8335 14.6667C4.14565 14.6636 4.45316 14.5907 4.7335 14.4533L14.0668 9.78667C14.3979 9.62013 14.6762 9.36487 14.8706 9.04939C15.0651 8.73391 15.168 8.3706 15.168 8C15.168 7.62941 15.0651 7.2661 14.8706 6.95062C14.6762 6.63513 14.3979 6.37988 14.0668 6.21334H14.0602ZM13.4668 8.59334L4.1335 13.26C4.01094 13.3189 3.87332 13.3388 3.73909 13.3172C3.60486 13.2957 3.48044 13.2335 3.38251 13.1392C3.28458 13.0449 3.21782 12.9229 3.19119 12.7896C3.16455 12.6563 3.17932 12.518 3.2335 12.3933L4.82683 8.81334C4.84746 8.76553 4.86527 8.71656 4.88016 8.66667H9.4735C9.65031 8.66667 9.81988 8.59643 9.9449 8.47141C10.0699 8.34639 10.1402 8.17682 10.1402 8C10.1402 7.82319 10.0699 7.65362 9.9449 7.5286C9.81988 7.40358 9.65031 7.33334 9.4735 7.33334H4.88016C4.86527 7.28345 4.84746 7.23448 4.82683 7.18667L3.2335 3.60667C3.17932 3.48198 3.16455 3.3437 3.19119 3.21038C3.21782 3.07706 3.28458 2.95507 3.38251 2.86077C3.48044 2.76647 3.60486 2.70436 3.73909 2.68277C3.87332 2.66119 4.01094 2.68116 4.1335 2.74L13.4668 7.40667C13.576 7.46262 13.6677 7.54761 13.7317 7.6523C13.7957 7.75699 13.8295 7.87731 13.8295 8C13.8295 8.1227 13.7957 8.24302 13.7317 8.34771C13.6677 8.4524 13.576 8.53739 13.4668 8.59334Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
