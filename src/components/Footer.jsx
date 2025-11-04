import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#7DB44B] via-green-600 to-green-700 text-white py-16 px-6 transition-all duration-700">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* 🏢 Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">CA Anjali & Co.</h3>
          <p className="text-gray-100 leading-relaxed text-sm">
            A trusted team of Chartered Accountants offering expert financial,
            legal, investment, and business consulting services to help clients
            achieve growth with integrity and precision.
          </p>
        </motion.div>

        {/* 📞 Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-gray-100 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-yellow-300" /> +91 7999653304
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-300" /> 
              goyal0787@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-yellow-300 mt-1" />
              <span>
                A-701, Harmony Mall, Carnival Cinema Compound,
                <br />
                Bhagat Singh Signal, Goregaon (W),
                <br />
                Mumbai - 400104
              </span>
            </li>
          </ul>
        </motion.div>

        {/* 🗺️ Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-4 text-white">Our Location</h4>
          <iframe
            title="CA Anjali & Co. Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.686912531968!2d72.83948127496728!3d19.16643128205035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64c8e75b5d1%3A0x6cf3c1978cb7e2d9!2sHarmony%20Mall%2C%20New%20Link%20Rd%2C%20Mindspace%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064!5e0!3m2!1sen!2sin!4v1730713500000!5m2!1sen!2sin"
            className="w-full h-40 rounded-lg border-0 shadow-md"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* 🌐 Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-4 text-white">
            Connect With Us
          </h4>
          <div className="flex gap-4 mb-6">
            {[
              { icon: <Facebook size={22} />, link: "https://www.facebook.com/people/Goyal-Goyal/100077091350683/" },
              { icon: <Linkedin size={22} />, link: "#" },
              { icon: <Twitter size={22} />, link: "https://x.com/goyal_anjli" },
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

      {/* ⚙️ Bottom Footer */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-100">
        © {new Date().getFullYear()} CA Anjali & Co. | All Rights Reserved.
      </div>
    </footer>
  );
}
