
import React, { useState } from 'react';

interface SignupScreenProps {
  onSignupSuccess: () => void;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setStatus('error');
        setMessage('Please enter a valid email address.');
        return;
    }

    setStatus('loading');
    setMessage('');
    
    // Simulate API call
    setTimeout(() => {
      onSignupSuccess();
      setEmail('');
      setStatus('idle');
    }, 1500);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 lg:p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/golfreward/800/600"
            alt="Exclusive reward"
            className="rounded-2xl shadow-2xl max-w-sm md:max-w-md lg:max-w-full object-cover aspect-video"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Be The <span className="text-emerald-400">First to Play</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Best Shot is launching soon! Sign up to get notified and receive an exclusive in-game reward on day one. No spam, we promise.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="flex-grow w-full px-6 py-4 text-lg text-gray-900 bg-white rounded-full border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-emerald-400 transition-shadow"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              className="px-8 py-4 bg-emerald-500 text-white font-bold text-lg rounded-full shadow-md hover:bg-emerald-600 disabled:bg-gray-500 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Signing Up...' : 'Notify Me'}
            </button>
          </form>
          {message && <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-400' : 'text-gray-400'}`}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
