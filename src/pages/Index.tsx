
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <DownloadSection />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Index;
