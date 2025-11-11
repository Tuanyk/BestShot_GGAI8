import React from 'react';

interface IntroScreenProps {
  onNavigate: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 lg:p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            The Ultimate <span className="text-emerald-400">Daily Golf</span> Challenge
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Every day brings a new hole, a new challenge, and one chance to take your best shot. With intuitive swipe controls, aim for the perfect 0.00 yards to the pin and prove you're the best.
          </p>
          <button
            onClick={onNavigate}
            className="mt-8 px-8 py-3 bg-white text-gray-900 font-bold text-lg rounded-full shadow-md hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            How It Works
          </button>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src="https://picsum.photos/seed/golfapp/800/600"
            alt="Gameplay screenshot"
            className="rounded-2xl shadow-2xl max-w-sm md:max-w-md lg:max-w-full object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
