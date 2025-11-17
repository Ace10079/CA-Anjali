// Updated Carousel.jsx with enhanced animations and welcome button
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/C1.JPG",
    title: "Empowering Business Growth",
    description:
      "We provide end-to-end Chartered Accountancy, Legal, and Financial services — helping clients achieve stability, growth, and long-term success.",
    buttonText: "Get Started"
  },
  {
    id: 2,
    image: "/C2.JPG",
    title: "Trusted Advisors, Professional Excellence",
    description:
      "With a team of experienced professionals, we ensure ethical practices, compliance, and strategic guidance across every business domain.",
    buttonText: "Learn More"
  },
  {
    id: 3,
    image: "/C3.JPG",
    title: "Your Partner in Finance & Law",
    description:
      "From Income Tax, GST, and Audit to Legal and Corporate Advisory — we deliver expert solutions tailored to your business needs.",
    buttonText: "Our Services"
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 0: next, 1: previous
  const autoplayRef = useRef(null);
  const navigate = useNavigate();

  const nextSlide = () => {
    setDirection(0);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > current ? 0 : 1);
    setCurrent(index);
  };

  const goToWelcome = () => {
    navigate("/welcome");
  };

  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  const handleMouseEnter = () => clearInterval(autoplayRef.current);
  const handleMouseLeave = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(nextSlide, 5000);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction === 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction === 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(125, 180, 75, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div
      className="relative w-full h-[90vh] sm:h-[80vh] md:h-[85vh] overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.8 }
          }}
          className="absolute inset-0"
        >
          {/* Full Image */}
          <motion.img
            src={slides[current].image}
            alt="carousel slide"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

          {/* Text Content */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-8 sm:left-12 sm:translate-x-0 sm:top-1/2 sm:-translate-y-1/2 z-20 w-[92%] sm:w-auto"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative p-6 sm:p-8 rounded-2xl shadow-2xl bg-white/15 backdrop-blur-xl border border-white/30 text-center sm:text-left max-w-lg mx-auto sm:mx-0 overflow-hidden">
              {/* Animated Background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Shine Effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              />

              <div className="relative z-10 space-y-4">
                <motion.h2 
                  className="text-2xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg"
                  variants={itemVariants}
                >
                  {slides[current].title}
                </motion.h2>
                
                <motion.p 
                  className="text-gray-100 text-sm sm:text-base leading-relaxed"
                  variants={itemVariants}
                >
                  {slides[current].description}
                </motion.p>

                <motion.button
                  onClick={goToWelcome}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  className="px-8 py-3 bg-[#7DB44B] text-white font-semibold rounded-lg shadow-lg mt-4"
                >
                  {slides[current].buttonText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Navigation Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-[#7DB44B]"
                : "bg-white/50 hover:bg-white/80"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {index === current && (
              <motion.div
                className="absolute inset-0 rounded-full bg-[#7DB44B]"
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-[#7DB44B] z-30"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
        key={current}
      />
    </div>
  );
}