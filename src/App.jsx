import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SellSection from "./components/SellSection";
import TrustedBy from "./components/TrustedBy";
import PhotoGallery from "./components/PhotoGallery";
import ServiceSection from "./components/ServiceSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      <Navbar />
      <HeroSection />
      <SellSection />
      {/* <ServiceSection /> */}
      <TrustedBy />
      <PhotoGallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
