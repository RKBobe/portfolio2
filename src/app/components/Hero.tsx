"use client";
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced forest background with more visible phosphorescent mist */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/40">
        {/* More prominent organic texture overlay */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_30%_70%,oklch(0.7_0.12_172_/_0.2)_0%,transparent_50%)] bg-[length:120px_80px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[conic-gradient(from_45deg,oklch(0.65_0.15_165_/_0.15)_0deg,transparent_90deg)] bg-[length:200px_200px]" />
      </div>

      {/* Much more visible phosphorescent ambient effects */}
      <div className="absolute inset-0">
        {/* Primary phosphorescent mist - much more prominent */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/50 rounded-full blur-3xl shadow-2xl shadow-primary/30 glow-phosphorescent" />
          <div className="absolute inset-6 bg-gradient-to-r from-primary/30 to-accent/40 rounded-full blur-2xl shadow-xl shadow-accent/25" />
          <div className="absolute inset-12 bg-gradient-to-r from-primary/20 to-accent/30 rounded-full blur-xl shadow-lg shadow-primary/20" />
        </motion.div>

        {/* Secondary silver mist - enhanced visibility */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          animate={{
            scale: [1.3, 0.9, 1.3],
            opacity: [0.5, 0.9, 0.5],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/35 to-primary/30 rounded-full blur-3xl shadow-2xl shadow-secondary/25 glow-silver" />
          <div className="absolute inset-8 bg-gradient-to-l from-secondary/25 to-primary/20 rounded-full blur-xl shadow-xl shadow-primary/20" />
        </motion.div>

        {/* Tertiary forest glow - more visible */}
        <motion.div
          className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-muted/40 to-accent/35 rounded-full blur-2xl shadow-xl shadow-muted/25" />
        </motion.div>

        {/* Additional prominent mystical particles */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-accent/25 to-primary/30 rounded-full blur-2xl shadow-lg shadow-accent/20 glow-phosphorescent"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.4, 0.8, 0.4],
            x: [0, 30, 0],
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        {/* New floating particles */}
        <motion.div
          className="absolute top-1/3 left-2/3 w-24 h-24 bg-gradient-to-r from-primary/20 to-secondary/25 rounded-full blur-xl shadow-md shadow-primary/15"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -360, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />
      </div>

      {/* Content with enhanced forest glow */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-6xl md:text-8xl tracking-tight bg-gradient-to-r from-foreground via-primary/90 to-accent/80 bg-clip-text text-transparent text-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            R. Kyle Beaubouef
          </motion.h1>
          
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent w-24 md:w-32 shadow-lg shadow-primary/30 glow-phosphorescent"
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h2 className="text-xl md:text-2xl text-muted-foreground whitespace-nowrap">
              Computer/Data Scientist & Software Engineer
            </h2>
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent w-24 md:w-32 shadow-lg shadow-primary/30 glow-phosphorescent"
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting intelligent solutions at the intersection of data science and software engineering.
            Building the future through code, algorithms, and innovative thinking.
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator with prominent forest glow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/80 rounded-full flex justify-center bg-gradient-to-b from-background/30 to-card/20 backdrop-blur-sm shadow-lg shadow-primary/20 glow-phosphorescent"
          animate={{ 
            y: [0, 12, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2 shadow-md shadow-primary/30"
            animate={{ 
              opacity: [1, 0.3, 1],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}