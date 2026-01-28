"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "ebereokwudili",
    location: "United Kingdom",
    image: "/testimonial-1.jpg",
    text: "Provided exactly what I needed. Was very cooperative throughout and delivered high quality work in quite a short time. Would definitely recommend. Will definitely use this service again in the future!",
  },
  {
    name: "lopomose",
    location: "Singapore",
    image: "/testimonial-2.jpg",
    text: "Adnan Hd is quick to respond and very friendly throughout the entire process. The documentation was delivered quickly, and the final output was informative. Overall, a very pleasant experience, with excellent delivery speed and professionalism.",
  },
  {
    name: "ShahFaisal",
    location: "Saudi Arabia",
    image: "/testimonial-3.jpg",
    text: "Excellent work! The face recognition system is highly accurate and works flawlessly. Very professional and skilled seller. Highly recommended!",
  },
  {
    name: "edward_adams1",
    location: "Austria",
    image: "/testimonial-1.jpg",
    text: "Delivered high-quality work on time, great communication, and very professional. Highly recommended!",
  },
  {
    name: "Salmaa",
    location: "United Kingdom",
    image: "/testimonial-2.jpg",
    text: "It was great work he is an expert 😍",
  },
  {
    name: "sk_1999",
    location: "Turkey",
    image: "/testimonial-3.jpg",
    text: "amazing hard working man, great service and fast response time.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text"
          >
            Client Testimonials
          </motion.h2>

          <div className="relative">
            {/* Testimonial Cards */}
            <div className="relative h-[400px] sm:h-[450px] lg:h-[500px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.8,
                    y: index === currentIndex ? 0 : 50,
                    zIndex: index === currentIndex ? 10 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 flex items-center justify-center ${
                    index === currentIndex ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                >
                  <div className="glass-strong rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 hover:border-cyan-400/50 transition-all duration-300 relative group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-blue-500/20 blur-xl" />
                    </div>

                    <div className="relative z-10 text-center">
                      {/* Quote icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mb-6"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-400/20 border border-purple-400/30">
                          <svg
                            className="w-8 h-8 text-purple-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Testimonial text */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 italic"
                      >
                        &ldquo;{testimonial.text}&rdquo;
                      </motion.p>

                      {/* Divider */}
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"
                      />

                      {/* Author info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                      >
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-cyan-400/50">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-400">{testimonial.location}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-cyan-400 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-white/20 hover:border-cyan-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-white/20 hover:border-cyan-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
