import { portfolioData } from './data/portfolio';
import CursorGlow from './components/CursorGlow';
import Marquee from './components/Marquee';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'NestJS', 'MongoDB',
  'PostgreSQL', 'Prisma', 'Redis', 'Tailwind CSS', 'AWS', 'Docker', 'LangChain',
];

export default function App() {
  const { profile } = portfolioData;

  return (
    <>
      <CursorGlow />
      <Navbar name={profile.name} />

      <main className="relative z-10">
        <Hero profile={profile} />
        <Marquee items={techStack} />

        <About profile={profile} />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Education education={portfolioData.education} />
        <Achievements achievements={portfolioData.achievements} />
        <Contact profile={profile} />
      </main>

      <Footer name={profile.name} />
      <BackToTop />
    </>
  );
}
