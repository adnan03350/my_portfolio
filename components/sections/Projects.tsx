"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "AI Project 1",
    image: "/project-1.png",
    problem: "Developing innovative AI solutions to solve complex real-world problems using advanced machine learning and deep learning techniques.",
    whatIDid: "Designed and implemented a comprehensive AI system leveraging state-of-the-art algorithms and frameworks. Developed custom models tailored to specific requirements, ensuring high performance and accuracy.",
    technologies: ["Deep Learning", "Machine Learning", "Python", "TensorFlow", "PyTorch"],
    outcome: "Successfully delivered a production-ready AI solution that meets client requirements and demonstrates significant improvements in performance and efficiency.",
  },
  {
    title: "AI Project 2",
    image: "/project-2.png",
    problem: "Creating intelligent systems that can process and analyze complex data to provide actionable insights and automated decision-making capabilities.",
    whatIDid: "Built an end-to-end AI pipeline from data preprocessing to model deployment. Implemented robust algorithms with focus on scalability and reliability.",
    technologies: ["Computer Vision", "Data Science", "Python", "OpenCV", "Scikit-learn"],
    outcome: "Delivered a scalable solution that processes large datasets efficiently and provides accurate predictions with high confidence scores.",
  },
  {
    title: "AI Project 3",
    image: "/project-3.png",
    problem: "Developing advanced machine learning models to address specific industry challenges and improve operational efficiency.",
    whatIDid: "Created custom machine learning models using transfer learning and fine-tuning techniques. Implemented comprehensive testing and validation procedures.",
    technologies: ["Machine Learning", "Neural Networks", "Python", "Keras", "Pandas"],
    outcome: "Achieved high accuracy rates and successfully deployed the model in a production environment with positive user feedback.",
  },
  {
    title: "AI Project 4",
    image: "/project-4.png",
    problem: "Building intelligent applications that leverage AI capabilities to enhance user experience and automate complex tasks.",
    whatIDid: "Developed a full-stack AI application with modern web technologies. Integrated machine learning models into user-friendly interfaces.",
    technologies: ["Web Development", "AI Integration", "FastAPI", "React", "Docker"],
    outcome: "Created a user-friendly application that successfully integrates AI capabilities, improving user experience and task automation.",
  },
  {
    title: "AI Project 5",
    image: "/project-5.png",
    problem: "Implementing scalable AI solutions that can handle large-scale data processing and real-time inference requirements.",
    whatIDid: "Architected a distributed AI system with optimized performance. Implemented efficient data processing pipelines and model serving infrastructure.",
    technologies: ["Cloud Computing", "MLOps", "AWS/GCP", "Kubernetes", "TensorFlow Serving"],
    outcome: "Deployed a highly scalable system capable of processing millions of requests with low latency and high availability.",
  },
  {
    title: "AI Project 6",
    image: "/project-6.png",
    problem: "Creating research-based AI innovations that push the boundaries of current technology and contribute to the field of artificial intelligence.",
    whatIDid: "Conducted extensive research and experimentation with novel AI architectures. Developed innovative approaches to solve challenging problems.",
    technologies: ["Research", "Deep Learning", "PyTorch", "NumPy", "Matplotlib"],
    outcome: "Contributed valuable insights to the AI research community and developed novel solutions with potential for real-world applications.",
  },
  {
    title: "AI Project 7",
    image: "/project-7.png",
    problem: "Building specialized AI systems for domain-specific applications with focus on accuracy and reliability.",
    whatIDid: "Developed domain-specific AI models with extensive training and validation. Implemented custom preprocessing and post-processing pipelines.",
    technologies: ["Domain-Specific AI", "Custom Models", "Python", "TensorFlow", "Data Processing"],
    outcome: "Delivered specialized AI solutions that meet domain-specific requirements with high accuracy and reliability.",
  },
  {
    title: "AI Project 8",
    image: "/project-8.png",
    problem: "Implementing AI-powered automation systems to streamline workflows and reduce manual intervention.",
    whatIDid: "Created intelligent automation systems using AI and machine learning. Integrated with existing systems for seamless operation.",
    technologies: ["Automation", "AI/ML", "Python", "APIs", "Integration"],
    outcome: "Successfully automated complex workflows, reducing manual effort significantly and improving overall efficiency.",
  },
  {
    title: "AI Project 9",
    image: "/project-9.png",
    problem: "Developing advanced computer vision systems for image and video analysis applications.",
    whatIDid: "Built sophisticated computer vision models for various image processing tasks. Implemented real-time processing capabilities.",
    technologies: ["Computer Vision", "Image Processing", "OpenCV", "YOLO", "CNN"],
    outcome: "Created high-performance computer vision systems that accurately process and analyze visual data in real-time.",
  },
  {
    title: "AI Project 10",
    image: "/project-10.png",
    problem: "Creating intelligent data analysis platforms that extract meaningful insights from complex datasets.",
    whatIDid: "Developed comprehensive data analysis tools using AI and machine learning. Built interactive dashboards and visualization systems.",
    technologies: ["Data Analysis", "Visualization", "Python", "Pandas", "Plotly"],
    outcome: "Delivered powerful analytics platforms that enable data-driven decision making with intuitive visualizations and insights.",
  },
  {
    title: "AI Project 11",
    image: "/project-11.png",
    problem: "Building predictive models that forecast future trends and patterns to support strategic decision-making.",
    whatIDid: "Developed advanced predictive modeling systems using time series analysis and machine learning. Implemented robust forecasting algorithms.",
    technologies: ["Predictive Modeling", "Time Series", "LSTM", "Prophet", "Scikit-learn"],
    outcome: "Created accurate forecasting systems that provide reliable predictions, enabling better planning and resource allocation.",
  },
  {
    title: "AI Project 12",
    image: "/project-12.png",
    problem: "Implementing end-to-end AI solutions that integrate multiple components for comprehensive problem-solving.",
    whatIDid: "Architected and developed complete AI systems integrating multiple models and components. Ensured seamless integration and optimal performance.",
    technologies: ["Full-Stack AI", "System Integration", "Python", "Microservices", "APIs"],
    outcome: "Delivered comprehensive AI solutions that successfully integrate multiple components, providing complete end-to-end functionality.",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.pageYOffset;
      const parallax = sectionRef.current.querySelectorAll(".parallax");
      parallax.forEach((el) => {
        const speed = 0.5;
        gsap.to(el, {
          y: scrolled * speed,
          duration: 0.3,
          ease: "none",
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 gradient-text"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4"
          >
            Real-world AI solutions that demonstrate expertise in computer vision, medical imaging, and production deployment.
          </motion.p>

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {projects.map((project, index) => (
              <TiltCard key={project.title} intensity={10}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 relative group"
                  style={{
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Glow border effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-blue-500/20 blur-xl" />
                  </div>

                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""} relative z-10`}>
                    {/* Image */}
                    <div className={`relative h-48 sm:h-64 md:h-full min-h-[250px] sm:min-h-[300px] ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className={`p-4 sm:p-6 md:p-8 lg:p-10 space-y-3 sm:space-y-4 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 gradient-text">{project.title}</h3>
                      </motion.div>

                      <div className="space-y-3 sm:space-y-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <h4 className="text-sm sm:text-base font-semibold text-purple-400 mb-1.5 sm:mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                            Problem Statement
                          </h4>
                          <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed">{project.problem}</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 }}
                        >
                          <h4 className="text-sm sm:text-base font-semibold text-cyan-400 mb-1.5 sm:mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                            What I Have Done
                          </h4>
                          <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed">{project.whatIDid}</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                        >
                          <h4 className="text-sm sm:text-base font-semibold text-blue-400 mb-1.5 sm:mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + techIndex * 0.02 }}
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10 hover:border-cyan-400/50 transition-all cursor-default"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.25 }}
                        >
                          <h4 className="text-sm sm:text-base font-semibold text-green-400 mb-1.5 sm:mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            Outcome & Impact
                          </h4>
                          <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed">{project.outcome}</p>
                        </motion.div>
                      </div>
                    </div>
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
