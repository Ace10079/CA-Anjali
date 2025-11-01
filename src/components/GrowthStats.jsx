// src/components/GrowthStats.jsx
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Briefcase, Award, Calendar } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Clients Served",
    number: 700,
    suffix: "+",
  },
  {
    id: 2,
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    title: "Services Offered",
    number: 100,
    suffix: "+",
  },
  {
    id: 3,
    icon: <Award className="w-10 h-10 text-blue-600" />,
    title: "Qualified Team",
    number: 100,
    suffix: "+",
  },
  {
    id: 4,
    icon: <Calendar className="w-10 h-10 text-blue-600" />,
    title: "Years of Expertise",
    number: 9,
    suffix: "+",
  },
];

export default function GrowthStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-700 mb-4"
        >
          We Are One of the Fastest Growing CA Firms
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Our commitment to excellence, precision, and client success has made
          us one of the most trusted CA firms delivering impactful results.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-blue-700 mb-1">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2}
                  enableScrollSpy
                />
                {stat.suffix}
              </h3>
              <p className="text-gray-600 font-medium">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
