"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Removed canvas gradient - keeping only floating orbs for subtle effect

    // Floating orbs
    const orbs = orbsRef.current;
    orbs.forEach((orb, index) => {
      if (!orb) return;
      gsap.to(orb, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      });

      gsap.to(orb, {
        scale: 1 + Math.random() * 0.5,
        opacity: 0.3 + Math.random() * 0.2,
        duration: 5 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      });
    });

    // Cursor reactive orbs
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      orbs.forEach((orb, index) => {
        if (!orb) return;
        const rect = orb.getBoundingClientRect();
        const orbX = rect.left + rect.width / 2;
        const orbY = rect.top + rect.height / 2;

        const dx = mouseX - orbX;
        const dy = mouseY - orbY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 20;
          gsap.to(orb, {
            x: `+=${(dx / distance) * force}`,
            y: `+=${(dy / distance) * force}`,
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
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gray-950">
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) orbsRef.current[i] = el;
          }}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${200 + Math.random() * 200}px`,
            height: `${200 + Math.random() * 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 3 === 0
                ? "radial-gradient(circle, rgba(168, 85, 247, 0.1), transparent)"
                : i % 3 === 1
                ? "radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)",
          }}
        />
      ))}
    </div>
  );
}
