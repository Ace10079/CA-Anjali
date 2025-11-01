// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Top Row: Logo + Firm Name */}
        <div
          className={`flex items-center flex-wrap gap-3 transition-all duration-300 ${
            isOpen
              ? "justify-between"
              : "justify-center md:justify-center"
          }`}
        >
          <div
            className={`flex items-center space-x-3 transition-all duration-300 ${
              isOpen ? "justify-start" : "justify-center md:justify-center"
            }`}
          >
            <img
              src="/logo.png"
              alt="CA Logo"
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-blue-700 text-center md:text-center whitespace-nowrap">
              M/s Anjli Goyal & Associates
            </h1>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none absolute right-4 top-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Bottom Row: Navigation */}
        <div className="hidden md:flex justify-center mt-3 space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            CA Services
          </a>

          {/* Loan/Funding Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoanOpen(true)}
            onMouseLeave={() => setLoanOpen(false)}
          >
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
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
                  className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Private Lender Services
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Bank and NBFC Loans
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Legal Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Investment Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 bg-white shadow-md rounded-md overflow-hidden"
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Home
              </a>
              <a href="#" className="block border-t px-4 py-2 hover:bg-gray-100">
                About Us
              </a>
              <a href="#" className="block border-t px-4 py-2 hover:bg-gray-100">
                CA Services
              </a>

              {/* Loan Dropdown */}
              <div className="border-t">
                <button
                  className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => setLoanOpen(!loanOpen)}
                >
                  Loan/Funding Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      loanOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {loanOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <a
                        href="#"
                        className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                      >
                        Private Lender Services
                      </a>
                      <a
                        href="#"
                        className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                      >
                        Bank and NBFC Loans
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#" className="block border-t px-4 py-2 hover:bg-gray-100">
                Legal Services
              </a>
              <a href="#" className="block border-t px-4 py-2 hover:bg-gray-100">
                Investment Services
              </a>
              <a href="#" className="block border-t px-4 py-2 hover:bg-gray-100">
                Contact Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
