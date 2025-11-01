// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MySite</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                About Us <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md"
                  >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Team</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Mission</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md"
                  >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Web Development</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">App Development</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">UI/UX Design</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a>

            {/* About Dropdown */}
            <div className="border-t">
              <button
                className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About Us <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <a href="#" className="block pl-8 pr-4 py-2 hover:bg-gray-50">Our Team</a>
                    <a href="#" className="block pl-8 pr-4 py-2 hover:bg-gray-50">Our Mission</a>
                    <a href="#" className="block pl-8 pr-4 py-2 hover:bg-gray-50">Careers</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div className="border-t">
              <button
                className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <a href="#" className="block pl-8 pr-4 py-2 hover:bg-gray-50">Web Development</a>
                    <a href="#" className="block pl-8 pr-4 py-2 hover:bg-gray-50">App Development</a>
                    <a href="#" className="block pl-8 pr-4 py-2 hover:bg-gray-50">UI/UX Design</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#" className="block border-t px-4 py-2 hover:bg-gray-100">Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
