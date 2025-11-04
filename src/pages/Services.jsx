import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    { title: "CA Services", image: "/CA_services.jpg", link: "/services/ca-services" },
    { title: "Private Lender Services", image: "/Private_lenders.jpg", link: "/services/private-lender" },
    { title: "Bank / NBFC Services", image: "/NBFC.jpg", link: "/services/nbfc" },
    { title: "Legal Services", image: "/legal-servies.jpg", link: "/services/legal" },
    { title: "Investment Services", image: "/investment-services.jpg", link: "/services/investment" },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount =
      direction === "left"
        ? -container.offsetWidth / 1.2
        : container.offsetWidth / 1.2;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-12 py-14 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#7DB44B] mb-12">
        Our Services
      </h1>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth space-x-6 pb-4"
      >
        {services.map((service, index) => (
          <Link
            to={service.link}
            key={index}
            className="min-w-[260px] sm:min-w-[320px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 overflow-hidden"
          >
            <div className="relative group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-5 text-center">
              <h2 className="text-lg sm:text-xl font-semibold text-[#7DB44B] mb-2">
                {service.title}
              </h2>
              <button className="mt-2 px-4 py-2 bg-[#7DB44B] text-white text-sm rounded-lg hover:bg-[#6ba23e] transition">
                Explore Now
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-6">
        <button
          onClick={() => scroll("left")}
          className="bg-[#7DB44B] text-white rounded-full p-3 hover:bg-[#6ba23e] transition shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-[#7DB44B] text-white rounded-full p-3 hover:bg-[#6ba23e] transition shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
