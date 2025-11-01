// src/components/Carousel.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    title: "Discover the World",
    description:
      "Explore breathtaking destinations and unique experiences around the globe.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80",
    title: "Adventure Awaits",
    description:
      "Find your next adventure — from mountains to beaches and everything in between.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80",
    title: "Luxury Escapes",
    description:
      "Indulge yourself with curated luxury stays and experiences tailored for you.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] sm:h-[70vh] xs:h-[60vh] overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Card Content */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-10 md:left-16 bg-white/90 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl max-w-[90%] sm:max-w-md"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 mb-5 text-sm sm:text-base">
                    {slide.description}
                  </p>
                  <button className="px-4 sm:px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Explore
                  </button>
                </motion.div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
