import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function CAService() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center bg-[url('/CA_services.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <motion.div
          {...fadeIn()}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">CA Services</h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-200">
            Providing trusted Chartered Accountancy, Audit, Tax & Compliance
            services with professionalism and precision.
          </p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          {...fadeIn()}
          className="text-2xl sm:text-3xl font-semibold text-[#7DB44B] mb-4 text-center"
        >
          Welcome to Anjli’s & Associates
        </motion.h2>
        <motion.p
          {...fadeIn(0.2)}
          className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto"
        >
          We have a team of experienced professionals. Our core value is to
          provide value addition to clients. We work closely with our clients,
          providing personalized attention and are committed to exceeding their
          expectations through highly competent staff driven by passion for
          quality and professional integrity.
        </motion.p>
      </section>

      {/* Service Categories */}
      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-16">
        {/* Accounting Services */}
        <motion.div {...fadeIn()}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            Accounting Services
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Accounting System Design & Implementation</li>
            <li>Financial Reporting</li>
            <li>MIS Reports</li>
            <li>Budgeting</li>
            <li>Financial Analysis</li>
            <li>Asset Accounting Management</li>
            <li>Depreciation and Amortization Schedules</li>
          </ul>
        </motion.div>

        {/* GST */}
        <motion.div {...fadeIn(0.1)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">GST</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Registration / Migration under GST</li>
            <li>Consultancy for maintenance of proper records.</li>
            <li>Consultancy for proper accounting for GST.</li>
            <li>
              Consultancy on various issues summons, notice, demand etc. relating
              to GST and GST departments.
            </li>
            <li>Filing of Various Returns under GST and reconciliation.</li>
            <li>GST Audit</li>
          </ul>
        </motion.div>

        {/* Audit */}
        <motion.div {...fadeIn(0.2)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">Audit</h3>
          <p className="text-gray-700 mb-3">
            Broadly, Audit involves the following :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              In-depth study of existing systems, procedures and controls for
              proper understanding. Suggestions for improvement and strengthening.
            </li>
            <li>Ensuring compliance with policies, procedures and statutes.</li>
            <li>
              Comprehensive review to ensure accounts comply with GAAP and
              applicable Accounting Standards/IFRS.
            </li>
            <li>Checking the genuineness of expenses booked in accounts.</li>
            <li>Reporting inefficiencies at any operational level.</li>
            <li>Detection and prevention of income leakages.</li>
            <li>
              Certification of books of account with Balance Sheet and P&L Account.
            </li>
            <li>Issuing Audit Reports under various laws.</li>
          </ul>

          <h4 className="text-xl font-semibold text-[#7DB44B] mb-3">
            Types of Audits Conducted
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Statutory Audit of Companies</li>
            <li>Tax Audit under Section 44AB</li>
            <li>Audit under other sections like 80HHC, 80-IA, etc.</li>
            <li>Concurrent & Revenue Audits of Banks</li>
            <li>Branch Audits of Banks</li>
            <li>Audit of PF Trusts, Charitable Trusts, Schools, etc.</li>
            <li>Audit of Co-operative Societies</li>
            <li>Information System Audit</li>
            <li>Internal Audits</li>
          </ul>
        </motion.div>

        {/* Income Tax */}
        <motion.div {...fadeIn(0.3)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            Income Tax
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Consultancy on various Income Tax matters.</li>
            <li>Tax management, structuring & advisory services.</li>
            <li>Tax Planning for Corporates and Individuals.</li>
            <li>Advance Tax Rulings and NOC from IT department.</li>
            <li>PAN Services, Tax Return Filing & Refunds.</li>
            <li>Representation for complex tax assessments & appeals.</li>
            <li>
              Expertise in search, seizure and prosecution litigation.
            </li>
            <li>
              Advice on tax implications in acquisitions and cross-border matters.
            </li>
          </ul>
        </motion.div>

        {/* ROC Compliances */}
        <motion.div {...fadeIn(0.4)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            ROC Compliances
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Companies’ annual filing under Companies Act.</li>
            <li>Directors and company-related forms filing.</li>
            <li>Company revival and NCLT-related services.</li>
          </ul>
        </motion.div>

        {/* Registration */}
        <motion.div {...fadeIn(0.5)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            Registration
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Company registration (Private Limited / Public Limited)</li>
          </ul>
        </motion.div>
                {/* Company Registrations */}
                <motion.div {...fadeIn(0.6)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            Company & Business Registrations
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Private Limited Company Registration:</strong> Limited liability, shared decision-making, and easy conflict resolution among directors.
            </li>
            <li>
              <strong>Public Limited Company Registration:</strong> Ease in transfer of shareholding, enhanced transparency, credibility, and limited liability.
            </li>
            <li>
              <strong>Limited Liability Partnership (LLP):</strong> Flexible partnership structure, limited liability protection, and no cap on partners (2–200).
            </li>
            <li>
              <strong>Shop & Establishment Registration:</strong> Mandatory for shops and service establishments; covers offices, warehouses, and trade premises.
            </li>
          </ul>
        </motion.div>

        {/* Tax & Compliance Services */}
        <motion.div {...fadeIn(0.7)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            Tax & Compliance Services
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>GST Registration & Return Filing:</strong> Hassle-free GST setup, return filing, and compliance assistance.</li>
            <li><strong>TAN & PAN Services:</strong> Application and updates for Tax Deduction and Permanent Account Numbers.</li>
            <li><strong>Professional Tax Registration:</strong> State-level tax compliance for professionals and businesses.</li>
            <li><strong>Income Tax Return Filing:</strong> Expert filing support for individuals and organizations.</li>
            <li><strong>TDS Return Filing:</strong> Periodic submission and compliance for tax deducted at source.</li>
          </ul>
        </motion.div>

        {/* Annual Filings & Compliance */}
        <motion.div {...fadeIn(0.8)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            Annual Filings & Compliance
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>LLP Annual Filing:</strong> Filing and documentation for partnerships to maintain compliance.</li>
            <li><strong>Company Annual Filing:</strong> Annual return, director reports, and ROC submissions.</li>
            <li><strong>DIR-3 KYC Filing:</strong> Mandatory yearly KYC for company directors.</li>
          </ul>
        </motion.div>

        {/* Other Registrations */}
        <motion.div {...fadeIn(0.9)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            Other Key Registrations
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>MSME / SSI Registration</li>
            <li>Nidhi Company Registration</li>
            <li>Barcode Registration</li>
            <li>ESI & PF Registration</li>
            <li>FSSAI Food License</li>
            <li>IEC (Import Export Code)</li>
            <li>RERA Registration</li>
            <li>APEDA Registration</li>
          </ul>
        </motion.div>

        {/* Certification & Legal Support */}
        <motion.div {...fadeIn(1)}>
          <h3 className="text-2xl font-semibold text-[#7DB44B] mb-4">
            Certification & Legal Support
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Change of Registered Office Address</li>
            <li>Class 3 Digital Signature (DSC)</li>
            <li>ISO Certification</li>
            <li>Trademark, Copyright & Patent Registration</li>
          </ul>
        </motion.div>

      </section>

      <Footer />
    </div>
  );
}
