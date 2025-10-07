import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Customers from './components/Customers';
import AboutSection from './components/AboutSection'; 
import EcoSystem from './components/EcoSystem';

function App() {
  return (
    <div className="App bg-[#0F172A] min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <Customers />
      <AboutSection />
      <EcoSystem />
    </div>
  )
}

export default App
