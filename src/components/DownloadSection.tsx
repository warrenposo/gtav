import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const DownloadSection = () => {
  const navigate = useNavigate();

  const handleDownload = (version: 'pc' | 'mobile') => {
    console.log(`Starting download process for ${version} version`);
    navigate(`/payment?version=${version}`);
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* PC Version */}
          <div className="relative overflow-hidden group">
            <div className="crypto-card flex flex-col h-full p-6 rounded-xl backdrop-blur-md border transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,204,0.5)]">
              <div className="flex-1 space-y-4">
                <div className="space-y-2 text-center">
                  <div className="inline-block p-2 bg-white/5 rounded-lg mb-4">
                    <svg
                      className="w-10 h-10 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">PC Version</h3>
                  <p className="text-muted-foreground">Experience the full power of Vice City on your desktop</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Enhanced graphics and ray tracing
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Optimized performance up to 144fps
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mouse & keyboard enhanced controls
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced mod support
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl font-bold text-white">$25</span>
                  <Button 
                    className="download-button text-primary-foreground font-bold py-6"
                    onClick={() => handleDownload('pc')}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PC Version
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-gta-neon/50 pointer-events-none rounded-xl transition-all duration-300"></div>
          </div>
          
          {/* Mobile Version */}
          <div className="relative overflow-hidden group">
            <div className="crypto-card flex flex-col h-full p-6 rounded-xl backdrop-blur-md border transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,204,0.5)]">
              <div className="flex-1 space-y-4">
                <div className="space-y-2 text-center">
                  <div className="inline-block p-2 bg-white/5 rounded-lg mb-4">
                    <svg
                      className="w-10 h-10 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">Mobile Version</h3>
                  <p className="text-muted-foreground">Take Vice City with you wherever you go</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Optimized for touch controls
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Battery-efficient performance
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Offline play support
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gta-neon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cloud save compatibility
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl font-bold text-white">$10</span>
                  <Button 
                    className="download-button text-primary-foreground font-bold py-6"
                    onClick={() => handleDownload('mobile')}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Mobile Version
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-gta-neon/50 pointer-events-none rounded-xl transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
