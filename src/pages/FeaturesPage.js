import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FeaturesPage = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const featuresRef = useRef(null);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: "Universal Account Linking",
      description: "Connect multiple music streaming accounts seamlessly in one secure platform.",
      color: "blue",
      status: "Live"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Smart Playlist Sync",
      description: "Intelligent synchronization that preserves your music preferences across platforms.",
      color: "green",
      status: "Live"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Social Music Discovery",
      description: "Share and discover music with friends across all connected platforms.",
      color: "purple",
      status: "Live"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "AI Music Recommendations",
      description: "Get personalized music suggestions based on your listening habits across platforms.",
      color: "indigo",
      status: "Beta"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14L17 4M9 9v6M15 9v6" />
        </svg>
      ),
      title: "Duplicate Track Cleanup",
      description: "Automatically detect and remove duplicate songs from your synced playlists.",
      color: "red",
      status: "Coming Soon"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Advanced Analytics",
      description: "Detailed insights into your music listening patterns and playlist performance.",
      color: "yellow",
      status: "Coming Soon"
    }
  ];

  const timeline = [
    {
      date: "January 2024",
      title: "Project Launch",
      description: "Initial release with basic account linking for Spotify and Apple Music",
      improvements: [
        "Basic OAuth integration",
        "Simple playlist viewing",
        "User authentication system"
      ],
      status: "completed"
    },
    {
      date: "March 2024",
      title: "Smart Sync Release",
      description: "Introduced intelligent playlist synchronization with conflict resolution",
      improvements: [
        "Bi-directional playlist sync",
        "Duplicate detection algorithm",
        "Sync conflict resolution",
        "Real-time sync status updates"
      ],
      status: "completed"
    },
    {
      date: "June 2024",
      title: "Social Features",
      description: "Added friend connections and music sharing capabilities",
      improvements: [
        "Friend discovery system",
        "Playlist sharing functionality",
        "Social activity feed",
        "Collaborative playlists"
      ],
      status: "completed"
    },
    {
      date: "September 2024",
      title: "AI Integration",
      description: "Launched AI-powered music recommendations and smart suggestions",
      improvements: [
        "Machine learning recommendation engine",
        "Cross-platform listening analysis",
        "Personalized discovery playlists",
        "Smart playlist generation"
      ],
      status: "current"
    },
    {
      date: "December 2024",
      title: "Advanced Tools",
      description: "Enhanced playlist management with cleanup and analytics tools",
      improvements: [
        "Duplicate track detection",
        "Advanced playlist analytics",
        "Listening habit insights",
        "Performance optimization"
      ],
      status: "upcoming"
    },
    {
      date: "Q1 2025",
      title: "Platform Expansion",
      description: "Support for additional streaming services and enhanced integrations",
      improvements: [
        "YouTube Music integration",
        "Tidal support",
        "Enhanced API capabilities",
        "Third-party app integrations"
      ],
      status: "planned"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleFeatures(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = featuresRef.current?.querySelectorAll('[data-index]');
    featureElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800';
      case 'Beta': return 'bg-yellow-100 text-yellow-800';
      case 'Coming Soon': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTimelineStatus = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'current': return 'bg-blue-500';
      case 'upcoming': return 'bg-yellow-500';
      case 'planned': return 'bg-gray-400';
      default: return 'bg-gray-300';
    }
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful <span className="text-primary-600">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the tools and capabilities that make ChordCircle the ultimate music platform integration solution.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                visibleFeatures.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-6 text-${feature.color}-600`}>
                {feature.icon}
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                  {feature.status}
                </span>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development <span className="text-primary-600">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track our journey and see what improvements we've made along the way
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-12 transition-all duration-500 ${
                  activeTimelineItem === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setActiveTimelineItem(index)}
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${getTimelineStatus(item.status)} shadow-lg`}>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600">{item.date}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                        item.status === 'completed' ? 'bg-green-100 text-green-800' :
                        item.status === 'current' ? 'bg-blue-100 text-blue-800' :
                        item.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Improvements:</h4>
                      <ul className="grid md:grid-cols-2 gap-1">
                        {item.improvements.map((improvement, impIndex) => (
                          <li key={impIndex} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already enjoying seamless music integration across platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/link-account"
                className="bg-white text-primary-600 px-8 py-3 rounded-xl text-lg font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-200 transform hover:shadow-lg"
              >
                Get Started Now
              </Link>
              <Link
                to="/"
                className="border border-primary-400 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-primary-700 hover:scale-105 transition-all duration-200 transform hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;