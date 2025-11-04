import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Services from "./pages/Services";
import VisionMission from "./components/VisionMission";
import GrowthStats from "./components/GrowthStats";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WelcomeSection from "./components/WelcomeSection";

// Individual Service Pages
import CAService from "./pages/CAService";
import PrivateLenderService from "./pages/PrivateLenderService";
import NBFCService from "./pages/NBFCService";
import LegalService from "./pages/LegalService";
import InvestmentService from "./pages/InvestmentService";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <Routes>
          {/* 🏠 Home Page */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <WelcomeSection />
                <Services />
                <VisionMission />
                <GrowthStats />
                <Industries />
                <Testimonials />
                <Footer />
              </>
            }
          />

          {/* 🧩 All Services (Main Listing Page) */}
          <Route path="/services" element={<Services />} />

          {/* 🧾 Individual Service Pages */}
          <Route path="/services/ca-services" element={<CAService />} />
          <Route path="/services/private-lender" element={<PrivateLenderService />} />
          <Route path="/services/nbfc" element={<NBFCService />} />
          <Route path="/services/legal" element={<LegalService />} />
          <Route path="/services/investment" element={<InvestmentService />} />

          {/* 🧱 Optional: Fallback or 404 Page */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
