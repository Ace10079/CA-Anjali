import React from "react";
import { Phone, Mail, MapPin, User } from "lucide-react";

function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* 🧾 Enquiry Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Enquiry <span className="text-[#7DB44B]">Form</span>
          </h1>
          <form className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-[#7DB44B] outline-none"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-[#7DB44B] outline-none"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-[#7DB44B] outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#7DB44B] outline-none"
            />
            <textarea
              rows="4"
              placeholder="Tell Us More"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#7DB44B] outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#7DB44B] text-white py-3 rounded-lg font-semibold hover:bg-[#6aa23e] transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* 📍 Contact Info & Map */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Reach <span className="text-[#7DB44B]">Us</span>
          </h1>

          <div className="space-y-4 text-gray-700 mb-8">
            <p className="flex items-start gap-2">
              <MapPin className="text-[#7DB44B] mt-1" /> 
              A-701, Harmony Mall, Carnival Cinema Compound, New Link Road,
              Bhagat Singh Signal, Goregaon (W), Mumbai - 400104
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-[#7DB44B]" /> 
              <span>+91 7999653304</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="text-[#7DB44B]" /> 
              <a
                href="mailto:goyal0787@gmail.com"
                className="hover:underline text-[#7DB44B]"
              >
                goyal0787@gmail.com
              </a>
            </p>
          </div>

          <iframe
            title="Mumbai Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.686912531968!2d72.83948127496728!3d19.16643128205035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64c8e75b5d1%3A0x6cf3c1978cb7e2d9!2sHarmony%20Mall%2C%20New%20Link%20Rd%2C%20Mindspace%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064!5e0!3m2!1sen!2sin!4v1730713500000!5m2!1sen!2sin"
            className="w-full h-64 rounded-xl border-0 shadow-md"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
