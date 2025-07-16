import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
      <div className="flex flex-col items-center space-y-6 animate-fade-in">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-[0_0_25px_theme('colors.primary')]"></div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-primary text-xl font-semibold tracking-wide animate-pulse">
            Loading...
          </p>
          <p className="text-white/70 text-sm mt-1 animate-fade-in delay-200">
            Hang tight while we prep things for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
