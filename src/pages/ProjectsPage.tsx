import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectsHero from "../components/project-components/ProjectsHero";
import ProjectsFilters from "../components/project-components/ProjectsFilters";
import ProjectsGrid from "../components/project-components/ProjectsGrid";
import ProjectsStats from "../components/project-components/ProjectsStats";
import ProjectsCTA from "../components/project-components/ProjectsCTA";
import { projects } from "../components/project-components/projectTypes";
import Footer from "../layout/Footer";

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

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

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsHero />

      <ProjectsFilters
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <ProjectsGrid
            filteredProjects={filteredProjects}
            expandedProject={expandedProject}
            setExpandedProject={setExpandedProject}
          />
        </div>
      </section>

      <ProjectsStats />
      <ProjectsCTA />
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
