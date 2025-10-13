import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Customers from "./components/Customers";
import AboutSection from "./components/AboutSection";
import EcoSystem from "./components/EcoSystem";
import HowToBuy from "./components/HowToBuySection";
import Footer from "./components/Footer";
import FAQ from "./components/FAQSection";
import BattlePlan from "./components/BattlePlan";
import bgFull from "./assets/fullbackground.webp";
import HitmanMusic from "./assets/Hitman.mp3";

function App() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // preload background
  useEffect(() => {
    const img = new Image();
    img.src = bgFull;
    img.onload = () => setBgLoaded(true);
  }, []);

  // initialize audio
  useEffect(() => {
    const audio = new Audio(HitmanMusic);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // try autoplay
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        console.log("Autoplay blocked until user interaction");
      });

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App relative min-h-screen text-white overflow-x-hidden bg-[#0F172A]">
      {/* Background image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${bgFull})`, zIndex: 0 }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <section id="home">
            <HeroSection />
          </section>

          <Customers />

          <section id="about">
            <AboutSection />
          </section>

          <section id="ecosystem">
            <EcoSystem />
          </section>

          <section id="how-to-buy">
            <HowToBuy />
          </section>

          <section id="battle-plan">
            <BattlePlan />
          </section>

          <section id="faq">
            <FAQ />
          </section>
        </main>

        <Footer />
      </div>

      {/* 🎚 Floating music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 bg-[#FEE5A9] text-black font-bold px-4 py-2 rounded-full shadow-lg hover:bg-[#E5CE9F] transition-all duration-300 z-50"
      >
        {isPlaying ? "🔊 Music On" : "🔇 Music Off"}
      </button>
    </div>
  );
}

export default App;
