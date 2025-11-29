import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MeritDemerit } from './components/MeritDemerit';
import { AiConsultant } from './components/AiConsultant';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Trust } from './components/Trust';
import { ScratchDemo } from './components/ScratchDemo';
import { Gallery } from './components/Gallery';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <ScratchDemo />
        <Gallery />
        <MeritDemerit />
        <Trust />
        <AiConsultant />
        <Reservation />
      </main>

      <Footer />
    </div>
  );
}
