'use client';

import { useState } from 'react';
import css from './form.module.css';
import Image from 'next/image';

export function FormCandidates() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isChecked) {
      alert('Please consent to receiving additional communications from Libertum.');
      return;
    }
  
    const formData = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };
  
    try {
      const response = await fetch('/api/ambassadors/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Correo electrónico enviado exitosamente');
      } else {
        alert('Hubo un problema al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert('Hubo un problema al enviar la solicitud');
    }
  };

  return (
    <div className={css.formContainer}>
      <h2>Applications are now open!</h2>
      <form onSubmit={handleSubmit}>
        <div className={css.formFrame}>
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea
            name="message"
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

        <button type="submit" className={css.buttonSubmit}>
          Submit{' '}
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
