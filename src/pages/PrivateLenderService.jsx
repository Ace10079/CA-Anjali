import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function PrivateLenderService() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center bg-[url('/private_lenders.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <motion.div
          {...fadeIn()}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">
            Private Lenders & Funding
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-200">
            Empowering your business growth with trusted private funding,
            partnerships, and strategic financial solutions.
          </p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          {...fadeIn()}
          className="text-2xl sm:text-3xl font-semibold text-[#7DB44B] mb-4 text-center"
        >
          Private Business Funding & Growth Support
        </motion.h2>
        <motion.p
          {...fadeIn(0.2)}
          className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto"
        >
          If anyone needs funds for their business, help in growing operations,
          or loans to stabilize and expand, we provide **Private
          Loan/Funding** through our reputed network of private lenders.  
          <br />
          We specialize in facilitating **business partnerships, joint ventures,
          mergers, and acquisitions** — ensuring that your business gets the
          financial boost it deserves with complete confidentiality and
          professional ethics.
        </motion.p>
      </section>

      {/* Procedure Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <motion.div
          {...fadeIn(0.3)}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-6 text-center">
            Procedure to Follow for Loan
          </h3>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[#7DB44B] text-xl">✔</span>
              <p>
                The applicant seeking funding must visit our office for a
                **personal meeting** along with all relevant documents.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#7DB44B] text-xl">✔</span>
              <p>
                Please take an **appointment** and discuss your loan or concern
                on call beforehand. Based on the discussion, our team will share
                the **required document checklist**.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#7DB44B] text-xl">✔</span>
              <p>
                **Loan processing time** is typically within one month — depending
                on the type of loan and the funding amount requested.
              </p>
            </li>
          </ul>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
