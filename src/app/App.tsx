import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6 bg-gradient-to-t from-background/95 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 R. Kyle Beaubouef. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
}