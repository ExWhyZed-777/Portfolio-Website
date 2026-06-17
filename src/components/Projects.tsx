import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tech: string[];
  major?: boolean;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Malware Detection using Machine Learning",
    description:
      "Developed a supervised learning model to classify files as malicious or benign. Performed comprehensive data preprocessing, feature engineering, and normalization. Implemented Random Forest and Logistic Regression algorithms, achieving high detection accuracy. A significant final year project demonstrating practical ML skills.",
    tech: ["Python", "Scikit-learn", "Pandas", "Random Forest", "Logistic Regression"],
    major: true,
    github: "https://github.com/NikamShivprasad/MalGuard_Malware-detection",
  },
  {
    title: "AI Chat Application",
    description:
      "Developed an AI-powered chat application that integrates with a generative AI API to provide intelligent responses. Implemented real-time chat interface, API handling, and smooth user interaction flow.",
    tech: ["Node.js", "Express.js", "JavaScript", "API Integration", "AI"],
    github: "https://github.com/ExWhyZed-777/AI-Chat",
  },
  {
    title: "E-Commerce Shoe Website",
    description:
      "Developed a responsive e-commerce shoe shopping website with product listing, filtering, and dynamic shopping cart functionality. Focused on clean UI/UX and responsive design for seamless user experience across devices.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ExWhyZed-777/E-Commerce-Shoes",
  },
  {
    title: "Weather Application",
    description:
      "Built a real-time weather application integrating OpenWeather API for live weather data. Utilized async/await for efficient asynchronous data handling and clean UX.",
    tech: ["JavaScript", "OpenWeather API", "async/await"],
    github: "https://github.com/ExWhyZed-777/Weather-Application",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a responsive personal portfolio showcasing projects, skills, and professional experience with a modern, clean interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ExWhyZed-777/Portfolio-Website",
  },
  {
    title: "To-Do List Application",
    description:
      "Developed a task management app with full CRUD operations and persistent local storage. Clean and minimal interface for everyday productivity.",
    tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    github: "https://github.com/ExWhyZed-777/CODSOFT",
  },
  
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className={`glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 hover:glow-border ${
      project.major ? "sm:col-span-2 border-primary/20" : ""
    }`}
  >
    {project.major && (
      <span className="inline-block gradient-btn text-xs px-3 py-1 rounded-full mb-3">
        Major Project
      </span>
    )}
    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((t) => (
        <span key={t} className="text-xs font-mono bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
          {t}
        </span>
      ))}
    </div>
    {project.github && (
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
        >
          <FiGithub size={16} /> View on GitHub
        </a>
      </div>
    )}
  </motion.div>
);

const Projects = () => (
  <SectionWrapper id="projects">
    <p className="font-mono text-primary text-sm mb-2">03. Projects</p>
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Things I've <span className="gradient-text">Built</span>
    </h2>
    <div className="grid sm:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
