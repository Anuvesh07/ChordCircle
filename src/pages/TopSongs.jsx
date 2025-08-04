import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopSongs = () => {
  const [topSongs, setTopSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chartType, setChartType] = useState('global');

  const mockChartsData = {
    global: [
      { id: 1, title: "As It Was", artist: "Harry Styles", album: "Harry's House", rank: 1, lastRank: 2, weeks: 15, peak: 1, genre: "Pop" },
      { id: 2, title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", rank: 2, lastRank: 1, weeks: 45, peak: 1, genre: "Indie" },
      { id: 3, title: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", rank: 3, lastRank: 5, weeks: 8, peak: 1, genre: "Pop" },
      { id: 4, title: "Unholy", artist: "Sam Smith ft. Kim Petras", album: "Gloria", rank: 4, lastRank: 3, weeks: 12, peak: 2, genre: "Pop" },
      { id: 5, title: "Bad Habit", artist: "Steve Lacy", album: "Gemini Rights", rank: 5, lastRank: 4, weeks: 20, peak: 1, genre: "R&B" },
      { id: 6, title: "Flowers", artist: "Miley Cyrus", album: "Endless Summer Vacation", rank: 6, lastRank: 8, weeks: 6, peak: 1, genre: "Pop" },
      { id: 7, title: "Calm Down", artist: "Rema & Selena Gomez", album: "Rave & Roses", rank: 7, lastRank: 6, weeks: 25, peak: 3, genre: "Afrobeats" },
      { id: 8, title: "Shivers", artist: "Ed Sheeran", album: "= (Equals)", rank: 8, lastRank: 7, weeks: 35, peak: 4, genre: "Pop" },
      { id: 9, title: "Stay", artist: "The Kid LAROI, Justin Bieber", album: "F*CK LOVE 3", rank: 9, lastRank: 10, weeks: 40, peak: 1, genre: "Pop" },
      { id: 10, title: "About Damn Time", artist: "Lizzo", album: "Special", rank: 10, lastRank: 9, weeks: 18, peak: 2, genre: "Pop" }
    ],
    country: [
      { id: 1, title: "Watermelon Moonshine", artist: "Chris Young", album: "Famous Friends", rank: 1, lastRank: 1, weeks: 8, peak: 1, genre: "Country" },
      { id: 2, title: "The Good Ones", artist: "Gabby Barrett", album: "Goldmine", rank: 2, lastRank: 3, weeks: 12, peak: 1, genre: "Country" },
      { id: 3, title: "Cold as You", artist: "Luke Combs", album: "What You See Ain't Always What You Get", rank: 3, lastRank: 2, weeks: 15, peak: 1, genre: "Country" },
      { id: 4, title: "Stay", artist: "The Kid LAROI, Justin Bieber", album: "F*CK LOVE 3", rank: 4, lastRank: 4, weeks: 25, peak: 1, genre: "Pop" },
      { id: 5, title: "Fancy Like", artist: "Walker Hayes", album: "Country Stuff The Album", rank: 5, lastRank: 6, weeks: 30, peak: 3, genre: "Country" }
    ],
    hiphop: [
      { id: 1, title: "First Class", artist: "Jack Harlow", album: "Come Home The Kids Miss You", rank: 1, lastRank: 2, weeks: 10, peak: 1, genre: "Hip-Hop" },
      { id: 2, title: "Wait For U", artist: "Future ft. Drake & Tems", album: "I Never Liked You", rank: 2, lastRank: 1, weeks: 15, peak: 1, genre: "Hip-Hop" },
      { id: 3, title: "Jimmy Cooks", artist: "Drake ft. 21 Savage", album: "Honestly, Nevermind", rank: 3, lastRank: 4, weeks: 8, peak: 1, genre: "Hip-Hop" },
      { id: 4, title: "Big Energy", artist: "Latto", album: "777", rank: 4, lastRank: 3, weeks: 20, peak: 3, genre: "Hip-Hop" },
      { id: 5, title: "Me vs Myself", artist: "A Boogie wit da Hoodie", album: "Me vs Myself", rank: 5, lastRank: 7, weeks: 6, peak: 5, genre: "Hip-Hop" }
    ]
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setTopSongs(mockChartsData[chartType]);
      setIsLoading(false);
    }, 800);
  }, [chartType]);

  const getRankChange = (rank, lastRank) => {
    if (rank < lastRank) return { icon: '↑', color: 'text-green-600', bg: 'bg-green-100' };
    if (rank > lastRank) return { icon: '↓', color: 'text-red-600', bg: 'bg-red-100' };
    return { icon: '→', color: 'text-gray-600', bg: 'bg-gray-100' };
  };

  const getRankBadge = (rank) => {
    if (rank === 1) return 'bg-gradient-to-br from-yellow-400 to-yellow-600';
    if (rank === 2) return 'bg-gradient-to-br from-gray-400 to-gray-600';
    if (rank === 3) return 'bg-gradient-to-br from-orange-400 to-orange-600';
    return 'bg-gradient-to-br from-blue-400 to-blue-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
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
            <span className="text-yellow-600">Top</span> Songs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The official music charts ranking the most popular songs worldwide
          </p>
        </div>

        {/* Chart Type Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            {[
              { key: 'global', label: 'Global Charts' },
              { key: 'country', label: 'Country' },
              { key: 'hiphop', label: 'Hip-Hop' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setChartType(filter.key)}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                  chartType === filter.key
                    ? 'bg-yellow-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Charts List */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="w-12 h-12 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading top songs...</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {topSongs.map((song) => {
                const rankChange = getRankChange(song.rank, song.lastRank);
                return (
                  <div
                    key={song.id}
                    className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Rank */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg ${getRankBadge(song.rank)}`}>
                        {song.rank}
                      </div>

                      {/* Rank Change */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${rankChange.bg}`}>
                        <span className={`text-lg font-bold ${rankChange.color}`}>
                          {rankChange.icon}
                        </span>
                      </div>

                      {/* Album Art Placeholder */}
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>

                      {/* Song Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{song.title}</h3>
                        <p className="text-gray-600 truncate">{song.artist}</p>
                        <p className="text-sm text-gray-500 truncate">{song.album}</p>
                      </div>

                      {/* Chart Stats */}
                      <div className="hidden md:block text-center">
                        <p className="text-sm font-medium text-gray-900">Peak: #{song.peak}</p>
                        <p className="text-xs text-gray-500">{song.weeks} weeks</p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900">{song.genre}</p>
                        <p className="text-xs text-gray-500">Genre</p>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <button className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 4h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button className="w-10 h-10 border border-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-yellow-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-yellow-700 transition-colors">
            View Complete Charts
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSongs;