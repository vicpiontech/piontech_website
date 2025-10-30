'use client';

import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Set your launch date here
    const launchDate = new Date('2026-01-01T00:00:00');
    
    const calculateTimeLeft = () => {
      const difference = launchDate - new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Logo placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="bg-gray-800 border border-gray-700 rounded-xl w-16 h-16 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-400">P</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Piontech Systems
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          Revolutionizing Technology Solutions
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          We're crafting something incredible. Our cutting-edge platform is almost ready to transform how you interact with technology.
        </p>

        {/* Countdown timer */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-200">Launching in</h2>
          <div className="flex justify-center space-x-2 md:space-x-4">
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>

        {/* Email signup */}
        <div className="max-w-md mx-auto">
          <p className="text-gray-300 mb-4">Get notified when we launch</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900 text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Notify Me
            </button>
          </form>
          {isSubmitted && (
            <p className="mt-3 text-green-400">Thank you! We'll notify you on launch day.</p>
          )}
        </div>

        {/* Social links */}
        <div className="mt-16 flex justify-center space-x-6">
          {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl border border-gray-700 shadow-lg">
        <span className="text-2xl md:text-3xl font-bold">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="mt-2 text-sm text-gray-400">{label}</span>
    </div>
  );
}