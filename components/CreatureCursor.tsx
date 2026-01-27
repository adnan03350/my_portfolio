"use client";

import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function CreatureCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Creature state
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const segmentsRef = useRef<Point[]>([]);
  const hoverStateRef = useRef({ isHovering: false, intensity: 0 });

  useEffect(() => {
    // Only show on desktop with fine pointer
    const checkDesktop = () => {
      const isDesktopDevice =
        window.innerWidth > 768 && window.matchMedia("(pointer: fine)").matches;
      setIsDesktop(isDesktopDevice);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize segments (head + body) - reduced for better performance
    const segmentCount = 12;
    const initSegments = () => {
      segmentsRef.current = Array.from({ length: segmentCount }, (_, i) => ({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: 0,
        vy: 0,
      }));
    };
    initSegments();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass") ||
        target.closest(".magnetic")
      ) {
        hoverStateRef.current.isHovering = true;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass") ||
        target.closest(".magnetic")
      ) {
        hoverStateRef.current.isHovering = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // Animation loop
    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      const deltaTime = Math.min((currentTime - lastTime) / 16.67, 2); // Cap at 2x for stability
      lastTime = currentTime;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!isVisible) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const segments = segmentsRef.current;
      const mouse = mouseRef.current;
      const hover = hoverStateRef.current;

      // Update hover intensity
      hover.intensity += (hover.isHovering ? 1 : -1) * 0.1;
      hover.intensity = Math.max(0, Math.min(1, hover.intensity));

      // Calculate mouse velocity for stretching effect
      const dx = mouse.targetX - mouse.x;
      const dy = mouse.targetY - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = distance * 0.1;

      // Update head position with spring physics
      const spring = 0.15;
      const friction = 0.85;
      mouse.x += dx * spring;
      mouse.y += dy * spring;

      // Update head segment (follows mouse)
      const head = segments[0];
      const headDx = mouse.x - head.x;
      const headDy = mouse.y - head.y;
      const headDistance = Math.sqrt(headDx * headDx + headDy * headDy);

      // Spring physics for head
      const headSpring = 0.25;
      const headFriction = 0.92;
      head.vx += headDx * headSpring;
      head.vy += headDy * headSpring;
      head.vx *= headFriction;
      head.vy *= headFriction;
      head.x += head.vx;
      head.y += head.vy;

      // Update body segments (each follows the previous)
      for (let i = 1; i < segments.length; i++) {
        const current = segments[i];
        const previous = segments[i - 1];

        const dx = previous.x - current.x;
        const dy = previous.y - current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Segment spacing (stretches on fast movement)
        const baseSpacing = 6;
        const stretchFactor = Math.min(1 + speed * 0.008, 1.8);
        const spacing = baseSpacing * stretchFactor;

        if (distance > spacing) {
          const angle = Math.atan2(dy, dx);
          current.x = previous.x - Math.cos(angle) * spacing;
          current.y = previous.y - Math.sin(angle) * spacing;
        }

        // Add slight wave/slither effect (consistent, not time-based)
        if (i > 0) {
          const waveAmount = Math.sin(i * 0.8) * 1.5;
          const perpAngle = Math.atan2(dy, dx) + Math.PI / 2;
          current.x += Math.cos(perpAngle) * waveAmount;
          current.y += Math.sin(perpAngle) * waveAmount;
        }

        // Smooth velocity for natural movement
        current.vx = (current.x - (current as any).prevX || current.x) * 0.5;
        current.vy = (current.y - (current as any).prevY || current.y) * 0.5;
        (current as any).prevX = current.x;
        (current as any).prevY = current.y;
      }

      // Draw creature
      ctx.save();

      // Draw body segments (tail to head)
      for (let i = segments.length - 1; i >= 0; i--) {
        const segment = segments[i];
        const progress = i / segments.length;
        const size = 4 + progress * 6; // Head is larger, but smaller overall
        const opacity = 0.4 + progress * 0.6;

        // Color gradient (purple to cyan) - consistent, fixed colors
        const hue = 270 - progress * 60; // Purple (270) to Cyan (210) - fixed
        const saturation = 85; // Fixed saturation for consistency
        const lightness = 65; // Fixed lightness for consistency

        // Increase intensity on hover
        const intensity = 1 + hover.intensity * 0.3;

        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity * intensity})`;
        ctx.shadowBlur = 12 + progress * 15;
        ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${0.5 * intensity})`;

        ctx.beginPath();
        ctx.arc(segment.x, segment.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connecting lines for smoother body
      ctx.strokeStyle = `rgba(168, 85, 247, ${0.4 + hover.intensity * 0.3})`;
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(6, 182, 212, 0.6)";

      ctx.beginPath();
      ctx.moveTo(segments[0].x, segments[0].y);
      for (let i = 1; i < segments.length; i++) {
        const segment = segments[i];
        const prevSegment = segments[i - 1];
        const midX = (prevSegment.x + segment.x) / 2;
        const midY = (prevSegment.y + segment.y) / 2;
        ctx.quadraticCurveTo(prevSegment.x, prevSegment.y, midX, midY);
      }
      ctx.stroke();

      // Draw head glow (reuse head from above)
      const glowSize = 18 + hover.intensity * 8;
      const gradient = ctx.createRadialGradient(
        head.x,
        head.y,
        0,
        head.x,
        head.y,
        glowSize
      );
      gradient.addColorStop(0, `rgba(168, 85, 247, ${0.7 + hover.intensity * 0.3})`);
      gradient.addColorStop(0.5, `rgba(6, 182, 212, ${0.4 + hover.intensity * 0.3})`);
      gradient.addColorStop(1, "rgba(6, 182, 212, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(head.x, head.y, glowSize, 0, Math.PI * 2);
      ctx.fill();

      // Draw head (eye) - more visible
      ctx.fillStyle = `rgba(255, 255, 255, ${0.95 + hover.intensity * 0.05})`;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(6, 182, 212, 0.9)";
      ctx.beginPath();
      ctx.arc(head.x, head.y, 5 + hover.intensity * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw inner glow (pupil effect)
      ctx.fillStyle = `rgba(6, 182, 212, ${0.9 + hover.intensity * 0.1})`;
      ctx.beginPath();
      ctx.arc(head.x, head.y, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transition: "opacity 0.3s ease",
        mixBlendMode: "screen"
      }}
    />
  );
}
