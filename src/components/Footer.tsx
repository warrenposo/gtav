
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-gta-neon/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SABIR ENTERTAINMENT - All rights reserved.
            </p>
          </div>
          <div className="text-xs text-muted-foreground space-x-4">
            <a href="#" className="hover:text-gta-neon transition-colors">Terms</a>
            <a href="#" className="hover:text-gta-neon transition-colors">Privacy</a>
            <a href="#" className="hover:text-gta-neon transition-colors">Contact</a>
          </div>
          <div className="text-xs text-muted-foreground">
            <p>DISCLAIMER: NEWER VERSIONS WILL BE UPDATED. LET'S KEEP OUR COMMUNITY PRIVATE.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
