"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Deep Learning", level: 95 },
      { name: "Computer Vision", level: 92 },
      { name: "CNN Architectures", level: 90 },
      { name: "YOLO", level: 88 },
      { name: "EfficientNet", level: 85 },
      { name: "Transfer Learning", level: 90 },
    ],
  },
  {
    category: "Computer Vision",
    skills: [
      { name: "Image Classification", level: 93 },
      { name: "Object Detection", level: 91 },
      { name: "Medical Imaging", level: 89 },
      { name: "Image Processing", level: 88 },
      { name: "OpenCV", level: 87 },
    ],
  },
  {
    category: "Web Frameworks",
    skills: [
      { name: "Streamlit", level: 92 },
      { name: "FastAPI", level: 90 },
      { name: "Django", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "React", level: 86 },
    ],
  },
  {
    category: "Deployment & APIs",
    skills: [
      { name: "Docker", level: 88 },
      { name: "AWS/GCP", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "WebSockets", level: 80 },
      { name: "CI/CD", level: 83 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            A comprehensive skill set spanning AI research, development, and production deployment.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass rounded-xl p-6 space-y-6"
              >
                <h3 className="text-2xl font-semibold gradient-text">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
