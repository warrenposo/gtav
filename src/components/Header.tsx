import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 md:py-8 bg-gta-header backdrop-blur-md border-b border-gta-neon/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-gta-neon text-3xl md:text-5xl font-bold tracking-wider animate-glow gta-title">
            SABIR ENTERTAINMENT
          </h1>
          <p className="text-gta-neon text-sm md:text-base mt-2 font-semibold">
            (UNRELEASED VERSIONS)
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
