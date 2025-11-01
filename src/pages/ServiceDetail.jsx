import { useParams, Link } from "react-router-dom";

const details = {
  registration: {
    title: "Company Registration",
    content:
      "We help you register your business as Private Limited, LLP, or OPC. Get expert legal support and fast documentation.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
  },
  licenses: {
    title: "Licenses & Certificates",
    content:
      "We assist you with GST, FSSAI, MSME, Import Export Code, and all required licenses to operate your business smoothly.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  },
  compliance: {
    title: "Company Compliance",
    content:
      "Our compliance experts ensure timely filing of returns, ROC documents, and tax audits to keep your company legal.",
    image:
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=1600&q=80",
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = details[id];

  if (!service) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-gray-500">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-56 sm:h-72 object-cover"
        />
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {service.title}
          </h1>
          <p className="text-gray-600 text-lg mb-6">{service.content}</p>
          <Link
            to="/"
            className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
}
