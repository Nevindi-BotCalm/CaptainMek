import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Customers from './components/Customers';
import AboutSection from './components/AboutSection'; 
import EcoSystem from './components/EcoSystem';
import HowToBuy from './components/HowToBuySection';
import Footer from './components/Footer';
import FAQ from './components/FAQSection'

function App() {
  return (
    <div className="App bg-[#0F172A] min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <Customers />
      <AboutSection />
      <EcoSystem />
      <HowToBuy />
       <FAQ />
      {/* <Footer /> */}
     
    </div>
  )
}

export default App
