// import "./index.css";
// import CursorTrail from "./components/CursorTrail";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Customers from "./components/Customers";
// import AboutSection from "./components/AboutSection";
// import EcoSystem from "./components/EcoSystem";
// import HowToBuy from "./components/HowToBuySection";
// import Footer from "./components/Footer";
// import FAQ from "./components/FAQSection";
// import BattlePlan from "./components/BattlePlan";

// function App() {
//   return (
//     <div className="App bg-[#0F172A] min-h-screen text-white overflow-x-hidden">
//       {/* <CursorTrail /> */}
//       <Navbar />

//       <main>
//         <section id="home">
//           <HeroSection />
//         </section>

//         <Customers />

//         <section id="about">
//           <AboutSection />
//         </section>

//         <section id="ecosystem">
//           <EcoSystem />
//         </section>

//         <section id="how-to-buy">
//           <HowToBuy />
//         </section>

//         <section id="battle-plan">
//           <BattlePlan />
//         </section>

//         <section id="faq">
//           <FAQ />
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

// {/* With background image*/}

import React, { useEffect, useState } from "react";
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

function App() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgFull;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div className="App relative min-h-screen text-white overflow-x-hidden bg-[#0F172A]">
      {/* Background image (fades in) */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${bgFull})`, zIndex: 0 }}
      ></div>

      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

      {/* Content layer */}
      <div className="relative z-10">
        {/* <CursorTrail /> */}
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
    </div>
  );
}

export default App;
