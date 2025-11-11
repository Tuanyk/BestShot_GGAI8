import React, { useState, useCallback } from 'react';
import { Screen } from './types';
import HomeScreen from './components/HomeScreen';
import IntroScreen from './components/IntroScreen';
import HowItWorksScreen from './components/HowItWorksScreen';
import FeaturesScreen from './components/FeaturesScreen';
import SignupScreen from './components/SignupScreen';
import ThankYouScreen from './components/ThankYouScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Home);

  const navigateTo = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white">
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentScreen * 100}%)` }}
      >
        <div className="w-full h-full flex-shrink-0">
          <HomeScreen onNavigate={() => navigateTo(Screen.Intro)} />
        </div>
        <div className="w-full h-full flex-shrink-0">
          <IntroScreen onNavigate={() => navigateTo(Screen.HowItWorks)} />
        </div>
        <div className="w-full h-full flex-shrink-0">
          <HowItWorksScreen onNavigate={() => navigateTo(Screen.Features)} />
        </div>
        <div className="w-full h-full flex-shrink-0">
          <FeaturesScreen onNavigate={() => navigateTo(Screen.Signup)} />
        </div>
        <div className="w-full h-full flex-shrink-0">
          <SignupScreen onSignupSuccess={() => navigateTo(Screen.ThankYou)} />
        </div>
        <div className="w-full h-full flex-shrink-0">
          <ThankYouScreen onRestart={() => navigateTo(Screen.Home)} />
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {Object.keys(Screen).filter(key => !isNaN(Number(key))).map(key => {
            const screenIndex = Number(key);
            return (
              <button
                key={screenIndex}
                onClick={() => navigateTo(screenIndex)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentScreen === screenIndex ? 'bg-emerald-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${screenIndex + 1}`}
              />
            );
        })}
      </div>
    </div>
  );
};

export default App;
