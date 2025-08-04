import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccountProvider } from './context/AccountContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ContactUs from './components/ContactUs.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import LinkAccount from './pages/LinkAccount.jsx';
import SyncPlaylist from './pages/SyncPlaylist.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import Friends from './pages/Friends.jsx';
import Trending from './pages/Trending.jsx';
import TopSongs from './pages/TopSongs.jsx';
import Favorites from './pages/Favorites.jsx';

// Home Page Component
const HomePage = ({ isLoading, showParticles, theme, setTheme }) => {
  // Loading screen with dynamic progress
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6 mx-auto animate-bounce">
            <span className="text-white font-bold text-lg">CC</span>
          </div>
          <LoadingSpinner size="lg" color="primary" />
          <p className="text-gray-600 mt-4 animate-fade-in">Loading amazing experience...</p>
          <div className="mt-6 w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-pulse" style={{width: '100%', animation: 'loading 2s ease-in-out'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <ScrollProgress />
      {showParticles && <ParticleBackground />}
      
      {/* Theme toggle button */}
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="fixed top-20 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>

      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <ContactUs />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowParticles(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AccountProvider>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                isLoading={isLoading} 
                showParticles={showParticles} 
                theme={theme} 
                setTheme={setTheme} 
              />
            } 
          />
          <Route path="/link-account" element={<LinkAccount />} />
          <Route path="/sync-playlist" element={<SyncPlaylist />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/top-songs" element={<TopSongs />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </AccountProvider>
  );
}

export default App;