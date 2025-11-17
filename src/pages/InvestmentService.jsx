import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function InvestmentService() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  const services = [
    {
      title: "Business Investment Planning",
      desc: "We help entrepreneurs and enterprises plan and execute profitable investments for sustainable business growth.",
      img: "/I1.JPG",
    },
    {
      title: "Private Equity & Venture Funding",
      desc: "Connecting clients with trusted investors and partners for equity-based funding and expansion opportunities.",
      img: "/I2.JPG",
    },
    {
      title: "Portfolio Management",
      desc: "Customized investment portfolios balancing risk and returns to achieve your financial objectives.",
      img: "/I3.JPG",
    },
    {
      title: "Wealth Advisory & Financial Planning",
      desc: "Comprehensive financial guidance on wealth creation, savings, tax benefits, and asset management.",
      img: "/I4.JPG",
    },
    {
      title: "Joint Ventures & Partnerships",
      desc: "End-to-end assistance in structuring, negotiating, and executing joint ventures and partnerships.",
      img: "/I5.JPG",
    },
    {
      title: "Government & Industrial Schemes",
      desc: "Helping clients leverage government subsidies and schemes to support new projects and expansions.",
      img: "/I6.JPG",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center bg-[url('/investment-services.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <motion.div {...fadeIn()} className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Investment & Financial Services
          </h1>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto mt-3">
            Empowering individuals and businesses to grow through intelligent,
            transparent, and strategic investment solutions.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          {...fadeIn()}
          className="text-2xl sm:text-3xl font-semibold text-[#7DB44B] text-center mb-6"
        >
          Smart Investments, Sustainable Growth
        </motion.h2>
        <motion.p
          {...fadeIn(0.2)}
          className="text-gray-700 text-center leading-relaxed max-w-4xl mx-auto"
        >
          We specialize in creating result-driven investment strategies tailored
          to your goals. Whether you’re expanding your business, diversifying
          your portfolio, or planning long-term financial growth, our expert
          team provides transparent guidance and end-to-end support.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            {...fadeIn(0.05 * i)}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#7DB44B] mb-2">
                {s.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          {...fadeIn(0.2)}
          className="bg-[#7DB44B] text-white rounded-2xl p-10 text-center shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-3">
            Ready to Grow Your Wealth?
          </h3>
          <p className="text-sm mb-6 opacity-90">
            Get in touch with our financial experts to explore profitable
            investment opportunities and funding options.
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
