// src/pages/NBFCService.jsx
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function NBFCService() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  const products = [
    {
      id: "mortgage",
      title: "Mortgage / Loan Against Property",
      desc:
        "Raise funds by mortgaging existing property — ideal for business expansion, working capital, or debt consolidation.",
      img: "/mortgage.JPG",
    },
    {
      id: "home",
      title: "Home Loan",
      desc:
        "Flexible home loan options with competitive rates to help clients fulfill their dream of owning a home.",
      img: "/home.JPG",
    },
    {
      id: "personal",
      title: "Personal Loan",
      desc:
        "Unsecured credit to meet immediate needs—marriage, travel, home refurbishing, education, and more.",
      img: "/B3.JPG",
    },
    {
      id: "business",
      title: "Business Loan",
      desc:
        "Term loans and working capital facilities for startups and established businesses to grow operations.",
      img: "/business.JPG",
    },
    {
      id: "term",
      title: "Term Loan",
      desc:
        "Short / intermediate / long-term financing options structured to match repayment capacity and growth plans.",
      img: "/term.JPG",
    },
    {
      id: "subsidy",
      title: "Government Subsidy Loans",
      desc:
        "Assistance in obtaining government-backed subsidy schemes and preparing eligibility documentation.",
      img: "/government.JPG",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center bg-[url('/NBFC.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        <motion.div
          {...fadeIn()}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Bank & NBFC Loan Services
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
            Trusted loan solutions — Loan Against Property, Home Loan, Personal
            Loan, Business Loan, Term Loan, Working Capital and Government
            subsidy assistance. Over 12,000 satisfied customers and 40+ partner
            banks.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-block px-6 py-2 rounded-md bg-[#7DB44B] text-white font-medium shadow hover:brightness-95 transition"
            >
              Apply / Contact Us
            </a>
            <a
              href="#products"
              className="inline-block px-6 py-2 rounded-md bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
            >
              Explore Products
            </a>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <motion.div
          {...fadeIn()}
          className="bg-white/60 backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center justify-between shadow"
        >
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#7DB44B]">Trusted Network</h3>
            <p className="text-gray-700 mt-2">
              Associated with major banks & financial institutions nationwide.
            </p>
          </div>

          <div className="flex gap-8 items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#7DB44B]">12,000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#7DB44B]">40+</div>
              <div className="text-sm text-gray-600">Partner Banks</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section id="products" className="max-w-6xl mx-auto px-6 pb-16">
        <motion.h2 {...fadeIn()} className="text-2xl sm:text-3xl font-semibold text-[#7DB44B] mb-6 text-center">
          Our Loan Products
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              {...fadeIn(0.05 * i)}
              className="bg-white rounded-2xl shadow hover:shadow-2xl transition overflow-hidden"
            >
              <div className="h-40 bg-gray-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#7DB44B]">{p.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>
                <div className="mt-4 flex justify-between items-center">
                
                  <a
                    href="/contact"
                    className="text-sm px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CMA & Project Reports */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div {...fadeIn()}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">Project Reports & CMA Data</h3>
          <p className="text-gray-700 leading-relaxed">
            We prepare professional project reports and CMA (Credit Monitoring
            Arrangement) data required by banks to evaluate loan proposals.
            Our reports include cash flow projections, working capital analysis,
            ratio analysis, and realistic repayment schedules — increasing the
            chances of loan approval and better negotiating terms with lenders.
          </p>
        </motion.div>
      </section>

      {/* Working Capital Explanation */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div {...fadeIn(0.1)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">Working Capital</h3>
          <p className="text-gray-700 leading-relaxed">
            Working capital facilities are designed to finance day-to-day
            operations — payments to creditors, stock/raw material purchases,
            payroll and other operating expenses. Interest is charged only on
            the utilized amount, so clients benefit from cost-efficient short
            term financing.
          </p>
        </motion.div>
      </section>

      {/* Partner Banks (logos/text) */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.h4 {...fadeIn(0.15)} className="text-xl font-semibold text-gray-700 mb-6 text-center">
          Selected Partner Banks & Institutions
        </motion.h4>
        <motion.div {...fadeIn(0.2)} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {[
            "HDFC Bank",
            "ICICI Bank",
            "Axis Bank",
            "SBI",
            "Yes Bank",
            "Kotak Bank",
            "Standard Chartered",
            "PNB HFC",
            "Bank of India",
            "Deutsche Bank",
            "IndiaBulls",
            "BOI",
          ].map((b, idx) => (
            <div key={idx} className="text-sm text-gray-700 text-center py-2">
              {/* Replace with logos later */}
              {b}
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div {...fadeIn(0.25)} className="bg-[#7DB44B] text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-semibold mb-2">Ready to discuss your loan?</h3>
          <p className="mb-4 text-sm opacity-90">
            Book an appointment for a personal meeting and get a tailored loan
            plan. Processing time typically within one month depending on loan type & amount.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="px-6 py-2 rounded-md bg-white text-[#0f5132] font-semibold">Contact / Book Meeting</a>
            <a href="tel:+919876543210" className="px-6 py-2 rounded-md border border-white/30">Call Us</a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
