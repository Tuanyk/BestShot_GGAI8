
import React from 'react';

interface HomeScreenProps {
  onNavigate: () => void;
}

const GolfBallIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.5 7.5a1 1 0 100-2 1 1 0 000 2zm3 2a1 1 0 10-2 0 1 1 0 002 0zm-4 3a1 1 0 100-2 1 1 0 000 2zm9 1a1 1 0 10-2 0 1 1 0 002 0zm-3 3a1 1 0 100-2 1 1 0 000 2zm-4 1a1 1 0 10-2 0 1 1 0 002 0zm5-6a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/golfcourse1/1920/1080')"}}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col items-center">
        <GolfBallIcon className="w-20 h-20 text-emerald-400 mb-4 animate-pulse" />
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase">
          <span className="text-white">Best</span>
          <span className="text-emerald-400">Shot</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl">
          Your Daily Hole-in-One Challenge.
        </p>
        <button
          onClick={onNavigate}
          className="mt-10 px-10 py-4 bg-emerald-500 text-white font-bold text-xl rounded-full shadow-lg hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          TAKE A SHOT
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
