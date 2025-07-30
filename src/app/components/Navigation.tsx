"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/85 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-background/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Enhanced gradient overlay when scrolled */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/85 to-background/90 backdrop-blur-lg" />
      )}

      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Enhanced logo with phosphorescent glow */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/25 to-accent/25 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-phosphorescent" />
            <div className="absolute inset-1 bg-gradient-to-r from-primary/15 to-accent/15 rounded-md blur-sm opacity-0 group-hover:opacity-80 transition-opacity duration-300 delay-50" />
            <div className="relative px-4 py-2 bg-gradient-to-br from-card/70 via-card/60 to-card/50 border border-primary/30 rounded-lg backdrop-blur-sm shadow-md shadow-background/20 group-hover:shadow-lg group-hover:border-primary/50 group-hover:shadow-primary/10 transition-all duration-300">
              <span className="text-lg tracking-tight bg-gradient-to-r from-foreground via-primary/90 to-accent/80 bg-clip-text text-transparent group-hover:text-glow">
                RKB
              </span>
            </div>
          </motion.div>

          {/* Enhanced navigation items with forest glow */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative group text-muted-foreground hover:text-primary transition-all duration-300"
              >
                {item.label}
                {/* Enhanced underline with phosphorescent gradient */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-300 glow-phosphorescent" />
                {/* Subtle phosphorescent glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.a>
            ))}
          </div>

          {/* Enhanced mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative group p-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/25 to-accent/25 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-phosphorescent" />
            <div className="relative w-6 h-6 flex flex-col justify-center space-y-1 bg-gradient-to-br from-card/40 to-card/30 rounded-md p-1 backdrop-blur-sm shadow-sm shadow-background/20 group-hover:shadow-md transition-all duration-300">
              <div className="w-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full shadow-sm glow-phosphorescent" />
              <div className="w-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full shadow-sm glow-phosphorescent" />
              <div className="w-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full shadow-sm glow-phosphorescent" />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}