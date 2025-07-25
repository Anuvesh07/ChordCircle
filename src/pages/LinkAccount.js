import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from '../context/AccountContext';

const LinkAccount = () => {
  const { connectedAccounts, connectAccount, disconnectAccount } = useAccount();
  const [isConnecting, setIsConnecting] = useState({
    spotify: false,
    appleMusic: false
  });

  const handleConnect = async (platform) => {
    setIsConnecting(prev => ({ ...prev, [platform]: true }));
    
    // Simulate API call
    setTimeout(() => {
      connectAccount(platform);
      setIsConnecting(prev => ({ ...prev, [platform]: false }));
    }, 2000);
  };

  const handleDisconnect = (platform) => {
    disconnectAccount(platform);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">ChordCircle</span>
            </Link>
            <Link 
              to="/" 
              className="text-gray-600 hover:text-primary-600 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Link Your <span className="text-primary-600">Music Accounts</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect your Spotify and Apple Music accounts to sync your playlists and discover new music across platforms.
          </p>
        </div>

        {/* Account Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Spotify Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Spotify</h3>
              <p className="text-gray-600 mb-6">Connect your Spotify account to access your playlists and music library</p>
              
              {connectedAccounts.spotify ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center text-green-600 mb-4">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Connected Successfully
                  </div>
                  <button
                    onClick={() => handleDisconnect('spotify')}
                    className="w-full bg-red-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-red-600 transition-colors"
                  >
                    Disconnect Account
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleConnect('spotify')}
                  disabled={isConnecting.spotify}
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isConnecting.spotify ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Connecting...
                    </>
                  ) : (
                    'Connect Spotify'
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Apple Music Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.001-.08-.004-.12-.004H5.986c-.04 0-.08.003-.12.004-.526.015-1.047.057-1.564.15-.673.121-1.303.353-1.877.727C1.307 1.624.562 2.624.245 3.934.07 4.654.005 5.386.005 6.124v11.748c0 .738.065 1.47.24 2.19.317 1.31 1.062 2.31 2.18 3.043.574.374 1.204.606 1.877.727.517.093 1.038.135 1.564.15.04.001.08.004.12.004h12.014c.04 0 .08-.003.12-.004.526-.015 1.047-.057 1.564-.15.673-.121 1.303-.353 1.877-.727 1.118-.733 1.863-1.733 2.18-3.043.175-.72.24-1.452.24-2.19V6.124zM12.001 4.009c2.47 0 4.471 2.001 4.471 4.471s-2.001 4.471-4.471 4.471-4.471-2.001-4.471-4.471 2.001-4.471 4.471-4.471zm0 7.542c1.693 0 3.071-1.378 3.071-3.071s-1.378-3.071-3.071-3.071-3.071 1.378-3.071 3.071 1.378 3.071 3.071 3.071z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Apple Music</h3>
              <p className="text-gray-600 mb-6">Connect your Apple Music account to sync your library and playlists</p>
              
              {connectedAccounts.appleMusic ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center text-green-600 mb-4">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Connected Successfully
                  </div>
                  <button
                    onClick={() => handleDisconnect('appleMusic')}
                    className="w-full bg-red-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-red-600 transition-colors"
                  >
                    Disconnect Account
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleConnect('appleMusic')}
                  disabled={isConnecting.appleMusic}
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-xl font-medium hover:from-pink-600 hover:to-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isConnecting.appleMusic ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Connecting...
                    </>
                  ) : (
                    'Connect Apple Music'
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What you get when you connect:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sync Playlists</h3>
              <p className="text-gray-600 text-sm">Keep your playlists synchronized across all platforms</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discover Music</h3>
              <p className="text-gray-600 text-sm">Get recommendations based on your listening habits</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Share with Friends</h3>
              <p className="text-gray-600 text-sm">Share your favorite tracks and playlists with friends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkAccount;