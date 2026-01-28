"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative order-2 md:order-1"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-2xl blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="relative glass-strong rounded-2xl p-2 border border-white/20"
                  whileHover={{ scale: 1.02, rotate: [0, 1, -1, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/profile.png"
                    alt="Adnan Hameed"
                    width={500}
                    height={500}
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-6 order-1 md:order-2"
            >
              <motion.div
                className="glass rounded-2xl p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed"
                >
                  I am <span className="text-purple-400 font-semibold">Adnan Hameed</span>, the CEO and Founder of{" "}
                  <span className="text-cyan-400 font-semibold">Aizentra Labs</span>, an AI innovation company
                  dedicated to pushing the boundaries of artificial intelligence and machine learning.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed"
                >
                  As an AI engineer with a deep passion for computer vision and medical imaging, I specialize in
                  developing cutting-edge solutions that solve real-world problems. My expertise spans across deep
                  learning architectures, including CNNs, EfficientNet, and YOLO models, which I leverage to build
                  intelligent systems capable of visual understanding and decision-making.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed"
                >
                  With a research-oriented mindset, I focus on bridging the gap between academic research and
                  production-ready AI products. My work encompasses everything from custom model training and
                  optimization to deploying scalable AI web applications using modern frameworks like Streamlit,
                  FastAPI, and Django.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed"
                >
                  At Aizentra Labs, I lead a team of talented engineers in delivering AI solutions that transform
                  industries, with a particular focus on medical AI applications that can improve healthcare outcomes
                  and save lives.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
