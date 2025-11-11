
import React from 'react';
import { TwitterIcon, InstagramIcon, DiscordIcon } from './icons/SocialIcons';

interface ThankYouScreenProps {
  onRestart: () => void;
}

const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ onRestart }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <div className="w-24 h-24 mb-6 rounded-full bg-emerald-500 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-white">You're on the list!</h2>
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
        Thanks for signing up! We'll email you the second it's time to tee off. Follow us for updates and sneak peeks.
      </p>
      <div className="mt-8 flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><TwitterIcon /></a>
        <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><InstagramIcon /></a>
        <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><DiscordIcon /></a>
      </div>
      <button 
        onClick={onRestart}
        className="mt-12 text-emerald-400 hover:text-emerald-300 transition-colors"
      >
        Start Over
      </button>
    </div>
  );
};

export default ThankYouScreen;
