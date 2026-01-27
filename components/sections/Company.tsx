"use client";

import { motion } from "framer-motion";
import { Brain, Eye, Stethoscope, Cloud, Zap, MessageSquare } from "lucide-react";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI systems tailored to your business needs, from concept to deployment.",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: Eye,
    title: "Computer Vision Systems",
    description: "Advanced visual recognition and analysis systems powered by state-of-the-art deep learning models.",
    gradient: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Stethoscope,
    title: "Medical AI",
    description: "Specialized AI solutions for healthcare, including medical imaging analysis and diagnostic assistance.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: MessageSquare,
    title: "GenAI & Chatbots",
    description: "Intelligent conversational AI systems and generative AI solutions for enhanced user experiences.",
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "AI SaaS Development",
    description: "Scalable cloud-based AI platforms and software-as-a-service solutions for businesses.",
    gradient: "from-cyan-400 to-blue-600",
  },
];

export default function Company() {
  return (
    <section id="company" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Logo and Title Section */}
          <div className="flex flex-col items-center mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mb-6"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full h-full">
                <Image
                  src="/logos/logo_white.png"
                  alt="Aizentra Labs Logo"
                  fill
                  className="object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  priority
                />
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 gradient-text"
            >
              Aizentra Labs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-400 text-center mb-8 max-w-3xl mx-auto"
            >
              An AI innovation company at the forefront of artificial intelligence, developing intelligent systems
              that transform industries and solve complex challenges.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-6 sm:p-8 md:p-12 mb-12 lg:mb-16 border border-white/10 hover:border-white/20 transition-colors"
          >
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Aizentra Labs is dedicated to advancing the field of artificial intelligence through cutting-edge
              research and practical applications. We specialize in computer vision, deep learning, and medical AI,
              delivering solutions that combine academic rigor with real-world impact. Our team of expert engineers
              and researchers work collaboratively to push the boundaries of what&apos;s possible with AI, creating
              products that are both innovative and production-ready.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <TiltCard key={service.title} intensity={8}>
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className="glass rounded-xl p-6 sm:p-8 space-y-4 group cursor-pointer border border-white/10 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden h-full"
                  style={{
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-20 blur-xl`} />
                  </div>
                  <div className="relative z-10">
                    <motion.div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all mt-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base mt-2">{service.description}</p>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      initial={false}
                    />
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
