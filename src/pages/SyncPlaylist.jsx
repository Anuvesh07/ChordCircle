import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from '../context/AccountContext';

const SyncPlaylist = () => {
  const { connectedAccounts } = useAccount();
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncComplete, setSyncComplete] = useState(false);

  // Mock playlist data
  const [playlists, setPlaylists] = useState({
    spotify: [],
    appleMusic: []
  });

  useEffect(() => {
    // Simulate loading playlists
    setTimeout(() => {
      if (connectedAccounts.spotify) {
        setPlaylists(prev => ({
          ...prev,
          spotify: [
            { id: 'sp1', name: 'My Favorites', trackCount: 45, platform: 'spotify' },
            { id: 'sp2', name: 'Workout Mix', trackCount: 32, platform: 'spotify' },
            { id: 'sp3', name: 'Chill Vibes', trackCount: 28, platform: 'spotify' },
            { id: 'sp4', name: 'Road Trip', trackCount: 67, platform: 'spotify' },
            { id: 'sp5', name: 'Study Focus', trackCount: 23, platform: 'spotify' }
          ]
        }));
      }
      
      if (connectedAccounts.appleMusic) {
        setPlaylists(prev => ({
          ...prev,
          appleMusic: [
            { id: 'am1', name: 'Top Hits', trackCount: 50, platform: 'appleMusic' },
            { id: 'am2', name: 'Jazz Collection', trackCount: 89, platform: 'appleMusic' },
            { id: 'am3', name: 'Morning Boost', trackCount: 25, platform: 'appleMusic' },
            { id: 'am4', name: 'Evening Relax', trackCount: 34, platform: 'appleMusic' },
            { id: 'am5', name: 'Party Mix', trackCount: 42, platform: 'appleMusic' }
          ]
        }));
      }
      
      setIsLoading(false);
    }, 1500);
  }, [connectedAccounts]);

  const handlePlaylistToggle = (playlistId) => {
    setSelectedPlaylists(prev => 
      prev.includes(playlistId) 
        ? prev.filter(id => id !== playlistId)
        : [...prev, playlistId]
    );
  };

  const handleSelectAll = (platform) => {
    const platformPlaylists = playlists[platform].map(p => p.id);
    const otherSelected = selectedPlaylists.filter(id => 
      !platformPlaylists.includes(id)
    );
    setSelectedPlaylists([...otherSelected, ...platformPlaylists]);
  };

  const handleDeselectAll = (platform) => {
    const platformPlaylists = playlists[platform].map(p => p.id);
    setSelectedPlaylists(prev => 
      prev.filter(id => !platformPlaylists.includes(id))
    );
  };

  const handleSync = async () => {
    setIsSyncing(true);
    // Simulate sync process
    setTimeout(() => {
      setIsSyncing(false);
      setSyncComplete(true);
      setTimeout(() => setSyncComplete(false), 3000);
    }, 3000);
  };

  const getPlatformIcon = (platform) => {
    if (platform === 'spotify') {
      return (
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.001-.08-.004-.12-.004H5.986c-.04 0-.08.003-.12.004-.526.015-1.047.057-1.564.15-.673.121-1.303.353-1.877.727C1.307 1.624.562 2.624.245 3.934.07 4.654.005 5.386.005 6.124v11.748c0 .738.065 1.47.24 2.19.317 1.31 1.062 2.31 2.18 3.043.574.374 1.204.606 1.877.727.517.093 1.038.135 1.564.15.04.001.08.004.12.004h12.014c.04 0 .08-.003.12-.004.526-.015 1.047-.057 1.564-.15.673-.121 1.303-.353 1.877-.727 1.118-.733 1.863-1.733 2.18-3.043.175-.72.24-1.452.24-2.19V6.124z"/>
        </svg>
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your playlists...</p>
        </div>
      </div>
    );
  }

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sync Your <span className="text-primary-600">Playlists</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the playlists you want to sync to ChordCircle. Your selected playlists will be available across all your connected platforms.
          </p>
        </div>

        {/* Sync Status */}
        {syncComplete && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-8 text-center">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Successfully synced {selectedPlaylists.length} playlists!
            </div>
          </div>
        )}

        {/* Playlist Sections */}
        <div className="space-y-8">
          {/* Spotify Playlists */}
          {connectedAccounts.spotify && playlists.spotify.length > 0 && (
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Spotify Playlists</h2>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSelectAll('spotify')}
                    className="text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    Select All
                  </button>
                  <span className="text-gray-400">|</span>
                  <button
                    onClick={() => handleDeselectAll('spotify')}
                    className="text-sm text-gray-600 hover:text-gray-700 font-medium"
                  >
                    Deselect All
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {playlists.spotify.map((playlist) => (
                  <div
                    key={playlist.id}
                    onClick={() => handlePlaylistToggle(playlist.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedPlaylists.includes(playlist.id)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {getPlatformIcon('spotify')}
                        <div className="ml-3">
                          <h3 className="font-semibold text-gray-900">{playlist.name}</h3>
                          <p className="text-sm text-gray-600">{playlist.trackCount} tracks</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPlaylists.includes(playlist.id)
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedPlaylists.includes(playlist.id) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Apple Music Playlists */}
          {connectedAccounts.appleMusic && playlists.appleMusic.length > 0 && (
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.001-.08-.004-.12-.004H5.986c-.04 0-.08.003-.12.004-.526.015-1.047.057-1.564.15-.673.121-1.303.353-1.877.727C1.307 1.624.562 2.624.245 3.934.07 4.654.005 5.386.005 6.124v11.748c0 .738.065 1.47.24 2.19.317 1.31 1.062 2.31 2.18 3.043.574.374 1.204.606 1.877.727.517.093 1.038.135 1.564.15.04.001.08.004.12.004h12.014c.04 0 .08-.003.12-.004.526-.015 1.047-.057 1.564-.15.673-.121 1.303-.353 1.877-.727 1.118-.733 1.863-1.733 2.18-3.043.175-.72.24-1.452.24-2.19V6.124z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Apple Music Playlists</h2>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSelectAll('appleMusic')}
                    className="text-sm text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Select All
                  </button>
                  <span className="text-gray-400">|</span>
                  <button
                    onClick={() => handleDeselectAll('appleMusic')}
                    className="text-sm text-gray-600 hover:text-gray-700 font-medium"
                  >
                    Deselect All
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {playlists.appleMusic.map((playlist) => (
                  <div
                    key={playlist.id}
                    onClick={() => handlePlaylistToggle(playlist.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedPlaylists.includes(playlist.id)
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {getPlatformIcon('appleMusic')}
                        <div className="ml-3">
                          <h3 className="font-semibold text-gray-900">{playlist.name}</h3>
                          <p className="text-sm text-gray-600">{playlist.trackCount} tracks</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPlaylists.includes(playlist.id)
                          ? 'border-pink-500 bg-pink-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedPlaylists.includes(playlist.id) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sync Button */}
        {selectedPlaylists.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={handleSync}
              disabled={isSyncing}
              className="bg-primary-600 text-white px-12 py-4 rounded-xl text-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              {isSyncing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Syncing {selectedPlaylists.length} playlists...
                </>
              ) : (
                `Sync ${selectedPlaylists.length} Selected Playlist${selectedPlaylists.length > 1 ? 's' : ''}`
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SyncPlaylist;