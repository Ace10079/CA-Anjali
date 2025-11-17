// src/pages/LegalService.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";

export default function LegalService() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  const legalAreas = [
    { 
      title: "Property Litigations", 
      img: "/L1.JPG",
      description: "Our legal experts are highly experienced in handling property disputes, including issues related to ownership, tenancy, and transfer of property. We provide comprehensive support to resolve propertyrelated conflicts efficiently",
      
    },
    { 
      title: "Criminal Litigations", 
      img: "/L2.JPG",
      description: " We offer expert representation in criminal cases, providing the highest level of defense or prosecution services to protect your rights and interests, no matter the complexity of the case.",
    },
    { 
      title: "Company Litigation", 
      img: "/L3.JPG",
      description: "Whether you're dealing with shareholder disputes, corporate governance issues, or any other corporate matter, we provide professional litigation services to resolve business-related legal challenges",
      
    },
    { 
      title: "Information Technology Laws", 
      img: "/L4.JPG",
      description: "Legal expertise in cyber laws, data protection, digital contracts, and IT compliance matters.",
      features: ["Cyber Law Compliance", "Data Protection", "Digital Contracts", "IT Act Advisory"]
    },
    { 
      title: "Money Recovery Litigation", 
      img: "/L5.JPG",
      description: "Effective debt recovery solutions through legal channels including suits and arbitration.",
      features: ["Debt Recovery Suits", "Arbitration", "Loan Recovery", "Payment Disputes"]
    },
    { 
      title: "Registration Of Documents", 
      img: "/L6.JPG",
      description: "We provide expert services for the registration of various legal documents, ensuring all paperwork is handled professionally and in compliance with applicable laws",
    },
    { 
      title: "Real Estate & Property Transfer", 
      img: "/L7.JPG",
      description: "We offer comprehensive services for real estate transactions,including the transfer of property, legal documentation, and ensuring all processes are conducted smoothly and in line with the law",
    },
    { 
      title: "Intellectual Property Rights (IPR)", 
      img: "/L8.JPG",
      description: "Our firm provides legal services related to intellectual property rights, including patents, trademarks, copyrights, and more, protecting your creative and business assets",
    },
  ];

  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const cardVariants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 180 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center bg-[url('/legal-servies.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        <motion.div {...fadeIn()} className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Legal Services
          </h1>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto mt-3">
            Professional legal solutions across civil, corporate, property, and
            criminal domains — simplifying complex legal hurdles for clients
            worldwide.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          {...fadeIn()}
          className="text-2xl sm:text-3xl font-semibold text-[#7DB44B] text-center mb-6"
        >
          Expertise in Legal Services
        </motion.h2>
        <motion.p
          {...fadeIn(0.2)}
          className="text-gray-700 leading-relaxed text-center max-w-5xl mx-auto"
        >
          Our team provides services in the legal field at both domestic and
          international levels. Our primary goal is to **simplify legal
          complications** and resolve challenges through the best possible
          approaches in accordance with prevailing laws.  
          <br />
          <br />
          Our **young and dynamic legal experts** stay updated with the latest
          amendments and leverage modern technology to deliver swift and
          reliable solutions. With a **crystal-clear vision, expert strategies,
          and personalized attention**, we aim to be among the leading law
          chambers globally.
        </motion.p>
      </section>

      {/* Legal Areas Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <motion.h3
          {...fadeIn()}
          className="text-2xl sm:text-3xl font-semibold text-[#7DB44B] text-center mb-8"
        >
          Our Legal Expertise
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalAreas.map((area, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.05 * index)}
              className="relative h-80 cursor-pointer"
              onClick={() => toggleFlip(index)}
            >
              {/* Flip Card Container */}
              <motion.div
                className="relative w-full h-full"
                variants={cardVariants}
                initial="initial"
                animate={flippedCards[index] ? "flipped" : "initial"}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of Card */}
                <div 
                  className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="h-48 bg-gray-100">
                    <img
                      src={area.img}
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="text-lg font-semibold text-[#7DB44B] mb-3">
                      {area.title}
                    </h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-[#7DB44B] text-white text-sm font-medium rounded-lg hover:bg-[#6a9a3f] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip(index);
                      }}
                    >
                      Know More
                    </motion.button>
                  </div>
                </div>

                {/* Back of Card (Details) */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#7DB44B] to-[#5a8c29] text-white rounded-2xl shadow-lg p-6 overflow-y-auto"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)" 
                  }}
                >
                  <div className="flex flex-col h-full">
                    <h4 className="text-xl font-bold mb-3 text-white">
                      {area.title}
                    </h4>
                    
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">
                      {area.description}
                    </p>

                   

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-4 py-2 bg-white text-[#7DB44B] text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip(index);
                      }}
                    >
                      Back to Overview
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global & Domestic Legal Work */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div {...fadeIn(0.1)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            Global & Domestic Legal Practice
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We offer legal services both domestically and internationally through
            strategic alliances with law firms worldwide. This enables us to
            handle diverse cases, from **property matters and corporate disputes
            to criminal litigations and intellectual property rights**, across
            jurisdictions.  
            <br />
            <br />
            Our experience spans **Property Disputes, Legal Matters in Lower
            Courts, Sessions Courts, and High Courts**, ensuring comprehensive
            representation and reliable advice at every step.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          {...fadeIn(0.2)}
          className="bg-[#7DB44B] text-white rounded-2xl p-10 text-center shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-3">
            Need Legal Assistance?
          </h3>
          <p className="text-sm mb-6 opacity-90">
            Connect with our experienced legal team for quick and confidential
            consultation on any legal matter.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="px-6 py-2 rounded-md bg-white text-[#0f5132] font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+919876543210"
              className="px-6 py-2 rounded-md border border-white/30 hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}