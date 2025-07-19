// src/layout/Footer.tsx
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-red-600 to-red-800 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent ml-2">
                EngineeringCo
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Pioneering innovative engineering solutions that shape the future.
              We bridge imagination with reality through precision and passion.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaLinkedin className="text-lg text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTwitter className="text-lg text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaInstagram className="text-lg text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaYoutube className="text-lg text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-red-600 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Insights", href: "/insights" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-red-600 pl-3">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Structural Engineering",
                "Mechanical Systems Design",
                "Sustainable Energy Solutions",
                "Industrial Automation",
                "Infrastructure Development",
                "Smart Building Technologies",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-red-600 pl-3">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Innovation Drive, Tech Park,
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-red-600 mr-3" />
                <span className="text-gray-600 dark:text-gray-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-red-600 mr-3" />
                <span className="text-gray-600 dark:text-gray-400">
                  info@engineeringco.com
                </span>
              </li>
              <li className="flex items-start">
                <FaClock className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  Monday-Friday: 8am - 6pm
                  <br />
                  Saturday: 9am - 2pm
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-red-100 to-red-200 dark:from-red-700 dark:to-red-900 rounded-xl p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-700 dark:text-red-100 max-w-lg">
                  Stay updated with our latest engineering innovations, project
                  updates, and industry insights.
                </p>
              </div>
              <form className="flex w-full max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 bg-white"
                />
                <button
                  type="submit"
                  className="bg-gray-800 dark:bg-gray-900 hover:bg-gray-900 dark:hover:bg-black text-white px-6 py-3 rounded-r-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} EngineeringCo. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-400 transition-colors text-sm"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-400 transition-colors text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
