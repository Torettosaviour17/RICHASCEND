import { useState } from "react";
import {
  FaLightbulb,
  FaSolarPanel,
  FaBolt,
  FaPlug,
  FaTools,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const ServicePage = () => {
  const [activeService, setActiveService] = useState("transformer");

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-indigo-900 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Energy Solutions & Services
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Comprehensive energy services for industries, utilities, and
            sustainable infrastructure
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              End-to-end solutions from design to maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLightbulb className="text-3xl" />,
                title: "Design & Engineering",
                desc: "Custom energy system design",
              },
              {
                icon: <FaSolarPanel className="text-3xl" />,
                title: "Solar Installations",
                desc: "Residential & commercial solar",
              },
              {
                icon: <FaBolt className="text-3xl" />,
                title: "Transformer Services",
                desc: "Installation & maintenance",
              },
              {
                icon: <FaPlug className="text-3xl" />,
                title: "Grid Integration",
                desc: "Utility-scale solutions",
              },
              {
                icon: <FaTools className="text-3xl" />,
                title: "Maintenance",
                desc: "Preventive & predictive",
              },
              {
                icon: <FaChartLine className="text-3xl" />,
                title: "Performance Monitoring",
                desc: "Real-time analytics",
              },
              {
                icon: <FaHandshake className="text-3xl" />,
                title: "Consulting",
                desc: "Energy strategy & planning",
              },
              {
                icon: <FaLightbulb className="text-3xl" />,
                title: "Energy Audits",
                desc: "Efficiency optimization",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="w-16 h-16 bg-red-500/10 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 dark:text-red-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Solutions
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Industry-leading expertise in critical energy infrastructure
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
              {[
                { id: "transformer", name: "Transformer Services" },
                { id: "solar", name: "Solar Solutions" },
                { id: "grid", name: "Grid Modernization" },
                { id: "storage", name: "Energy Storage" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-4 font-medium text-lg ${
                    activeService === tab.id
                      ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                  onClick={() => setActiveService(tab.id)}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeService === "transformer" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Transformer Services
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Comprehensive solutions for power transformers of all
                      types and capacities. Our services extend the lifespan of
                      your critical assets while improving efficiency.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        "Installation & Commissioning",
                        "Preventive Maintenance Programs",
                        "Diagnostic Testing & Analysis",
                        "Repair & Refurbishment",
                        "Oil Analysis & Filtration",
                        "Emergency Response Services",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                      Request Service Quote
                    </button>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                </div>
              )}

              {activeService === "solar" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Solar Energy Solutions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      End-to-end solar solutions from feasibility studies to
                      long-term maintenance. We design systems optimized for
                      your specific energy needs and location.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        "Commercial & Industrial Installations",
                        "Utility-Scale Solar Farms",
                        "Roof-Mount & Ground-Mount Systems",
                        "Solar Monitoring & Analytics",
                        "Performance Optimization",
                        "Operations & Maintenance",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors">
                      Explore Solar Solutions
                    </button>
                  </div>
                </div>
              )}

              {activeService === "grid" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Grid Modernization
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Future-proof your electrical infrastructure with smart
                      grid technologies that improve reliability, efficiency,
                      and integration of renewable resources.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        "Smart Metering Infrastructure",
                        "Distribution Automation",
                        "Microgrid Design & Implementation",
                        "Grid Resilience Planning",
                        "Voltage Optimization",
                        "Demand Response Systems",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                      Learn About Grid Solutions
                    </button>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                </div>
              )}

              {activeService === "storage" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Energy Storage Systems
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Battery storage solutions that provide grid stability,
                      peak shaving, and backup power for commercial and utility
                      applications.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        "Lithium-Ion Battery Systems",
                        "Flow Battery Installations",
                        "Grid-Scale Storage",
                        "Commercial Peak Shaving",
                        "Microgrid Integration",
                        "System Maintenance & Monitoring",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                      Discover Storage Options
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Service Process
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-16 top-16 bottom-16 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  step: "01",
                  title: "Consultation & Assessment",
                  desc: "We begin with understanding your specific energy challenges and goals through detailed discussions and site assessments.",
                },
                {
                  step: "02",
                  title: "Solution Design",
                  desc: "Our engineers develop customized solutions tailored to your operational requirements and budget constraints.",
                },
                {
                  step: "03",
                  title: "Implementation Planning",
                  desc: "We create detailed project plans with timelines, resources, and contingency measures for seamless execution.",
                },
                {
                  step: "04",
                  title: "Installation & Commissioning",
                  desc: "Our certified technicians execute the installation with minimal disruption, followed by rigorous testing.",
                },
                {
                  step: "05",
                  title: "Training & Handover",
                  desc: "Comprehensive training for your team and complete documentation for smooth operations.",
                },
                {
                  step: "06",
                  title: "Ongoing Support",
                  desc: "24/7 monitoring, maintenance programs, and performance optimization services.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-6 ${
                    idx % 2 === 0 ? "md:text-right md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold">
                    {step.step}
                  </div>
                  <div className={`${idx % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Energy Infrastructure?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-10">
            Contact our experts for a customized solution assessment
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-bold text-lg transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold text-lg transition-colors">
              Request Service Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
