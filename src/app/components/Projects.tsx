"use client";
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, Code2, Database, Globe, Zap, Waves, FileText } from 'lucide-react';

// Tech stack icons mapping
const techIcons: { [key: string]: string } = {
  "React": "⚛️",
  "Node.js": "🟢",
  "Next.js": "▲",
  "TypeScript": "🔷",
  "PostgreSQL": "🐘",
  "Prisma": "💎",
  "Fly.io": "🚀",
  "Python": "🐍",
  "FastAPI": "⚡",
  "Google Gemini": "🤖",
  "OpenAI": "🧠",
  "Stripe": "💳",
  "Clerk": "🔐",
  "HTML": "🌐",
  "CSS": "🎨",
  "JavaScript": "💛",
  "Flask": "🧪",
  "Google Gemini API": "🤖",
  "Prompt Engineering": "✍️",
  "ChromaDB (Vector Database)": "🧠",
  "Docker": "🐳",
  "Gunicorn": "🦄",
};

const projects = [
  {
    title: "XactScope",
    description: "A specialized SaaS platform for insurance adjusters that uses AI to convert voice-dictated field notes into formatted Xactimate estimates. It automates the tedious lookup of selector codes and math calculations, allowing adjusters to complete administrative work directly from the inspection site. Features a secure subscription-based model and real-time report generation.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI", "Stripe", "Clerk"],
    liveUrl: "https://xact-scope.vercel.app",
    githubUrl: "https://github.com/RKBobe/xact-scope",
    status: "Deployed",
    category: "Insurtech SaaS: AI Estimating Assistant",
    icon: FileText,
    highlights: [
      "Voice-to-Estimate AI processing pipeline",
      "Automated Xactimate selector code mapping",
      "Full subscription payment integration with Stripe",
      "Secure authentication & user management via Clerk",
      "Responsive dashboard with real-time data persistence"
    ]
  },
  {
    title: "Cortex",
    description: "A full-stack web application that provides a persistent, topic-based memory for conversations with large language models. This tool leverages a Retrieval-Augmented Generation (RAG) pipeline to dynamically pull relevant context from past conversations, uploaded documents, and entire GitHub repositories, ensuring accurate and contextually-aware AI responses. The application is containerized with Docker and deployed on Fly.io.",
    technologies: ["Python", "Flask", "HTML/CSS", "JavaScript", "Google Gemini API", "Prompt Engineering", "ChromaDB (Vector Database)", "Docker", "Gunicorn", "Fly.io"],
    liveUrl: "https://cortex-tfu-ua.fly.dev",
    githubUrl: "https://github.com/RKBobe/cortex",
    status: "Deployed",
    category: "AI Context Tool: Multi-User RAG App",
    icon: Code2,
    highlights: [
      "Dynamic Context Retrieval via RAG",
      "Multi-Source Ingestion (Docs & GitHub Repos)",
      "Multi-User Architecture with Data Isolation",
      "Scalable cloud deployment on Fly.io",
      "REST API for chat and ingestion logic"
    ]
  },
  {
    title: "Ripple",
    description: "Generate engaging social media posts from your articles using AI. Transform long-form content into compelling, platform-optimized posts that capture your audience's attention and amplify your message across social networks.",
    technologies: ["Python", "FastAPI", "Google Gemini", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://ripple-rho3.onrender.com",
    githubUrl: "https://github.com/RKBobe/Ripple",
    status: "Deployed",
    category: "Micro-SaaS",
    icon: Waves,
    highlights: [
      "AI-powered content transformation",
      "Multi-platform social media optimization",
      "Intelligent text analysis and summarization",
      "Fast API backend with Google Gemini integration"
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Enhanced forest gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_50%_30%,oklch(0.7_0.12_172_/_0.2)_0%,transparent_50%)] bg-[length:180px_120px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(60deg,oklch(0.65_0.15_165_/_0.1)_1px,transparent_1px)] bg-[length:80px_80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
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
            Featured Projects
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that combine data science, software engineering, and modern technology stacks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="group relative"
            >
              {/* Enhanced phosphorescent glow layers */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 via-accent/40 to-secondary/25 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 glow-phosphorescent" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-all duration-700 delay-100" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/15 via-accent/20 to-secondary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700 delay-200" />

              {/* Main project card */}
              <div className="relative bg-gradient-to-br from-card/95 via-card to-card/85 border border-border/60 rounded-2xl p-8 h-full backdrop-blur-sm group-hover:border-primary/50 transition-all duration-500 shadow-2xl shadow-background/40 group-hover:shadow-primary/20">
                {/* Inner mystical glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project header */}
                <div className="relative mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-primary/25 via-accent/30 to-secondary/20 rounded-lg flex items-center justify-center shadow-lg shadow-background/30 glow-silver"
                        whileHover={{
                          rotate: project.title === 'Ripple' ? 0 : 180,
                          scale: 1.1
                        }}
                        animate={project.title === 'Ripple' ? {
                          scale: [1, 1.05, 1],
                          rotateY: [0, 360],
                        } : {}}
                        transition={project.title === 'Ripple' ? {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        } : { duration: 0.6 }}
                      >
                        <project.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl bg-gradient-to-r from-foreground via-primary/90 to-accent/80 bg-clip-text text-transparent group-hover:text-glow">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </div>

                    {/* Status badge */}
                    <motion.div
                      className={`flex items-center gap-2 px-3 py-1 border rounded-full text-sm shadow-md ${
                        project.status === 'Deployed'
                          ? 'bg-gradient-to-r from-primary/20 to-accent/25 border-primary/30 shadow-primary/20 glow-phosphorescent'
                          : 'bg-gradient-to-r from-secondary/20 to-muted/25 border-secondary/30 shadow-secondary/20'
                      }`}
                      animate={project.status === 'Deployed' ? {
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8],
                      } : {}}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {project.status === 'Deployed' ? (
                        <Rocket className="w-3 h-3 text-primary" />
                      ) : (
                        <Zap className="w-3 h-3 text-accent" />
                      )}
                      <span className={project.status === 'Deployed' ? 'text-primary' : 'text-accent'}>
                        {project.status}
                      </span>
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Key highlights */}
                <div className="relative mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-primary/80 mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full shadow-sm shadow-primary/30" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="relative mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-accent/80 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-secondary/20 to-muted/30 border border-border/40 rounded-full text-xs text-foreground/90 hover:border-primary/40 hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
                      >
                        <span className="text-sm leading-none">{techIcons[tech] || '🔧'}</span>
                        <span>{tech}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="relative flex gap-4 pt-4 border-t border-border/30">
                  {project.liveUrl ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary/20 via-accent/25 to-primary/20 border border-primary/40 rounded-lg text-primary hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 glow-phosphorescent hover:glow-intense"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  ) : (
                    <motion.div
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-muted/20 via-muted/25 to-muted/20 border border-muted/40 rounded-lg text-muted-foreground cursor-not-allowed"
                    >
                      <Globe className="w-4 h-4 opacity-50" />
                      <span>Demo Soon</span>
                    </motion.div>
                  )}

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-secondary/20 via-muted/25 to-secondary/20 border border-secondary/40 rounded-lg text-secondary-foreground hover:border-accent/60 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 glow-silver hover:glow-accent"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </div>

              {/* Floating corner accent with ripple effect for Ripple project */}
              {project.title === 'Ripple' ? (
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/40" />
                    <motion.div
                      className="absolute inset-0 w-3 h-3 border-2 border-primary/50 rounded-full"
                      animate={{
                        scale: [1, 2, 3],
                        opacity: [1, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 w-3 h-3 border-2 border-accent/30 rounded-full"
                      animate={{
                        scale: [1, 2.5, 4],
                        opacity: [0.8, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.4,
                      }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 shadow-lg shadow-primary/40"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to action for more projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            More projects coming soon as I continue building innovative solutions
          </p>
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-card/60 to-card/40 border border-border/40 rounded-lg text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300 shadow-md shadow-background/20 hover:shadow-lg hover:shadow-primary/20"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <Code2 className="w-4 h-4" />
            <span>Stay tuned for updates</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}