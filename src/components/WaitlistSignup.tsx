'use client';

import React, { useState } from 'react';

export const WaitlistSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('✅ You’re on the waitlist! Check your inbox.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect. Try again later.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mt-6 flex flex-col items-center gap-4 text-center"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'loading'}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 rounded-lg transition disabled:opacity-60"
      >
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === 'error' ? 'text-red-500' : 'text-green-600'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};
