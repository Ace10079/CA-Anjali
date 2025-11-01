// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">CA Anjali & Co.</h3>
          <p className="text-gray-200 leading-relaxed text-sm">
            We are a team of qualified Chartered Accountants providing complete
            financial, tax, and compliance solutions to help businesses grow with
            confidence and integrity.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-yellow-300" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-300" /> contact@caanjali.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-yellow-300 mt-1" />
              <span>
                Office No. 203, Skyline Tower,
                <br /> Pune, Maharashtra, India - 411001
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-4 text-white">Our Location</h4>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.948113152407!2d73.85674337496418!3d18.502288470090024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0edb1c89b13%3A0x2d1a2e312312f4e3!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-40 rounded-lg border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-4 text-white">Connect With Us</h4>
          <div className="flex gap-4 mb-6">
            {[
              { icon: <Facebook size={22} />, link: "#" },
              { icon: <Instagram size={22} />, link: "#" },
              { icon: <Linkedin size={22} />, link: "#" },
              { icon: <Twitter size={22} />, link: "#" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                whileHover={{ scale: 1.2, y: -4 }}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition text-white"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-sm italic text-yellow-300">
            “Empowering businesses with precision, trust, and financial clarity.”
          </p>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-blue-600 mt-12 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} CA Anjali & Co. | All Rights Reserved.
      </div>
    </footer>
  );
}
