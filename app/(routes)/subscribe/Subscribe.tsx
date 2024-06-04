'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const audience: string | undefined = process.env.NEXT_PUBLIC_RESEND_AUDIENCE_ID;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
          audienceId: audience,
        }),
      });

      if (response.ok) {
        console.log('Contact successfully added');
        setEmail('');
        setSubscribeSuccess(true);
      } else {
        console.error('Error adding contact to Resend:', response.statusText);
        alert('Oops, there was a problem. Please try again.');
      }
    } catch (error) {
      console.error('Error making the request:', error);
      alert('Oops, there was a problem. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getButtonSubscribeText = () => {
    if (loading) return 'Sending...';
    if (subscribeSuccess) return 'Subscribed ✔️';
    return 'Subscribe';
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <div className="flex items-start justify-start font-space_grotesk">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
          className="w-full lg:w-[30rem] py-4 border rounded-tl-[.5rem] rounded-tr-0 rounded-br-0 rounded-bl-[.5rem] focus:border-libertumGreen focus:outline-none h-full px-2 bg-transparent border-libertumGreen border-r-transparent border-r-0 text-white"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-[1.12rem] border-libertumGreen bg-libertumGreen w-fit text-white rounded-tr-[.5rem] rounded-br-[.5rem] hover:bg-teal-600 ml-[-.5rem] transition duration-300 flex items-center justify-center font-space_grotesk"
      >
        {getButtonSubscribeText()}
      </button>
    </form>
  );
};

export default Subscribe;
