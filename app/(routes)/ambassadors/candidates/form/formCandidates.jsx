'use client';

import { useState, useRef } from 'react';
import css from './form.module.css';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export function FormCandidates() {
  const form = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    if (!isChecked) {
      setErrorMessage('Please consent to receiving additional communications from Libertum.');
      return;
    }
  
    if (!form.current.checkValidity()) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }
  
    emailjs
      .sendForm(
        'service_o8ckx7h',
        'template_7qw777z',
        form.current ?? '',
        'K3xhSEXO5y1bVyrXc'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert(
            'Your message could not be sent. Please try again or email us at hello@libertum.io.'
          );
        }
      );
  };
  
  return (
    <div className={css.formContainer}>
      <h2>Applications are now open!</h2>
      <form onSubmit={sendEmail} ref={form}>
        <div className={css.formFrame}>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            placeholder="First Name"
          />
          <input
            type="text"
            name="user_lastname"
            id="user_lastname"
            required
            placeholder="Last Name"
          />
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            placeholder="Email"
          />
          <textarea
            name="message"
            id="message"
            required
            cols="30"
            rows="10"
            placeholder="Leave a message..."
          ></textarea>
        </div>
  

        <div className={css.formFooter}>
          <p>
            At Libertum, we are dedicated to safeguarding and respecting your
            privacy. Your personal information is used solely to manage your
            account and deliver the requested products and services.
            Occasionally, we would like to update you on our offerings and
            relevant content. If you agree to this, please indicate your
            preferred contact method below:
          </p>
          <label>
            <input
              type="checkbox"
              name="checkbox1"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I consent to receiving additional communications from Libertum.
          </label>
          <p>
            You have the option to opt out of these communications at any time.
            By clicking submit, you authorize defactor.com to securely store and
            process the provided personal data for the requested content.
          </p>
        </div>
        {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}

        <button type="submit" className={css.buttonSubmit}>
          Submit
          <Image
            src="/assets/arrowForm.svg"
            alt="submit"
            width={16}
            height={16}
          />
        </button>
      </form>
    </div>
  );
}
