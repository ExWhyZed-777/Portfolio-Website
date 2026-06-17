import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiPython, SiJavascript,
  SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiGit, SiGithub, SiPostman,
} from "react-icons/si";
import { FiDatabase, FiCode, FiGlobe, FiTool } from "react-icons/fi";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Programming",
    icon: <FiCode />,
    skills: [
      { name: "Java", icon: <SiJavascript />, level: 85 },
      { name: "Python", icon: <SiPython />, level: 75 },
      { name: "JavaScript", icon: <SiJavascript />, level: 80 },
      { name: "C", icon: <FiCode />, level: 65 },
    ],
  },
  {
    title: "Web Development",
    icon: <FiGlobe />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, level: 90 },
      { name: "CSS3", icon: <SiCss />, level: 85 },
      { name: "React.js", icon: <SiReact />, level: 80 },
      { name: "Node.js", icon: <SiNodedotjs />, level: 75 },
      { name: "Express.js", icon: <SiExpress />, level: 70 },
    ],
  },
  {
    title: "Databases",
    icon: <FiDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 75 },
      { name: "MySQL", icon: <SiMysql />, level: 70 },
    ],
  },
  {
    title: "Tools & Concepts",
    icon: <FiTool />,
    skills: [
      { name: "Git", icon: <SiGit />, level: 80 },
      { name: "GitHub", icon: <SiGithub />, level: 85 },
      { name: "Postman", icon: <SiPostman />, level: 70 },
    ],
  },
];

const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="text-primary text-lg">{skill.icon}</span>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-foreground font-medium">{skill.name}</span>
          <span className="text-xs text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 0.8, delay: delay * 0.1, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          />
        </div>
      </div>
    </div>
  );
};

const Skills = () => (
  <SectionWrapper id="skills">
    <p className="font-mono text-primary text-sm mb-2">02. Skills</p>
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      My <span className="gradient-text">Tech Stack</span>
    </h2>

    <div className="grid sm:grid-cols-2 gap-6">
      {categories.map((cat) => (
        <div key={cat.title} className="glass-card rounded-xl p-6 hover:glow-border transition-shadow">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-primary">{cat.icon}</span>
            <h3 className="font-semibold text-foreground">{cat.title}</h3>
          </div>
          <div className="space-y-4">
            {cat.skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} delay={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
