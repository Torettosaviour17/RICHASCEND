import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Footer from "../layout/Footer";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Connect With EngineeringCo
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              We're here to answer your questions and discuss how our
              engineering solutions can transform your projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Request a Quote
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-b pb-2">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Headquarters
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    123 Innovation Drive
                    <br />
                    Tech Park, San Francisco
                    <br />
                    CA 94103, USA
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                  <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    info@engineeringco.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                  <FaClock className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Business Hours
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Monday-Friday: 8am - 6pm
                    <br />
                    Saturday: 9am - 2pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-b pb-2">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="department"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Department
                </label>
                <select
                  id="department"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                >
                  <option value="">Select a department</option>
                  <option value="sales">Sales & Inquiries</option>
                  <option value="support">Technical Support</option>
                  <option value="projects">Project Management</option>
                  <option value="hr">Human Resources</option>
                  <option value="partnerships">Partnerships</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  placeholder="Describe your project or inquiry in detail..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="consent"
                  className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  I agree to EngineeringCo's privacy policy and terms of service
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 h-96">
              {/* Map placeholder */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Interactive map will appear here
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Global Offices
              </h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">
                    San Francisco, USA
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Innovation Drive, Tech Park
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">
                    Berlin, Germany
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    45 Techstraße, Innovation District
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">
                    Singapore
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    8 Engineering Way, Science Park
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">
                    Tokyo, Japan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    22 Shinkansen Avenue, Tech Center
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our services, projects,
                and partnership opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question:
                    "What types of engineering projects do you specialize in?",
                  answer:
                    "We specialize in structural engineering, mechanical systems design, sustainable energy solutions, industrial automation, infrastructure development, and smart building technologies.",
                },
                {
                  question: "How do I request a quote for my project?",
                  answer:
                    "You can request a quote by filling out our contact form, emailing quotes@engineeringco.com, or calling our sales department at +1 (555) 123-4567. Please provide as much detail as possible about your project requirements.",
                },
                {
                  question: "What is your typical project timeline?",
                  answer:
                    "Project timelines vary based on complexity and scope. Small projects may take 2-4 weeks, while large-scale implementations typically require 3-6 months. We provide detailed timelines during our initial consultation.",
                },
                {
                  question: "Do you offer international services?",
                  answer:
                    "Yes, we serve clients globally with offices in the US, Germany, Singapore, and Japan. Our international team can manage projects in over 23 countries across 5 continents.",
                },
                {
                  question: "How do I become a partner or supplier?",
                  answer:
                    "We're always looking for quality partners. Please visit our Partnerships page or email partnerships@engineeringco.com with your company details, certifications, and areas of expertise.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6"
                >
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Didn't find what you're looking for?
              </p>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
