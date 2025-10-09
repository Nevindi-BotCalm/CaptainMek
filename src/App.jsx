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

function App() {
  return (
    <div className="App bg-[#0F172A] min-h-screen text-white">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
