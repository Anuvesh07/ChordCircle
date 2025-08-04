import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('recent');

  const mockFavoritesData = {
    recent: [
      { id: 1, title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line", plays: 127, rating: 5, dateAdded: "2 days ago", genre: "Pop", duration: "2:54" },
      { id: 2, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", plays: 89, rating: 5, dateAdded: "1 week ago", genre: "Pop", duration: "3:23" },
      { id: 3, title: "Good 4 U", artist: "Olivia Rodrigo", album: "SOUR", plays: 156, rating: 5, dateAdded: "2 weeks ago", genre: "Pop", duration: "2:58" },
      { id: 4, title: "Peaches", artist: "Justin Bieber ft. Daniel Caesar", album: "Justice", plays: 203, rating: 4, dateAdded: "3 weeks ago", genre: "Pop", duration: "3:18" },
      { id: 5, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", plays: 245, rating: 5, dateAdded: "1 month ago", genre: "Pop", duration: "3:20" },
      { id: 6, title: "drivers license", artist: "Olivia Rodrigo", album: "SOUR", plays: 178, rating: 5, dateAdded: "1 month ago", genre: "Pop", duration: "4:02" },
      { id: 7, title: "positions", artist: "Ariana Grande", album: "Positions", plays: 134, rating: 4, dateAdded: "2 months ago", genre: "Pop", duration: "2:52" },
      { id: 8, title: "Mood", artist: "24kGoldn ft. iann dior", album: "El Dorado", plays: 167, rating: 4, dateAdded: "2 months ago", genre: "Hip-Hop", duration: "2:20" }
    ],
    mostPlayed: [
      { id: 5, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", plays: 245, rating: 5, dateAdded: "1 month ago", genre: "Pop", duration: "3:20" },
      { id: 4, title: "Peaches", artist: "Justin Bieber ft. Daniel Caesar", album: "Justice", plays: 203, rating: 4, dateAdded: "3 weeks ago", genre: "Pop", duration: "3:18" },
      { id: 6, title: "drivers license", artist: "Olivia Rodrigo", album: "SOUR", plays: 178, rating: 5, dateAdded: "1 month ago", genre: "Pop", duration: "4:02" },
      { id: 8, title: "Mood", artist: "24kGoldn ft. iann dior", album: "El Dorado", plays: 167, rating: 4, dateAdded: "2 months ago", genre: "Hip-Hop", duration: "2:20" },
      { id: 3, title: "Good 4 U", artist: "Olivia Rodrigo", album: "SOUR", plays: 156, rating: 5, dateAdded: "2 weeks ago", genre: "Pop", duration: "2:58" }
    ],
    topRated: [
      { id: 1, title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line", plays: 127, rating: 5, dateAdded: "2 days ago", genre: "Pop", duration: "2:54" },
      { id: 2, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", plays: 89, rating: 5, dateAdded: "1 week ago", genre: "Pop", duration: "3:23" },
      { id: 3, title: "Good 4 U", artist: "Olivia Rodrigo", album: "SOUR", plays: 156, rating: 5, dateAdded: "2 weeks ago", genre: "Pop", duration: "2:58" },
      { id: 5, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", plays: 245, rating: 5, dateAdded: "1 month ago", genre: "Pop", duration: "3:20" },
      { id: 6, title: "drivers license", artist: "Olivia Rodrigo", album: "SOUR", plays: 178, rating: 5, dateAdded: "1 month ago", genre: "Pop", duration: "4:02" }
    ]
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setFavorites(mockFavoritesData[sortBy]);
      setIsLoading(false);
    }, 800);
  }, [sortBy]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ));
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
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
            Your <span className="text-pink-600">Favorites</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All your loved tracks in one place, curated by your personal taste
          </p>
        </div>

        {/* Sort Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            {[
              { key: 'recent', label: 'Recently Added' },
              { key: 'mostPlayed', label: 'Most Played' },
              { key: 'topRated', label: 'Top Rated' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSortBy(filter.key)}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                  sortBy === filter.key
                    ? 'bg-pink-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Favorites List */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="w-12 h-12 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your favorites...</p>
            </div>
          ) : favorites.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="text-gray-600">No favorites found. Start adding some tracks!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {favorites.map((track, index) => (
                <div
                  key={track.id}
                  className="p-6 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    {/* Heart Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
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

                    {/* Rating */}
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        {renderStars(track.rating)}
                      </div>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>

                    {/* Stats */}
                    <div className="hidden md:block text-center">
                      <p className="text-sm font-medium text-gray-900">{track.plays} plays</p>
                      <p className="text-xs text-gray-500">{track.duration}</p>
                    </div>

                    <div className="hidden md:block text-center">
                      <p className="text-sm font-medium text-gray-900">{track.genre}</p>
                      <p className="text-xs text-gray-500">{track.dateAdded}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <button className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 4h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => removeFavorite(track.id)}
                        className="w-10 h-10 border border-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">{favorites.length}</div>
            <div className="text-gray-600">Favorite Tracks</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">
              {favorites.reduce((sum, track) => sum + track.plays, 0)}
            </div>
            <div className="text-gray-600">Total Plays</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">
              {(favorites.reduce((sum, track) => sum + track.rating, 0) / favorites.length || 0).toFixed(1)}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;