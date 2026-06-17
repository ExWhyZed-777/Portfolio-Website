import SectionWrapper from "./SectionWrapper";
import { useState, FormEvent } from "react";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <SectionWrapper id="contact">
      <p className="font-mono text-primary text-sm mb-2">07. Contact</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-muted-foreground mb-10 max-w-xl text-sm md:text-base">
        I'm currently looking for internship and placement opportunities. Whether you have a question
        or just want to say hi, feel free to reach out!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-5">
          <a href="mailto:inamdaranas8@gmail.com" className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors">
            <FiMail className="text-primary" size={20} />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm text-foreground">inamdaranas8@gmail.com</p>
            </div>
          </a>
          <a href="tel:+919322407094" className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors">
            <FiPhone className="text-primary" size={20} />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm text-foreground">+91-9322407094</p>
            </div>
          </a>
          <a href="https://github.com/anasinamdar" target="_blank" rel="noreferrer" className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors">
            <FiGithub className="text-primary" size={20} />
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm text-foreground">github.com/anasinamdar</p>
            </div>
          </a>
          <a href="https://linkedin.com/in/anasinamdar" target="_blank" rel="noreferrer" className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors">
            <FiLinkedin className="text-primary" size={20} />
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm text-foreground">linkedin.com/in/anasinamdar</p>
            </div>
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="gradient-btn px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <FiSend size={16} /> {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
