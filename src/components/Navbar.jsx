// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/60 shadow-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo & Mobile Menu Button */}
        <div className="flex items-center justify-center relative py-1 transition-all duration-300">
          <Link to="/">
            <img
              src="/IMG_1906.PNG"
              alt="CA Logo"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-10 w-64" : "h-12 w-72"
              }`}
            />
          </Link>

          <button
            className="md:hidden absolute right-4 text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center mt-3 space-x-8">
          <Link to="/" className="text-gray-700 hover:text-[#7DB44B] font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-[#7DB44B] font-medium">
            About Us
          </Link>
          <Link to="/services/ca-services" className="text-gray-700 hover:text-[#7DB44B] font-medium">
            CA Services
          </Link>
          <Link to="/services/legal" className="text-gray-700 hover:text-[#7DB44B] font-medium">
            Legal Services
          </Link>
          <Link to="/services/investment" className="text-gray-700 hover:text-[#7DB44B] font-medium">
            Investment Services
          </Link>

          {/* Loan/Funding Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoanOpen(true)}
            onMouseLeave={() => setLoanOpen(false)}
          >
            <button className="flex items-center text-gray-700 hover:text-[#7DB44B] transition">
              Loan/Funding Services
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            <AnimatePresence>
              {loanOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-56 bg-white/80 backdrop-blur-md shadow-lg rounded-md overflow-hidden border border-gray-100"
                >
                  <Link
                    to="/services/private-lender"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                  >
                    Private Lender Services
                  </Link>
                  <Link
                    to="/services/nbfc"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                  >
                    Bank and NBFC Loans
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" className="text-gray-700 hover:text-[#7DB44B] font-medium">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 bg-white/80 backdrop-blur-md rounded-md shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="divide-y divide-gray-200">
                <Link
                  to="/"
                  className="block px-4 py-3 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-3 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/services/ca-services"
                  className="block px-4 py-3 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                  onClick={() => setIsOpen(false)}
                >
                  CA Services
                </Link>

                {/* Loan/Funding Dropdown in Mobile */}
                <div>
                  <button
                    className="flex justify-between items-center w-full px-4 py-3 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                    onClick={() => setLoanOpen(!loanOpen)}
                  >
                    Loan/Funding Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        loanOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {loanOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to="/services/private-lender"
                          className="block pl-8 pr-4 py-2 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                          onClick={() => setIsOpen(false)}
                        >
                          Private Lender Services
                        </Link>
                        <Link
                          to="/services/nbfc"
                          className="block pl-8 pr-4 py-2 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                          onClick={() => setIsOpen(false)}
                        >
                          Bank and NBFC Loans
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/services/legal"
                  className="block px-4 py-3 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Legal Services
                </Link>
                <Link
                  to="/services/investment"
                  className="block px-4 py-3 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Investment Services
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-gray-700 hover:bg-[#7DB44B]/10 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
