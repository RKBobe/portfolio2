import {Navigation} from '@/app/components/Navigation';
import {Hero} from '@/app/components/Hero';
import {About} from '@/app/components/About';
import {Skills} from '@/app/components/Skills';
import {Contact} from '@/app/components/Contact';
import {Projects} from '@/app/components/Projects';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}