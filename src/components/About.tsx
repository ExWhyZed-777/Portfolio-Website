import SectionWrapper from "./SectionWrapper";
import { FiCode, FiCpu, FiLayers } from "react-icons/fi";

const highlights = [
  { icon: <FiCode size={24} />, title: "Full Stack Dev", desc: "MERN stack expertise with a focus on scalable, clean code." },
  { icon: <FiCpu size={24} />, title: "Problem Solver", desc: "200+ DSA problems solved on LeetCode & GeeksforGeeks." },
  { icon: <FiLayers size={24} />, title: "ML Explorer", desc: "Hands-on ML project experience with real-world applications." },
];

const About = () => (
  <SectionWrapper id="about">
    <p className="font-mono text-primary text-sm mb-2">01. About Me</p>
    <h2 className="text-3xl md:text-4xl font-bold mb-8">
      Who I <span className="gradient-text">Am</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
        <p>
          I'm a <span className="text-foreground font-medium">final year Computer Science Engineering student</span> at
          Padmabhooshan Vasantraodada Patil Institute of Technology, Sangli. I'm passionate about
          building impactful software that solves real-world problems.
        </p>
        <p>
          With a strong foundation in <span className="text-foreground font-medium">Data Structures & Algorithms</span>,
          <span className="text-foreground font-medium"> Object-Oriented Programming</span>, and
          <span className="text-foreground font-medium"> Full Stack Web Development (MERN)</span>, I bring both
          theoretical depth and practical execution to every project.
        </p>
        <p>
          My internship experience in AI & Robotics at Hive Tech broadened my understanding of
          intelligent systems. I'm constantly learning, building, and pushing myself to create technology
          that makes a difference.
        </p>
      </div>

      <div className="space-y-4">
        {highlights.map((h) => (
          <div key={h.title} className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors group">
            <div className="text-primary mt-1 group-hover:scale-110 transition-transform">{h.icon}</div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{h.title}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default About;
