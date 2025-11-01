import { Link } from "react-router-dom";

const serviceCategories = [
  {
    id: "registration",
    title: "Company Registration",
    description:
      "Start your business legally with hassle-free company and LLP registration.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "licenses",
    title: "Licenses & Certificates",
    description:
      "Apply for mandatory business licenses and professional certifications easily.",
    image:
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "compliance",
    title: "Company Compliance",
    description:
      "Ensure your company stays compliant with legal filings and annual returns.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Services() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 bg-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Our Services
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <Link
                to={`/services/${service.id}`}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Explore Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
