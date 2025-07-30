"use client";
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Enhanced gradient background with more visible texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/15 via-background to-muted/20">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_60%_40%,oklch(0.7_0.12_172_/_0.3)_0%,transparent_50%)] bg-[length:60px_60px]" />
        {/* More visible texture layer */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(45deg,oklch(0.65_0.15_165_/_0.15)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced content with more visible text shadows */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground via-primary/90 to-accent/80 bg-clip-text text-transparent text-glow">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary/80 rounded-full mb-8 shadow-lg shadow-primary/40 glow-phosphorescent" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate technologist who thrives at the intersection of data science and software engineering. 
                With a deep understanding of both theoretical foundations and practical implementation, I transform 
                complex data challenges into elegant, scalable solutions.
              </p>
              
              <p>
                My approach combines rigorous scientific methodology with modern engineering practices, 
                ensuring that every solution is not only accurate and insightful but also robust, 
                maintainable, and ready for production at scale.
              </p>
              
              <p>
                Whether it's building machine learning pipelines, architecting distributed systems, 
                or developing intelligent applications, I'm driven by the challenge of turning data 
                into actionable intelligence and innovative software solutions.
              </p>
            </div>

            {/* Enhanced tech badges with more visible effects */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {['Python', 'JavaScript', 'SQL', 'AWS', 'Docker', 'React'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="px-4 py-2 bg-gradient-to-r from-card/90 via-card to-card/70 border border-border/60 rounded-full text-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 shadow-md shadow-background/20 glow-silver hover:glow-phosphorescent"
                >
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {tech}
                  </span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced visual element with much more visible layered effects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Enhanced abstract geometric pattern with prominent shadow layers */}
            <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-card/95 via-muted/20 to-card/70 border border-border/40 shadow-2xl shadow-background/30 glow-silver">
              {/* More visible ambient background layers */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/40 to-accent/50 rounded-full blur-2xl shadow-2xl shadow-primary/30 glow-phosphorescent"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-l from-secondary/40 to-primary/35 rounded-full blur-xl shadow-xl shadow-secondary/40 glow-silver"
                  animate={{
                    scale: [1.3, 0.9, 1.3],
                    opacity: [0.7, 1, 0.7],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                <motion.div
                  className="absolute top-3/4 left-3/4 w-20 h-20 bg-gradient-to-t from-accent/35 to-muted/30 rounded-full blur-lg shadow-lg shadow-accent/25 glow-phosphorescent"
                  animate={{
                    scale: [0.8, 1.5, 0.8],
                    opacity: [0.4, 0.8, 0.4],
                    x: [-10, 10, -10],
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                  }}
                />
                {/* Additional visible particle */}
                <motion.div
                  className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-accent/30 to-primary/25 rounded-full blur-xl shadow-lg shadow-accent/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.9, 0.5],
                    rotate: [0, 360, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              {/* Enhanced geometric shapes with more visible shadows and animations */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative w-48 h-48"
                >
                  <div className="absolute inset-0 border-2 border-primary/40 rounded-full shadow-inner shadow-primary/20 glow-phosphorescent" />
                  <div className="absolute inset-4 border-2 border-accent/50 rounded-full shadow-inner shadow-accent/20 glow-silver" />
                  <div className="absolute inset-8 border-2 border-secondary/60 rounded-full shadow-inner shadow-secondary/20" />
                  
                  {/* Animated center dot with pulsing effect */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-primary/40 glow-phosphorescent"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Orbiting particles */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full shadow-md shadow-accent/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{
                      transformOrigin: '0 0',
                      transform: 'translate(-50%, -50%) translateX(60px)',
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-md shadow-primary/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    style={{
                      transformOrigin: '0 0',
                      transform: 'translate(-50%, -50%) translateX(40px)',
                    }}
                  />
                </motion.div>
              </div>

              {/* Much more visible glass morphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/20 backdrop-blur-[1px] rounded-2xl border border-primary/20 shadow-inner shadow-primary/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}