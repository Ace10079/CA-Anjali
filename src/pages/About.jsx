import React from "react";
import { Globe, Users, Target, Briefcase } from "lucide-react";

function About() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-[#7DB44B]">Our Company</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Building trust through professional expertise, innovative financial
            services, and client-focused solutions across India and abroad.
          </p>
        </div>

        {/* Main Info Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-16">
          <p className="text-gray-700 leading-relaxed text-lg">
            Over the course of its journey, our business has established a firm
            foothold in the industry. We proudly serve clients in major metro
            cities like{" "}
            <b>
              Delhi, Chennai, Goa, Indore, Mumbai, Bangalore, Hyderabad,
              Ahmedabad, Surat, Rajkot, Vadodara
            </b>{" "}
            and beyond.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            We also have an expanding global presence, catering to clients in{" "}
            <b>Los Angeles, Dubai, Canada</b>, and other international markets.
            Our commitment to customer satisfaction has helped us build lasting
            relationships and a growing client base.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Our firm is driven by a dedicated team of professionals who put in
            their best efforts to achieve a shared vision of excellence,
            transparency, and growth.
          </p>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Target className="text-[#7DB44B] w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600">
              To empower businesses with the right financial and legal solutions
              while fostering trust, growth, and long-term success.
            </p>
          </div>

          {/* Experience Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Briefcase className="text-[#7DB44B] w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Our Expertise
              </h3>
            </div>
            <p className="text-gray-600">
              With years of industry experience, we specialize in CA, legal,
              funding, and investment services—tailored to each client’s goals.
            </p>
          </div>

          {/* Global Reach Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Globe className="text-[#7DB44B] w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Global Presence
              </h3>
            </div>
            <p className="text-gray-600">
              Serving clients across India and internationally with consistent
              dedication, quality service, and personalized solutions.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <Users className="w-10 h-10 text-[#7DB44B] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            A Team You Can Trust
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Behind every service we provide is a team of dedicated professionals
            committed to understanding your needs and providing seamless,
            result-oriented support that drives your success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
