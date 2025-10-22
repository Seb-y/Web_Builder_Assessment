import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SellSection from "./components/SellSection";
import TrustedBy from "./components/TrustedBy";
import PhotoGallery from "./components/PhotoGallery";
import ServiceSection from "./components/ServiceSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Read saved theme or device preference on first render
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      return savedTheme === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update <html> class and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <TrustedBy />
      <SellSection />
      {/* <ServiceSection /> */}
      <PhotoGallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
