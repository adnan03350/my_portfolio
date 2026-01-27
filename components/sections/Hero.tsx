"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import MagneticButton from "@/components/MagneticButton";

const heroText = "Engineering Intelligent Systems That See, Think & Decide.";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Headline animation with blur
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".word");
      words.forEach((word, i) => {
        gsap.fromTo(
          word,
          {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: i * 0.1,
            ease: "power3.out",
          }
        );
      });
    }

    // Subtext animation
    if (subtextRef.current) {
      gsap.fromTo(
        subtextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" }
      );
    }

    // Floating particles that react to mouse
    const handleMouseMove = (e: MouseEvent) => {
      particlesRef.current.forEach((particle, i) => {
        if (!particle) return;
        const rect = particle.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 30;
          gsap.to(particle, {
            x: (x / distance) * force,
            y: (y / distance) * force,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating AI Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) particlesRef.current[i] = el;
              }}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(135deg, 
                  rgba(168, 85, 247, ${0.6 + Math.random() * 0.4}), 
                  rgba(6, 182, 212, ${0.6 + Math.random() * 0.4}))`,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(6, 182, 212, 0.8)`,
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          >
            {heroText.split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-2 sm:mr-3">
                <span className="gradient-text">{word}</span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p
            ref={subtextRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <span className="hover:text-purple-400 transition-colors">CEO at Aizentra Labs</span>
            <span className="text-purple-500">•</span>
            <span className="hover:text-cyan-400 transition-colors">AI Engineer</span>
            <span className="text-cyan-400">•</span>
            <span className="hover:text-blue-400 transition-colors">Computer Vision Specialist</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 lg:pt-12">
            <MagneticButton
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-base sm:text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              <motion.div
                className="absolute inset-0 shadow-2xl shadow-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                initial={false}
              />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="px-8 py-4 glass rounded-xl font-semibold text-base sm:text-lg border-2 border-purple-500/50 hover:border-purple-500 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </MagneticButton>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="block"
            >
              <ArrowDown className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
