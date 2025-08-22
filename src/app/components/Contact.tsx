"use client";
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rkbeaubouef@gmail.com',
    href: 'mailto:rkbeaubouef@gmail.com',
    glow: 'from-blue-500/20 to-cyan-500/20',
    shadowColor: 'shadow-blue-500/10'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/RKBobe',
    href: 'https://github.com/RKBobe',
    glow: 'from-gray-500/20 to-slate-500/20',
    shadowColor: 'shadow-gray-500/10'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/richardkylebeaubouef',
    href: 'https://linkedin.com/in/richardkylebeaubouef',
    glow: 'from-blue-600/20 to-blue-400/20',
    shadowColor: 'shadow-blue-600/10'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Enhanced gradient background with multiple texture layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/10 via-background to-muted/5">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.1)_0%,transparent_50%)] bg-[length:80px_80px]" />
        <div className="absolute inset-0 opacity-[0.01] bg-[conic-gradient(from_45deg,rgba(0,0,0,0.05)_0deg,transparent_90deg,rgba(0,0,0,0.05)_180deg,transparent_270deg)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent"
              style={{ textShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto"
             style={{ textShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            Ready to collaborate on innovative projects or discuss exciting opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Enhanced contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative block"
            >
              {/* Multi-layered glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.glow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${contact.shadowColor}`} />
              <div className={`absolute inset-2 bg-gradient-to-r ${contact.glow} rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-75`} />
              
              {/* Enhanced card with layered shadows and gradients */}
              <div className="relative bg-gradient-to-br from-card/90 via-card to-card/80 border border-border/50 rounded-2xl p-8 h-full backdrop-blur-sm group-hover:border-border transition-all duration-300 shadow-lg shadow-black/5 group-hover:shadow-xl group-hover:shadow-black/10">
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 rounded-2xl shadow-inner shadow-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col items-center space-y-4 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/5 group-hover:shadow-xl">
                    {/* Icon background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <contact.icon className="w-8 h-8 text-foreground relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 group-hover:text-primary transition-colors duration-300 bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {contact.value}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Enhanced call to action button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative group inline-block"
        >
          {/* Multi-layered glow for CTA */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-primary/10" />
          <div className="absolute inset-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500 delay-100" />
          
          <motion.a
            href="mailto:kyle@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground rounded-2xl hover:from-primary/95 hover:to-primary/85 transition-all duration-300 group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          >
            {/* Inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <Mail className="w-5 h-5 mr-3 relative z-10" />
            <span className="relative z-10">Start a Conversation</span>
            <motion.div
              className="ml-2 relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
