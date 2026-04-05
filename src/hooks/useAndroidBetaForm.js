import { useState } from 'react';

// Keep in sync with api/android-beta.js
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FETCH_TIMEOUT_MS = 10_000;

export function useAndroidBetaForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'duplicate' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit() {
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
      const res = await fetch('/api/android-beta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      });
      const data = await res.json();

      if (res.status === 409) {
        setStatus('duplicate');
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      clearTimeout(timeout);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubmit();
  }

  return { email, setEmail, status, errorMsg, handleSubmit, handleKeyDown };
}
