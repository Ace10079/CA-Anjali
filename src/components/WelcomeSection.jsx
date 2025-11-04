
// src/components/WelcomeSection.jsx
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-[#7DB44B]/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-52 h-52 bg-green-300/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Welcome To{" "}
          <span className="text-[#7DB44B]">Anjlies & Associates</span>
        </motion.h2>

        {/* Subtitle / description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 leading-relaxed text-lg md:text-xl bg-white/40 backdrop-blur-md shadow-md p-6 md:p-10 rounded-2xl border border-white/50"
        >
          Anjlies and Associates is one of the most established and top firms in
          the Chartered Accountancy and Legal Services sector. With vast
          experience across <strong>Income Tax</strong>, <strong>GST</strong>,
          <strong> Companies Act</strong>, and <strong>Other Legal Matters</strong>,
          we provide expert solutions for court cases, settlements, property
          disputes, and more.
          <br />
          <br />
          Our philosophy is rooted in <strong>professional ethics</strong>,
          <strong> transparency</strong>, and a <strong>client-first approach</strong>.
          We see ourselves not merely as service providers but as partners in
          your business journey — ensuring every complex task is handled with
          precision and care.
          <br />
          <br />
          Combining <strong>CA expertise</strong> with
          <strong> legal acumen</strong>, we offer holistic business solutions
          designed to empower clients and serve society with professionalism and
          integrity.
        </motion.p>

        {/* Decorative underline animation */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-[#7DB44B] mx-auto mt-8 rounded-full"
        />
      </div>
    </section>
  );
}
