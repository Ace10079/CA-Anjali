// src/components/Industries.jsx
import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Laptop,
  ShoppingBag,
  Factory,
  Plane,
  Banknote,
  GraduationCap,
  Landmark,
  Truck,
  Briefcase,
  Globe,
  Cpu,
  ShieldCheck,
  Leaf,
} from "lucide-react";

const industries = [
  { id: 1, name: "Finance & Banking", icon: <Banknote className="w-10 h-10" /> },
  { id: 2, name: "Information Technology", icon: <Laptop className="w-10 h-10" /> },
  { id: 3, name: "Manufacturing", icon: <Factory className="w-10 h-10" /> },
  { id: 4, name: "Healthcare", icon: <HeartPulse className="w-10 h-10" /> },
  { id: 5, name: "Education", icon: <GraduationCap className="w-10 h-10" /> },
  { id: 6, name: "Retail & E-commerce", icon: <ShoppingBag className="w-10 h-10" /> },
  { id: 7, name: "Real Estate", icon: <Building2 className="w-10 h-10" /> },
  { id: 8, name: "Logistics & Transportation", icon: <Truck className="w-10 h-10" /> },
  { id: 9, name: "Travel & Hospitality", icon: <Plane className="w-10 h-10" /> },
  { id: 10, name: "Government & Public Sector", icon: <Landmark className="w-10 h-10" /> },
  { id: 11, name: "Consulting", icon: <Briefcase className="w-10 h-10" /> },
  { id: 12, name: "Telecom & Networking", icon: <Globe className="w-10 h-10" /> },
  { id: 13, name: "Energy & Environment", icon: <Leaf className="w-10 h-10" /> },
  { id: 14, name: "Cybersecurity", icon: <ShieldCheck className="w-10 h-10" /> },
  { id: 15, name: "AI & Automation", icon: <Cpu className="w-10 h-10" /> },
];

export default function Industries() {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#7DB44B] text-center mb-4"
        >
          Industries We’ve Worked With
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          From startups to enterprises, we’ve partnered with clients across diverse industries — 
          delivering reliable financial expertise and business excellence.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white shadow-md hover:shadow-xl rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-[#7DB44B] group-hover:text-[#7DB44B] transition-colors mb-3">
                {item.icon}
              </div>
              <h3 className="text-center text-sm sm:text-base font-medium text-gray-700 group-hover:text-[#7DB44B] transition-colors">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
