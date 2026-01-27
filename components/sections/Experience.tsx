"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Target, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "CEO & Founder",
    company: "Aizentra Labs",
    period: "Present",
    description: "Leading Aizentra Labs as CEO and Founder, driving the company's vision of advancing AI innovation. Responsible for strategic direction, business development, and overseeing all technical and operational aspects of the organization.",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: Users,
    title: "Team Leadership",
    company: "Aizentra Labs",
    period: "Present",
    description: "Leading cross-functional AI teams of engineers, researchers, and data scientists. Fostering a culture of innovation, collaboration, and excellence. Managing project timelines, resource allocation, and ensuring delivery of high-quality AI solutions to clients.",
    gradient: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Target,
    title: "AI Solutions Delivery",
    company: "Aizentra Labs",
    period: "Present",
    description: "Overseeing the delivery of cutting-edge AI solutions to enterprise clients across various industries. From initial consultation to deployment and maintenance, ensuring that each project meets the highest standards of quality, performance, and business impact.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Award,
    title: "Research & Innovation",
    company: "Aizentra Labs",
    period: "Present",
    description: "Maintaining a research-oriented mindset, staying at the forefront of AI advancements. Contributing to the field through publications, open-source projects, and continuous learning. Bridging the gap between academic research and production-ready AI products.",
    gradient: "from-purple-500 to-cyan-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Experience & Leadership
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Leading AI innovation and delivering transformative solutions at Aizentra Labs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-xl p-8 space-y-4 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0`}>
                    <exp.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 glass rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-semibold mb-4 gradient-text text-center">Leadership Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              As CEO of Aizentra Labs, I believe in combining technical excellence with strategic vision. My
              approach to leadership emphasizes innovation, continuous learning, and delivering real-world impact.
              I'm committed to building AI solutions that not only push technological boundaries but also create
              meaningful value for our clients and contribute to the advancement of the AI field as a whole.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
