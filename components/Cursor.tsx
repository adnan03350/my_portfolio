"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only show cursor on desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 768 && window.matchMedia("(pointer: fine)").matches);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      });
    };

    // Smooth follower animation
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      gsap.to(follower, {
        x: followerX - 20,
        y: followerY - 20,
        duration: 0.3,
        ease: "power2.out",
      });

      requestAnimationFrame(animateFollower);
    };

    // Hover effects
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass") ||
        target.closest(".magnetic")
      ) {
        gsap.to(cursor, {
          scale: 1.5,
          opacity: 0.8,
          duration: 0.3,
        });
        gsap.to(follower, {
          scale: 2,
          opacity: 0.3,
          duration: 0.3,
        });
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass") ||
        target.closest(".magnetic")
      ) {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
        gsap.to(follower, {
          scale: 1,
          opacity: 0.5,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    animateFollower();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)",
        }}
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border-2 border-cyan-400/50 rounded-full pointer-events-none z-[9998]"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
          backdropFilter: "blur(4px)",
        }}
      />
    </>
  );
}
