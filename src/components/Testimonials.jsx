// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Founder, FinEdge Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    feedback:
      "CA Anjali and team have been exceptional in managing our tax and compliance needs. Their proactive approach and professionalism make them a trusted partner for our growing business.",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Director, EduNova Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    feedback:
      "Their expertise in company registration and financial structuring helped us scale smoothly. I highly recommend their services to any startup looking for reliable CA support.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "COO, TechSpark Innovations",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 4,
    feedback:
      "A very knowledgeable team! They simplify complex tax laws and provide quick, effective solutions. I’m thoroughly impressed by their dedication and accuracy.",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "CEO, GreenLeaf Organics",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    feedback:
      "Their financial advisory and compliance management have been top-notch. It’s rare to find such a transparent and responsive CA firm.",
  },
  {
    id: 5,
    name: "Rohit Verma",
    role: "CFO, Innovex Global",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    rating: 5,
    feedback:
      "They are highly professional and reliable. The best CA consultancy we’ve worked with in years!",
  },
];

export default function Testimonials() {
  // Duplicate list for seamless infinite scroll
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from the people and businesses who trusted us with their financial journey.
        </p>
      </div>

      {/* Moving container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopedTestimonials.map((t) => (
            <div
              key={t.id + Math.random()}
              className="min-w-[300px] sm:min-w-[340px] bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{t.role}</p>

              <div className="flex justify-center mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{t.feedback}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
