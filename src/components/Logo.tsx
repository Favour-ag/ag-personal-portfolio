import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8 animate-scale-in">
      {/* Main AG Logo */}
      <div className="relative">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gray-900 flex items-center justify-center rounded-sm shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <div className="text-white text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
            AG
          </div>
        </div>

        {/* Decorative border */}
        <div className="absolute -inset-2 border-2 border-gray-300 rounded-sm -z-10"></div>
      </div>

      {/* AG DEV Text */}
      <div className="flex flex-col items-center space-y-2">
        {/* AG*/}
        <div className="flex space-x-2 md:space-x-4 lg:space-x-6">
          {["A", "G"].map((letter, index) => (
            <span
              key={letter}
              className="text-lg md:text-2xl lg:text-3xl font-light text-gray-800 tracking-widest animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* DEV */}
        <div className="flex space-x-2 md:space-x-4 lg:space-x-6">
          {["D", "E", "V"].map((letter, index) => (
            <span
              key={letter}
              className="text-lg md:text-2xl lg:text-3xl font-light text-gray-800 tracking-widest animate-fade-in"
              style={{ animationDelay: `${(index + 5) * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;
