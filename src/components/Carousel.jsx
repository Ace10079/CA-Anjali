// src/components/Carousel.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
    title: "Empowering Business Growth",
    description:
      "We provide end-to-end Chartered Accountancy, Legal, and Financial services — helping clients achieve stability, growth, and long-term success.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    title: "Trusted Advisors, Professional Excellence",
    description:
      "With a team of experienced professionals, we ensure ethical practices, compliance, and strategic guidance across every business domain.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80",
    title: "Your Partner in Finance & Law",
    description:
      "From Income Tax, GST, and Audit to Legal and Corporate Advisory — we deliver expert solutions tailored to your business needs.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  const handleMouseEnter = () => clearInterval(autoplayRef.current);
  const handleMouseLeave = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(nextSlide, 5000);
  };

  return (
    <div
      className="relative w-full h-[85vh] sm:h-[75vh] overflow-hidden bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Hero carousel"
    >
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
                {/* overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text Card */}
                <motion.div
                  className="
                    absolute z-10 
                    left-1/2 transform -translate-x-1/2 top-6 
                    w-[92%] sm:w-auto sm:left-12 sm:translate-x-0 
                    sm:top-1/2 sm:-translate-y-1/2
                  "
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <div
                    className="
                      relative p-6 sm:p-8 rounded-2xl shadow-2xl
                      bg-gradient-to-br from-white/30 via-white/20 to-white/10
                      backdrop-blur-lg border border-white/30
                      text-center sm:text-left
                      max-w-lg mx-auto sm:mx-0
                    "
                  >
                    {/* Decorative Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 blur-md"></div>

                    {/* Text */}
                    <div className="relative z-10">
                      <h2 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg mb-3">
                        {slide.title}
                      </h2>
                      <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                        {slide.description}
                      </p>

                    
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3 px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-[#7DB44B] scale-125 shadow-md"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
