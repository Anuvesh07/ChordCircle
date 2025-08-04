import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Trending = () => {
  const [trendingTracks, setTrendingTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState('today');

  const mockTrendingData = {
    today: [
      { id: 1, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", plays: "2.1M", trend: "+15%", duration: "3:20", genre: "Pop" },
      { id: 2, title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", plays: "1.8M", trend: "+12%", duration: "3:53", genre: "Pop" },
      { id: 3, title: "Bad Habits", artist: "Ed Sheeran", album: "= (Equals)", plays: "1.5M", trend: "+8%", duration: "3:51", genre: "Pop" },
      { id: 4, title: "Stay", artist: "The Kid LAROI, Justin Bieber", album: "F*CK LOVE 3", plays: "1.3M", trend: "+22%", duration: "2:21", genre: "Pop" },
      { id: 5, title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", plays: "1.2M", trend: "+5%", duration: "3:58", genre: "Indie" },
      { id: 6, title: "As It Was", artist: "Harry Styles", album: "Harry's House", plays: "1.1M", trend: "+18%", duration: "2:47", genre: "Pop" },
      { id: 7, title: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", plays: "1.0M", trend: "+25%", duration: "3:20", genre: "Pop" },
      { id: 8, title: "Unholy", artist: "Sam Smith ft. Kim Petras", album: "Gloria", plays: "950K", trend: "+14%", duration: "2:36", genre: "Pop" },
      { id: 9, title: "Flowers", artist: "Miley Cyrus", album: "Endless Summer Vacation", plays: "890K", trend: "+30%", duration: "3:20", genre: "Pop" },
      { id: 10, title: "Calm Down", artist: "Rema & Selena Gomez", album: "Rave & Roses", plays: "850K", trend: "+20%", duration: "3:59", genre: "Afrobeats" }
    ],
    week: [
      { id: 1, title: "As It Was", artist: "Harry Styles", album: "Harry's House", plays: "15.2M", trend: "+8%", duration: "2:47", genre: "Pop" },
      { id: 2, title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", plays: "14.8M", trend: "+3%", duration: "3:58", genre: "Indie" },
      { id: 3, title: "Stay", artist: "The Kid LAROI, Justin Bieber", album: "F*CK LOVE 3", plays: "13.5M", trend: "+12%", duration: "2:21", genre: "Pop" },
      { id: 4, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", plays: "12.9M", trend: "+5%", duration: "3:20", genre: "Pop" },
      { id: 5, title: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", plays: "12.1M", trend: "+15%", duration: "3:20", genre: "Pop" }
    ],
    month: [
      { id: 1, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", plays: "89.2M", trend: "+2%", duration: "3:20", genre: "Pop" },
      { id: 2, title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", plays: "85.7M", trend: "+1%", duration: "3:53", genre: "Pop" },
      { id: 3, title: "Someone You Loved", artist: "Lewis Capaldi", album: "Divinely Uninspired", plays: "78.3M", trend: "+3%", duration: "3:02", genre: "Pop" },
      { id: 4, title: "Sunflower", artist: "Post Malone & Swae Lee", album: "Spider-Verse Soundtrack", plays: "76.1M", trend: "+1%", duration: "2:38", genre: "Hip-Hop" },
      { id: 5, title: "Dance Monkey", artist: "Tones and I", album: "The Kids Are Coming", plays: "74.8M", trend: "+2%", duration: "3:29", genre: "Pop" }
    ]
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setTrendingTracks(mockTrendingData[timeFilter]);
      setIsLoading(false);
    }, 800);
  }, [timeFilter]);

  const getTrendColor = (trend) => {
    const value = parseInt(trend.replace('%', '').replace('+', ''));
    if (value >= 20) return 'text-green-600 bg-green-100';
    if (value >= 10) return 'text-blue-600 bg-blue-100';
    if (value >= 5) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">Trending</span> Music
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the hottest tracks that everyone's listening to right now
          </p>
        </div>

        {/* Time Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            {[
              { key: 'today', label: 'Today' },
              { key: 'week', label: 'This Week' },
              { key: 'month', label: 'This Month' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setTimeFilter(filter.key)}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                  timeFilter === filter.key
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Trending List */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading trending tracks...</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {trendingTracks.map((track, index) => (
                <div
                  key={track.id}
                  className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    {/* Rank */}
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>

                    {/* Album Art Placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>

                    {/* Track Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{track.title}</h3>
                      <p className="text-gray-600 truncate">{track.artist}</p>
                      <p className="text-sm text-gray-500 truncate">{track.album}</p>
                    </div>

                    {/* Stats */}
                    <div className="hidden md:block text-center">
                      <p className="text-sm font-medium text-gray-900">{track.duration}</p>
                      <p className="text-xs text-gray-500">{track.genre}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{track.plays}</p>
                      <p className="text-xs text-gray-500">plays</p>
                    </div>

                    <div className="text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTrendColor(track.trend)}`}>
                        {track.trend}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 4h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 border border-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors">
            Load More Trending Tracks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;