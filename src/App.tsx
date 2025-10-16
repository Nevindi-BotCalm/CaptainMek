import { useEffect, useRef, useState } from 'react';
import './index.css';
import './App.css';
import './i18n';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Customers from './components/Customers';
import AboutSection from './components/AboutSection';
import EcoSystem from './components/EcoSystem';
import HowToBuy from './components/HowToBuySection';
import Footer from './components/Footer';
import FAQ from './components/FAQSection';
import BattlePlan from './components/BattlePlan';
import bgFull from './assets/fullbackground.webp';
import HitmanMusic from './assets/Hitman.mp3';

function App() {
  const [bgLoaded, setBgLoaded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
        console.log('Autoplay blocked until user interaction');
      });

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = (): void => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Smooth scroll animation observer
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all elements with scroll-animate classes
    const animateElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );
    
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App relative min-h-screen overflow-x-hidden  text-white">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          bgLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${bgFull})`, zIndex: 0 }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <section id="home">
            <HeroSection />
          </section>

          <div className="scroll-animate">
            <Customers />
          </div>

          <section id="about" className="scroll-animate">
            <AboutSection />
          </section>

          <section id="ecosystem" className="scroll-animate">
            <EcoSystem />
          </section>

          <section id="how-to-buy" className="scroll-animate">
            <HowToBuy />
          </section>

          <section id="battle-plan" className="scroll-animate">
            <BattlePlan />
          </section>

          <section id="faq" className="scroll-animate">
            <FAQ />
          </section>
        </main>

        <Footer />
      </div>

      {/* 🎚 Floating music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed right-5 bottom-5 z-50 rounded-full bg-[#FEE5A9] px-4 py-2 font-bold text-black shadow-lg transition-all duration-300 hover:bg-[#E5CE9F]"
      >
        {isPlaying ? '🔊 Music On' : '🔇 Music Off'}
      </button>
    </div>
  );
}

export default App;
