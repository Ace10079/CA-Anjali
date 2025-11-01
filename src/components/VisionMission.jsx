// src/components/VisionMission.jsx
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Our Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a trusted partner for businesses and individuals by
              delivering expert financial, tax, and compliance services with
              integrity, innovation, and professionalism.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We aspire to simplify complexities of finance and compliance,
              enabling our clients to focus on what they do best — growing their
              business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80"
              alt="Our Vision"
              className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-gray-200"></div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Our Mission"
              className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower our clients with transparent, ethical, and value-driven
              financial guidance. We aim to ensure seamless compliance with
              statutory regulations while delivering personalized advisory
              services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to contribute to financial literacy, business
              efficiency, and sustainable economic growth through expert CA
              solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
