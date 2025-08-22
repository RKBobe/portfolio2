"use client";
import { motion } from 'framer-motion';
import { Code, Database, Brain, Zap, GitBranch, Server } from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: "Data Science",
    description: "Machine learning, statistical analysis, and predictive modeling",
    glow: "from-primary/40 to-accent/50",
    shadowColor: "glow-phosphorescent"
  },
  {
    icon: Code,
    title: "Software Engineering", 
    description: "Full-stack development, system architecture, and clean code",
    glow: "from-accent/35 to-primary/40",
    shadowColor: "glow-silver"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "ETL pipelines, big data processing, and database optimization",
    glow: "from-secondary/40 to-accent/35",
    shadowColor: "glow-phosphorescent"
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description: "Neural networks, automation frameworks, and intelligent systems",
    glow: "from-accent/45 to-primary/35",
    shadowColor: "glow-silver"
  },
  {
    icon: GitBranch,
    title: "DevOps & MLOps",
    description: "CI/CD, containerization, and ML pipeline deployment",
    glow: "from-primary/35 to-secondary/40",
    shadowColor: "glow-phosphorescent"
  },
  {
    icon: Server,
    title: "Cloud Computing",
    description: "Scalable infrastructure, microservices, and distributed systems",
    glow: "from-accent/40 to-primary/45",
    shadowColor: "glow-silver"
  }
];

export function Skills() {
  return (
    <section className="py-24 px-6 relative">
      {/* Enhanced forest gradient background with more visible mist texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_40%_60%,oklch(0.7_0.12_172_/_0.2)_0%,transparent_50%)] bg-[length:150px_100px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(120deg,oklch(0.65_0.15_165_/_0.1)_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground via-primary/90 to-accent/70 bg-clip-text text-transparent text-glow"
            whileHover={{ scale: 1.02 }}
          >
            Expertise
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for solving complex problems and building intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotateY: 5,
              }}
              className="group relative"
            >
              {/* Enhanced phosphorescent glow with multiple prominent layers */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${skill.glow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${skill.shadowColor}`} />
              <div className={`absolute -inset-1 bg-gradient-to-r ${skill.glow} rounded-xl blur-lg opacity-0 group-hover:opacity-80 transition-all duration-500 delay-100`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.glow} rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-all duration-500 delay-200`} />
              
              {/* Enhanced card with prominent forest atmosphere */}
              <div className="relative bg-gradient-to-br from-card/95 via-card to-card/85 border border-border/70 rounded-2xl p-8 h-full backdrop-blur-sm group-hover:border-primary/60 transition-all duration-300 shadow-xl shadow-background/30 group-hover:shadow-2xl group-hover:shadow-primary/20">
                {/* More visible inner glow for depth */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Enhanced mystical overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-muted/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start space-x-4 relative">
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-primary/25 via-accent/35 to-secondary/25 rounded-xl flex items-center justify-center group-hover:scale-115 transition-all duration-300 shadow-xl shadow-background/30 group-hover:shadow-primary/30 glow-phosphorescent"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* More prominent icon phosphorescent glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/25 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <skill.icon className="w-6 h-6 text-foreground relative z-10 group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300 bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent/80 group-hover:text-glow">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/95 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 shadow-md shadow-primary/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
