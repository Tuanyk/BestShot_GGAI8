
import React from 'react';
import { CalendarIcon, TrophyIcon, CubeIcon, HandRaisedIcon } from './icons/FeatureIcons';

interface FeaturesScreenProps {
  onNavigate: () => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-emerald-500 transition-colors duration-300">
    <div className="flex items-center justify-center w-16 h-16 bg-emerald-500 bg-opacity-20 text-emerald-400 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const FeaturesScreen: React.FC<FeaturesScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Climb The Ranks Daily</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">One shot a day. Endless glory. Here's what makes Best Shot the ultimate test of precision.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard icon={<CalendarIcon />} title="Daily Challenges">
          A brand new, uniquely designed hole awaits you every single day.
        </FeatureCard>
        <FeatureCard icon={<TrophyIcon />} title="Global Leaderboards">
          Compete against players worldwide and see where your best shot ranks.
        </FeatureCard>
        <FeatureCard icon={<CubeIcon />} title="Stunning 3D Graphics">
          Immerse yourself in beautifully crafted courses that bring the game to life.
        </FeatureCard>
        <FeatureCard icon={<HandRaisedIcon />} title="Simple Controls">
          No complex swings. Just an intuitive, satisfying swipe-to-shoot mechanic.
        </FeatureCard>
      </div>
       <button
        onClick={onNavigate}
        className="mt-12 px-10 py-4 bg-emerald-500 text-white font-bold text-xl rounded-full shadow-lg hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Join The Waitlist
      </button>
    </div>
  );
};

export default FeaturesScreen;
