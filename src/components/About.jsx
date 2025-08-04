import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            About <span className="text-primary-600">ChordCircle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Revolutionizing how you experience music across all platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ChordCircle was born from a simple frustration: why should your music experience be fragmented across different platforms? We believe that your favorite songs, carefully curated playlists, and music discoveries should seamlessly flow between Spotify, Apple Music, and beyond.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to break down the walls between music streaming services, creating a unified experience that puts you in control of your musical journey.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Trusted by thousands of music lovers worldwide</span>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
                    <div className="text-gray-600">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">1M+</div>
                    <div className="text-gray-600">Synced Playlists</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                    <div className="text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary-300 rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Universal Connection</h3>
            <p className="text-gray-600">Connect all your music streaming accounts in one secure platform</p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Sync</h3>
            <p className="text-gray-600">Intelligent playlist synchronization that preserves your music preferences</p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.7s'}}>
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Discovery</h3>
            <p className="text-gray-600">Share and discover music with friends across all platforms</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 animate-fade-in-up">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">John Doe</h4>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-500">Music enthusiast and tech visionary</p>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Jane Smith</h4>
              <p className="text-gray-600 mb-2">CTO</p>
              <p className="text-sm text-gray-500">Full-stack developer and music API expert</p>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MB</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mike Brown</h4>
              <p className="text-gray-600 mb-2">Head of Design</p>
              <p className="text-sm text-gray-500">UX designer passionate about music interfaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;