'use client';
import { useState, ChangeEvent } from 'react';
import axios, { AxiosError } from 'axios';

import css from './Subscribe.module.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const subscribe = async () => {
    setState('LOADING');
    setErrorMessage(null);
    try {
      await axios.post('/api/newsletter', { email });
      setState('SUCCESS');
    } catch (e: unknown) {
      const error = e as AxiosError<{ error: string }>;
      setErrorMessage(error.response?.data?.error || 'An error occurred');
      setState('ERROR');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className={css.inputGroup}>
        <input className={css.input} placeholder="Email" value={email} onChange={handleEmailChange} />
        <button className={css.buttonSubmit} type="button" disabled={state === 'LOADING'} onClick={subscribe}>
          Subscribe
        </button>
      </div>
      {state === 'ERROR' && <p className={css.errorMessage}>{errorMessage}</p>}
      {state === 'SUCCESS' && <p className={css.successMessage}>Success!</p>}
    </div>
  );
};

export default Subscribe;
