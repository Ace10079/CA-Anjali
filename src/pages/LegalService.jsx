// src/pages/LegalService.jsx
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function LegalService() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  const legalAreas = [
    { title: "Property Litigations", img: "/legal/property-litigation.jpg" },
    { title: "Criminal Litigations", img: "/legal/criminal-litigation.jpg" },
    { title: "Company Litigation", img: "/legal/company-litigation.jpg" },
    { title: "Information Technology Laws", img: "/legal/it-law.jpg" },
    { title: "Money Recovery Litigation", img: "/legal/money-recovery.jpg" },
    { title: "Registration Of Documents", img: "/legal/document-registration.jpg" },
    { title: "Real Estate & Property Transfer", img: "/legal/real-estate.jpg" },
    { title: "Intellectual Property Rights (IPR)", img: "/legal/ipr.jpg" },
  ];

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
          {legalAreas.map((area, i) => (
            <motion.div
              key={i}
              {...fadeIn(0.05 * i)}
              className="bg-white rounded-2xl shadow hover:shadow-2xl transition overflow-hidden"
            >
              <div className="h-48 bg-gray-100">
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-[#7DB44B]">
                  {area.title}
                </h4>
              </div>
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
              className="px-6 py-2 rounded-md bg-white text-[#0f5132] font-semibold"
            >
              Contact Us
            </a>
            <a
              href="tel:+919876543210"
              className="px-6 py-2 rounded-md border border-white/30"
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
