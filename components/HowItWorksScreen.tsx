import React from 'react';
import { PracticeIcon, BestShotIcon, MulliganIcon, TeesIcon } from './icons/FeatureIcons';

interface HowItWorksScreenProps {
  onNavigate: () => void;
}

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-emerald-500 transition-colors duration-300">
    <div className="flex items-center justify-center w-16 h-16 bg-emerald-500 bg-opacity-20 text-emerald-400 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const HowItWorksScreen: React.FC<HowItWorksScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Your Daily Drive to Glory</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">A new hole drops every 24 hours. Here's your strategy to top the leaderboard.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoCard icon={<PracticeIcon />} title="Practice Shots">
          Take a few swings to understand the hole's layout, wind, and slope before your official attempt.
        </InfoCard>
        <InfoCard icon={<BestShotIcon />} title="The Best Shot">
          This is the one that counts! Your single, official shot that gets posted to the daily leaderboard.
        </InfoCard>
        <InfoCard icon={<MulliganIcon />} title="Need a Mulligan?">
          Not happy with your Best Shot? Use a mulligan to get a second chance to sink a hole-in-one.
        </InfoCard>
        <InfoCard icon={<TeesIcon />} title="Get More Swings">
          Watch a quick ad or use in-app "Tees" to get extra practice shots or that crucial mulligan.
        </InfoCard>
      </div>
       <button
        onClick={onNavigate}
        className="mt-12 px-10 py-4 bg-white text-gray-900 font-bold text-xl rounded-full shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        See The Features
      </button>
    </div>
  );
};

export default HowItWorksScreen;
