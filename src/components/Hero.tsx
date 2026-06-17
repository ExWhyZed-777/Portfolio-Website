import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiDownload, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-primary text-sm md:text-base mb-4"
        >
          Hi there, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="gradient-text">Mohammad Anas</span>
          <br />
          <span className="text-foreground">Inamdar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-2xl text-muted-foreground font-medium mb-6 h-8"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "Java Programmer",
              2000,
              "Problem Solver",
              2000,
              "ML Enthusiast",
              2000,
            ]}
            repeat={Infinity}
            speed={50}
            className="gradient-accent-text"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-sm md:text-base"
        >
          Building scalable web applications and solving complex problems using Java & DSA.
          Final year CSE student driven by curiosity and clean code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a href="#projects" className="gradient-btn px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a
            href="/Resume.pdf"
            download
            className="glass-card px-6 py-3 rounded-lg text-sm font-semibold text-foreground hover:border-primary/50 transition-colors flex items-center gap-2"
          >
            <FiDownload /> Download Resume
          </a>
          <a href="#contact" className="glass-card px-6 py-3 rounded-lg text-sm font-semibold text-foreground hover:border-primary/50 transition-colors flex items-center gap-2">
            <FiMail /> Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FiGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/anasinamdar/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FiLinkedin size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
