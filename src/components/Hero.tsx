
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white gta-title animate-float">
            <span className="text-gta-pink">GRAND</span> <span className="text-white">THEFT</span> <span className="text-gta-orange">AUTO</span> <span className="text-gta-neon">VI</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-[700px] mt-4">
            The next chapter in the groundbreaking Grand Theft Auto series is here. Experience Vice City like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="version-tag px-4 py-2 rounded-lg">
              <span className="text-gta-neon font-medium">PC Version 1.112</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
