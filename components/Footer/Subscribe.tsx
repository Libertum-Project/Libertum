'use client';
import { useState } from 'react';
import axios from 'axios';

import css from './Subscribe.module.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState('LOADING');
    setErrorMessage(null);
    try {
      await axios.post('/api/newsletter', { email });
      setState('SUCCESS');
    } catch (e: any) {
      setErrorMessage(e.response?.data?.error || 'An error occurred');
      setState('ERROR');
    }
  };

  return (
    <div>
      <div className={css.inputGroup}>
        <input className={css.input} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className={css.buttonSubmit} type="button" disabled={state === 'LOADING'} onClick={subscribe}>
          Subscribe
        </button>
      </div>
      {state === 'ERROR' && <p className={css.errorMessage}>{errorMessage}</p>}

      {state === 'SUCCESS' && <p className={css.successMessage}>Success!</p>}
    </div>
  );
};

// Subscribe.displayName = 'Subscribe';

export default Subscribe;
