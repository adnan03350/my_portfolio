"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Company from "@/components/sections/Company";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import CreatureCursor from "@/components/CreatureCursor";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <CreatureCursor />
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Company />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
