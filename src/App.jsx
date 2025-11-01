import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import VisionMission from "./components/VisionMission";
import GrowthStats from "./components/GrowthStats";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <Routes>
          {/* Home page → shows both Carousel and Services */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Services />
                <VisionMission/>
                <GrowthStats/>
                <Industries/>
                <Testimonials/>
                <Footer/>
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
