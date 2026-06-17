import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

const educationData = [
  {
    degree: "B.E. in Computer Science Engineering",
    institution: "PVPIT, Sangli",
    year: "2022 – 2026 (Expected)",
    detail: "CGPA: 7.2 · Final Year",
    current: true,
  },
  {
    degree: "HSC – Science",
    institution: "Dr. Bapuji Salunkhe College, Miraj",
    year: "2022",
    detail: "Percentage: 69%",
  },
  {
    degree: "SSC",
    institution: "Al-Fatah English School, Miraj",
    year: "2020",
    detail: "Percentage: 78%",
  },
];

const Education = () => (
  <SectionWrapper id="education">
    <p className="font-mono text-primary text-sm mb-2">05. Education</p>
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      My <span className="gradient-text">Journey</span>
    </h2>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

      <div className="space-y-8">
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex items-start gap-5"
          >
            <div className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center shrink-0 ${
              edu.current ? "bg-primary/20 text-primary animate-pulse-glow" : "bg-secondary text-muted-foreground"
            }`}>
              <FiBookOpen size={18} />
            </div>
            <div className={`glass-card rounded-xl p-5 flex-1 ${edu.current ? "border-primary/30" : ""}`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="font-bold text-foreground">{edu.degree}</h3>
                <span className="text-xs font-mono text-primary">{edu.year}</span>
              </div>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
              <p className="text-sm text-secondary-foreground mt-1">{edu.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Education;
