import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from '../context/AccountContext';

const Hero = () => {
  const navigate = useNavigate();
  const { hasAnyConnectedAccount } = useAccount();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLinkAccountClick = () => {
    navigate('/link-account');
  };

  const handleSyncPlaylistClick = () => {
    if (hasAnyConnectedAccount()) {
      navigate('/sync-playlist');
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
    }
  };

  const handleFriendClick = () => {
    navigate('/friends');
  };

  const handleTrendingClick = () => {
    navigate('/trending');
  };

  const handleTopSongsClick = () => {
    navigate('/top-songs');
  };

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };


  const dynamicTexts = [
    "Create your own blog's now",
    "Explore amazing content",
    "Build something incredible",
    "Transform your ideas"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentFullText = dynamicTexts[currentTextIndex];
    let timeoutId;

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentFullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 100); // Typing speed
      } else {
        // Finished typing, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause before deleting
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50); // Deleting speed (faster than typing)
      } else {
        // Finished deleting, move to next text
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex, dynamicTexts]);



  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-200 rounded-full opacity-10 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 min-h-[4rem] md:min-h-[6rem] flex items-center justify-center">
            <span className="typewriter-container">
              <span className="text-primary-600">
                {displayText}
              </span>
              <span className={`typewriter-cursor ml-1 ${isTyping ? 'animate-pulse' : 'animate-blink'}`}>|</span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Create stunning web experiences with our modern platform.
            Fast, reliable, and designed for the future of web development.
          </p>
          {/* Feature Cards */}
          <div className="card-group flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto items-center card-container">
            {/* Link Account Card */}
            <div
              onClick={handleLinkAccountClick}
              className="group bg-white rounded-3xl shadow-lg p-8 cursor-pointer flex-1 transition-all duration-500 ease-in-out transform hover:scale-125 hover:shadow-2xl hover:z-10 relative"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:w-10 group-hover:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center transition-all duration-300 group-hover:text-2xl group-hover:text-blue-600">Link Account</h3>
              <p className="text-gray-600 text-center text-sm transition-all duration-300 group-hover:text-base group-hover:text-gray-700">Connect your accounts seamlessly and manage everything in one place</p>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"></div>
            </div>

            {/* Sync Playlist Card */}
            <div
              onClick={handleSyncPlaylistClick}
              className="group bg-white rounded-3xl shadow-lg p-8 cursor-pointer flex-1 transition-all duration-500 ease-in-out transform hover:scale-125 hover:shadow-2xl hover:z-10 relative"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-8 h-8 text-green-600 transition-all duration-300 group-hover:w-10 group-hover:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center transition-all duration-300 group-hover:text-2xl group-hover:text-green-600">Sync Playlist</h3>
              <p className="text-gray-600 text-center text-sm transition-all duration-300 group-hover:text-base group-hover:text-gray-700">Keep your playlists synchronized across all your devices and platforms</p>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-300 transition-all duration-500"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"></div>
            </div>

            {/* Friend Card */}
            <div
              onClick={handleFriendClick}
              className="group bg-white rounded-3xl shadow-lg p-8 cursor-pointer flex-1 transition-all duration-500 ease-in-out transform hover:scale-125 hover:shadow-2xl hover:z-10 relative"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-8 h-8 text-purple-600 transition-all duration-300 group-hover:w-10 group-hover:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center transition-all duration-300 group-hover:text-2xl group-hover:text-purple-600">Friend</h3>
              <p className="text-gray-600 text-center text-sm transition-all duration-300 group-hover:text-base group-hover:text-gray-700">Connect with friends and share your favorite content together</p>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-300 transition-all duration-500"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-500"></div>
            </div>
          </div>

          {/* Error Message */}
          {showError && (
            <div className="mt-8 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl text-center animate-fade-in">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Please link your account first before syncing playlists!
                <button
                  onClick={handleLinkAccountClick}
                  className="ml-4 text-red-800 underline hover:text-red-900 font-medium"
                >
                  Link Account Now
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Music Dashboard */}
        <div className={`mt-16 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {/* Trending Section */}
            <div
              onClick={handleTrendingClick}
              className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  Trending
                </h3>
                <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full font-medium">HOT</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Blinding Lights", artist: "The Weeknd", plays: "2.1M", trend: "+15%" },
                  { title: "Shape of You", artist: "Ed Sheeran", plays: "1.8M", trend: "+12%" },
                  { title: "Bad Habits", artist: "Ed Sheeran", plays: "1.5M", trend: "+8%" },
                  { title: "Stay", artist: "The Kid LAROI", plays: "1.3M", trend: "+22%" }
                ].map((song, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{song.title}</p>
                      <p className="text-xs text-gray-500 truncate">{song.artist}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-gray-900">{song.plays}</p>
                      <p className="text-xs text-green-600">{song.trend}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-red-600 hover:text-red-700 text-sm font-medium transition-colors">
                View All Trending →
              </button>
            </div>

            {/* Top Songs Section */}
            <div
              onClick={handleTopSongsClick}
              className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  Top Songs
                </h3>
                <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full font-medium">TOP</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "As It Was", artist: "Harry Styles", rank: "1", change: "↑" },
                  { title: "Heat Waves", artist: "Glass Animals", rank: "2", change: "→" },
                  { title: "Anti-Hero", artist: "Taylor Swift", rank: "3", change: "↑" },
                  { title: "Unholy", artist: "Sam Smith", rank: "4", change: "↓" }
                ].map((song, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold ${index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                      index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                        index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                          'bg-gradient-to-br from-blue-400 to-blue-600'
                      }`}>
                      {song.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{song.title}</p>
                      <p className="text-xs text-gray-500 truncate">{song.artist}</p>
                    </div>
                    <div className={`text-lg font-bold ${song.change === '↑' ? 'text-green-600' :
                      song.change === '↓' ? 'text-red-600' :
                        'text-gray-400'
                      }`}>
                      {song.change}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium transition-colors">
                View All Top Songs →
              </button>
            </div>

            {/* Favorites Section */}
            <div
              onClick={handleFavoritesClick}
              className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  Your Favorites
                </h3>
                <span className="text-xs text-pink-600 bg-pink-100 px-2 py-1 rounded-full font-medium">LOVED</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Watermelon Sugar", artist: "Harry Styles", plays: "127", liked: true },
                  { title: "Levitating", artist: "Dua Lipa", plays: "89", liked: true },
                  { title: "Good 4 U", artist: "Olivia Rodrigo", plays: "156", liked: true },
                  { title: "Peaches", artist: "Justin Bieber", plays: "203", liked: true }
                ].map((song, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{song.title}</p>
                      <p className="text-xs text-gray-500 truncate">{song.artist}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-gray-900">{song.plays} plays</p>
                      <div className="flex justify-end mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-pink-600 hover:text-pink-700 text-sm font-medium transition-colors">
                View All Favorites →
              </button>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;