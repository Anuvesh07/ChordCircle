import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [newFriendEmail, setNewFriendEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingFriend, setIsAddingFriend] = useState(false);

  // Mock user profile data
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'JD',
    joinedDate: 'January 2024',
    totalPlaylists: 24,
    sharedPlaylists: 8,
    friendsCount: 12,
    favoriteGenres: ['Pop', 'Rock', 'Electronic', 'Jazz'],
    recentActivity: 'Synced 3 playlists • 2 hours ago'
  };

  // Mock friends data
  const mockFriends = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      avatar: 'AJ',
      status: 'online',
      mutualFriends: 5,
      sharedPlaylists: 3,
      lastActive: 'Active now',
      favoriteGenre: 'Pop'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      avatar: 'BS',
      status: 'offline',
      mutualFriends: 2,
      sharedPlaylists: 1,
      lastActive: '2 hours ago',
      favoriteGenre: 'Rock'
    },
    {
      id: 3,
      name: 'Carol Williams',
      email: 'carol@example.com',
      avatar: 'CW',
      status: 'online',
      mutualFriends: 8,
      sharedPlaylists: 5,
      lastActive: 'Active now',
      favoriteGenre: 'Jazz'
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david@example.com',
      avatar: 'DB',
      status: 'away',
      mutualFriends: 3,
      sharedPlaylists: 2,
      lastActive: '30 minutes ago',
      favoriteGenre: 'Electronic'
    },
    {
      id: 5,
      name: 'Emma Davis',
      email: 'emma@example.com',
      avatar: 'ED',
      status: 'online',
      mutualFriends: 6,
      sharedPlaylists: 4,
      lastActive: 'Active now',
      favoriteGenre: 'Indie'
    }
  ];

  useEffect(() => {
    // Simulate loading friends
    setTimeout(() => {
      setFriends(mockFriends);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleAddFriend = async (e) => {
    e.preventDefault();
    if (!newFriendEmail.trim()) return;

    setIsAddingFriend(true);
    
    // Simulate API call
    setTimeout(() => {
      const newFriend = {
        id: friends.length + 1,
        name: newFriendEmail.split('@')[0],
        email: newFriendEmail,
        avatar: newFriendEmail.charAt(0).toUpperCase() + newFriendEmail.charAt(1).toUpperCase(),
        status: 'offline',
        mutualFriends: 0,
        sharedPlaylists: 0,
        lastActive: 'Just added',
        favoriteGenre: 'Unknown'
      };
      
      setFriends(prev => [...prev, newFriend]);
      setNewFriendEmail('');
      setShowAddFriend(false);
      setIsAddingFriend(false);
    }, 1500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* User Profile Section */}
          <div className="lg:col-span-4 mb-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {userProfile.avatar}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{userProfile.name}</h1>
                  <p className="text-gray-600 mb-4">{userProfile.email}</p>
                  <p className="text-sm text-gray-500 mb-4">Member since {userProfile.joinedDate}</p>
                  <p className="text-sm text-primary-600 font-medium">{userProfile.recentActivity}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">{userProfile.totalPlaylists}</div>
                    <div className="text-sm text-gray-600">Total Playlists</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{userProfile.sharedPlaylists}</div>
                    <div className="text-sm text-gray-600">Shared</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{userProfile.friendsCount}</div>
                    <div className="text-sm text-gray-600">Friends</div>
                  </div>
                </div>
              </div>

              {/* Favorite Genres */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Favorite Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {userProfile.favoriteGenres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Friends Section */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              {/* Friends Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Friends</h2>
                  <p className="text-gray-600">Connect and share music with your friends</p>
                </div>
                <button
                  onClick={() => setShowAddFriend(true)}
                  className="bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Friend
                </button>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search friends..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Friends List */}
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading your friends...</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFriends.map((friend) => (
                    <div
                      key={friend.id}
                      className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            {friend.avatar}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(friend.status)} rounded-full border-2 border-white`}></div>
                        </div>
                        <div className="ml-3 flex-1">
                          <h3 className="font-semibold text-gray-900">{friend.name}</h3>
                          <p className="text-sm text-gray-600">{friend.lastActive}</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Mutual Friends:</span>
                          <span className="font-medium">{friend.mutualFriends}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shared Playlists:</span>
                          <span className="font-medium">{friend.sharedPlaylists}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Favorite Genre:</span>
                          <span className="font-medium">{friend.favoriteGenre}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex space-x-2">
                        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                          Message
                        </button>
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredFriends.length === 0 && !isLoading && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-600">No friends found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add Friend Modal */}
      {showAddFriend && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Add New Friend</h3>
              <button
                onClick={() => setShowAddFriend(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleAddFriend}>
              <div className="mb-6">
                <label htmlFor="friendEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Friend's Email Address
                </label>
                <input
                  type="email"
                  id="friendEmail"
                  value={newFriendEmail}
                  onChange={(e) => setNewFriendEmail(e.target.value)}
                  placeholder="friend@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddFriend(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAddingFriend}
                  className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isAddingFriend ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Adding...
                    </>
                  ) : (
                    'Send Invite'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Friends;