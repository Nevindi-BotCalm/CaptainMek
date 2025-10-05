import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Customers from './components/Customers';
import AboutSection from './components/AboutSection'; 

function App() {
  return (
    <div className="App bg-[#0F172A] min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <Customers />
      <AboutSection />
      
    </div>
  )
}

export default App
