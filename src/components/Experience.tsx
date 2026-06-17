import SectionWrapper from "./SectionWrapper";
import { FiBriefcase } from "react-icons/fi";

const Experience = () => (
  <SectionWrapper id="experience">
    <p className="font-mono text-primary text-sm mb-2">04. Experience</p>
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Where I've <span className="gradient-text">Worked</span>
    </h2>

    <div className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4">
        <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
          <FiBriefcase size={22} />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-bold text-foreground">AI & Robotics Intern</h3>
            <span className="text-sm font-mono text-primary">3 Months</span>
          </div>
          <p className="text-primary font-medium text-sm mb-4">Hive Tech · India</p>

          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              Worked on AI-based and robotics projects involving real-time data processing and automation systems.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              Assisted in developing intelligent systems using Python and core machine learning concepts.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              Gained hands-on experience with sensors, hardware integration, and robotics workflows.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              Collaborated with cross-functional team members to design, test, and deploy solutions for real-world problem statements.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              Deepened understanding of AI model implementation, system optimization, and iterative development.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Experience;
