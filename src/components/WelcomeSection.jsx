import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">
      {/* Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-28 h-28 md:w-36 md:h-36 bg-[#7DB44B]/20 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-36 h-36 md:w-52 md:h-52 bg-green-300/20 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center"
          >
            Welcome To <span className="text-[#7DB44B]">Anjlies & Associates</span>
          </motion.h2>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full flex justify-center md:justify-start"
        >
          <img
            src="/W1.JPG"
            alt="Firm Work"
            className="rounded-3xl shadow-xl w-full max-w-sm md:max-w-md object-cover animate-[float_4s_ease-in-out_infinite]"
          />
        </motion.div>

        {/* Right Side Content */}
        <div className="text-center md:text-left">
        

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed text-lg bg-white/40 backdrop-blur-md shadow-lg p-5 md:p-6 rounded-2xl border border-white/50"
          >
            Started in 2012, our firm began with a strong foundation in Income Tax,
            Audit, Excise, Customs, and State Tax compliance. With the
            implementation of GST, our practice rapidly expanded, and we built a
            specialised team that now handles the entire spectrum of GST and
            direct tax services with complete accuracy and accountability.
            <br /><br />
            As our clients’ needs grew, we expanded into banking and finance,
            forming dedicated teams for business finance, loan structuring, and
            financial advisory.
            <br /><br />
            We later added a full-fledged legal division covering criminal cases,
            property litigation, arrest matters, and raid-related proceedings.
            Our lawyers represent clients from lower courts to the Supreme Court.
            <br /><br />
            <strong className="text-[#7DB44B]">Our core professional focus:</strong>
            <ul className="list-disc ml-6 mt-2 text-left">
              <li>CA Practice</li>
              <li>GST & Income Tax</li>
              <li>Banking & Finance</li>
              <li>Legal Cases (Criminal, Civil & Property)</li>
              <li>Compliance & Advisory</li>
              <li>Documentation & Due Diligence</li>
            </ul>
            <br />
            Our priority is delivering reliable and seamless services supported by
            experienced CAs, finance professionals, and lawyers working together.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-[#7DB44B] mt-6 md:mt-8 rounded-full w-32 mx-auto md:mx-0 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
