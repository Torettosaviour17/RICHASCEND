export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: number;
  status: ProjectStatus;
  technologies: string[];
}

export const statusColors: Record<ProjectStatus, string> = {
  completed: "bg-green-100 text-green-800",
  "in-progress": "bg-amber-100 text-amber-800",
  planned: "bg-blue-100 text-blue-800",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Solar Farm Installation",
    description: "50MW solar farm providing clean energy to 20,000 homes",
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
