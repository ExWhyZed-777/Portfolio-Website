import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FiAward, FiStar } from "react-icons/fi";

const certs = [
  "Machine Learning using Python – Simplilearn",
  "Python Programming",
  "Java Programming",
  "Introduction to AI",
];

const Certifications = () => (
  <SectionWrapper id="certifications">
    <p className="font-mono text-primary text-sm mb-2">06. Achievements</p>
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Certifications & <span className="gradient-text">Achievements</span>
    </h2>

    <div className="grid sm:grid-cols-2 gap-6 mb-8">
      {certs.map((cert, i) => (
        <motion.div
          key={cert}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors"
        >
          <FiAward className="text-primary shrink-0" size={20} />
          <span className="text-sm text-foreground">{cert}</span>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl p-6 border-primary/20"
    >
      <div className="flex items-center gap-3 mb-2">
        <FiStar className="text-primary" size={20} />
        <h3 className="font-bold text-foreground">Competitive Programming</h3>
      </div>
      <p className="text-muted-foreground text-sm">
        Solved <span className="text-primary font-semibold">200+ DSA problems</span> on LeetCode and GeeksforGeeks,
        consistently honing problem-solving skills and algorithmic thinking.
      </p>
    </motion.div>
  </SectionWrapper>
);

export default Certifications;
