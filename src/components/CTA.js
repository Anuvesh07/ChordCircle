import React, { useState, useEffect } from 'react';

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const CTA = () => {
  const [visibleBenefits, setVisibleBenefits] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const benefits = [
    "No credit card required",
    "14-day free trial", 
    "Cancel anytime"
  ];

  const stats = [
    { value: 50000, suffix: "+", label: "Active Users" },
    { value: 99, suffix: "%", label: "Uptime" },
    { value: 24, suffix: "/7", label: "Support" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      benefits.forEach((_, index) => {
        setTimeout(() => {
          setVisibleBenefits(prev => [...prev, index]);
        }, index * 200);
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleStartTrial = () => {
    alert('Starting your free trial! Welcome aboard!');
  };

  const handleContactSales = () => {
    alert('Connecting you with our sales team...');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white opacity-5 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Ready to Get Started?
        </h2>
        <p className={`text-xl text-primary-100 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Join thousands of developers who are already building amazing things. 
          Start your free trial today and see the difference.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button 
            onClick={handleStartTrial}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-200 transform hover:shadow-lg"
          >
            Start Free Trial
          </button>
          <button 
            onClick={handleContactSales}
            className="border border-primary-400 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 hover:scale-105 transition-all duration-200 transform hover:shadow-lg"
          >
            Contact Sales
          </button>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-100">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`flex items-center transition-all duration-500 transform hover:scale-105 ${
                visibleBenefits.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <svg className="w-5 h-5 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {benefit}
            </div>
          ))}
        </div>

        {/* Live stats counter */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <CountUp end={stat.value} duration={2} />
                {stat.suffix}
              </div>
              <div className="text-primary-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;