import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaExternalLinkAlt,
  FaChevronDown,
} from "react-icons/fa";

// Project data type
interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: number;
  status: "completed" | "in-progress" | "planned";
  technologies: string[];
  imageUrl?: string;
}

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Project data
  const projects: Project[] = [
    {
      id: "1",
      title: "Solar Farm Installation",
      description:
        "50MW solar farm providing clean energy to 20,000 homes in the region",
      category: "solar",
      location: "Nevada, USA",
      year: 2023,
      status: "completed",
      technologies: ["Photovoltaic", "Grid Integration", "Energy Storage"],
    },
    {
      id: "2",
      title: "Transformer Grid Upgrade",
      description: "Modernization of urban grid with smart transformers",
      category: "transformers",
      location: "Berlin, Germany",
      year: 2022,
      status: "completed",
      technologies: ["Smart Transformers", "IoT Monitoring", "Load Balancing"],
    },
    {
      id: "3",
      title: "Wind Energy Complex",
      description: "Offshore wind farm with 30 turbines generating 120MW",
      category: "wind",
      location: "North Sea, UK",
      year: 2024,
      status: "in-progress",
      technologies: ["Offshore Turbines", "Subsea Cabling", "Marine Logistics"],
    },
    {
      id: "4",
      title: "Hydroelectric Plant Refurbishment",
      description: "Modernization of 50-year-old hydroelectric facility",
      category: "hydro",
      location: "British Columbia, Canada",
      year: 2023,
      status: "in-progress",
      technologies: [
        "Turbine Efficiency",
        "Eco-friendly Design",
        "Fish Migration",
      ],
    },
    {
      id: "5",
      title: "Urban Microgrid Implementation",
      description:
        "Smart microgrid for urban resilience and renewable integration",
      category: "grid",
      location: "Tokyo, Japan",
      year: 2025,
      status: "planned",
      technologies: ["Microgrid", "Energy Storage", "AI Management"],
    },
    {
      id: "6",
      title: "Biomass Energy Facility",
      description: "Conversion of agricultural waste to renewable energy",
      category: "biomass",
      location: "São Paulo, Brazil",
      year: 2022,
      status: "completed",
      technologies: ["Waste Processing", "Gasification", "Emission Control"],
    },
  ];

  // Filter projects based on selected filter and search term
  useEffect(() => {
    let result = projects;

    if (filter !== "all") {
      result = result.filter((project) => project.category === filter);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.location.toLowerCase().includes(term) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(term))
      );
    }

    setFilteredProjects(result);
  }, [filter, searchTerm]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  };

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    "in-progress": "bg-amber-100 text-amber-800",
    planned: "bg-blue-100 text-blue-800",
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="py-24 bg-gradient-to-r from-emerald-900 to-teal-800 dark:from-gray-800 dark:to-gray-900"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Energy Projects
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Discover our portfolio of innovative energy solutions transforming
            communities worldwide
          </motion.p>
        </div>
      </motion.section>

      {/* Filters and Search */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <select
                className="appearance-none w-full md:w-64 pl-4 pr-10 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="solar">Solar Energy</option>
                <option value="wind">Wind Energy</option>
                <option value="hydro">Hydro Power</option>
                <option value="transformers">Transformers</option>
                <option value="grid">Grid Solutions</option>
                <option value="biomass">Biomass</option>
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "all",
              "solar",
              "wind",
              "hydro",
              "transformers",
              "grid",
              "biomass",
            ].map((cat) => (
              <motion.button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
                onClick={() => setFilter(cat)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat === "all"
                  ? "All"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                  variants={cardVariants}
                  whileHover="hover"
                  layout
                >
                  <div className="h-48 bg-gradient-to-r from-cyan-500 to-emerald-500 relative">
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          statusColors[project.status]
                        }`}
                      >
                        {project.status === "completed"
                          ? "Completed"
                          : project.status === "in-progress"
                          ? "In Progress"
                          : "Planned"}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-black bg-opacity-50 text-white rounded-full text-sm">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <button
                        className="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                        onClick={() =>
                          setExpandedProject(
                            expandedProject === project.id ? null : project.id
                          )
                        }
                      >
                        <FaChevronDown
                          className={`transition-transform ${
                            expandedProject === project.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{project.location}</span>
                    </div>

                    {expandedProject === project.id && (
                      <motion.div
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button className="flex items-center text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium">
                          View Case Study
                          <FaArrowRight className="ml-2" />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-emerald-900 to-teal-800 dark:from-gray-800 dark:to-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">42+</div>
              <div className="text-emerald-200">Projects Completed</div>
            </motion.div>

            <motion.div
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">1.2GW</div>
              <div className="text-emerald-200">Renewable Capacity</div>
            </motion.div>

            <motion.div
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">18</div>
              <div className="text-emerald-200">Countries Served</div>
            </motion.div>

            <motion.div
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">500k+</div>
              <div className="text-emerald-200">People Impacted</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            Ready to Start Your Energy Project?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
          >
            Our team of experts is ready to help you plan and implement
            sustainable energy solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
          >
            <motion.button
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-lg transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Project Consultation
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 border border-emerald-600 rounded-lg font-bold text-lg transition-colors"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f9fafb",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ProjectsPage;
