import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
      {
            title: "Multiple School Management System",
            desc: "A comprehensive multi-school management system with Role-Based Access Control (RBAC) for Admins, Teachers,Parents and Students.",
            tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind"],
            image: "/projects/school.png",

            github: "https://github.com/ErBharatdixit/ErBharatdixit-Multiple-school-Management-System?tab=readme-ov-file",
            demo: "https://erbharatdixit-multiple-school-management.onrender.com"
      },
      {
            title: "Wanderlust Travel Portal",
            desc: "Full-stack travel booking app with property listings, real-time chat, map integration, and Razorpay payment gateway.",
            tags: ["MERN Stack", "Passport.js", "Cloudinary", "Leaflet", "Razorpay"],
            image: "/projects/travel.png",

            github: "https://github.com/ErBharatdixit/Wondelust-Ventures?tab=readme-ov-file",
            demo: "https://wondelust-ventures-portal.onrender.com/"
      },
      {
            title: "FarmAssist - Crop Recommendation",
            desc: "AI-powered farming assistant with crop selection, fertilizer guidance, and disease detection using Random Forest (95% accuracy).",
            tags: ["React", "FastAPI", "Python", "MongoDB", "Scikit-learn", "Tailwind"],
            image: "/projects/farm.png",

            github: "https://github.com/ErBharatdixit/farming-assistant",
            demo: "#"
      },
      {
            title: "Smart Expense Budget & Shared Room Management",
            desc: "Smart Expense Budget & Shared Room Management System with EMI Reminders using Machine Learning.",
            tags: ["React", "Node.js", "Machine Learning", "Python", "MongoDB"],
            image: "/projects/expense_tracker.png",
            github: "#",
            demo: "https://expenseml-frontend.onrender.com/"
      }

];

export const Projects = () => {
      const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

      return (
            <section id="projects" className="py-20">
                  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                  >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-accent-primary rounded-full" />
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {projects.map((project, index) => (
                              <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -10 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors"
                              >
                                    {/* Image Container */}
                                    <div className="aspect-video w-full overflow-hidden relative">
                                          <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                          />
                                          <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 md:opacity-0 group-hover:opacity-100 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
                                                <a href={project.github} className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors" title="GitHub">
                                                      <Github className="w-5 h-5" />
                                                </a>
                                                <a href={project.demo} className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors" title="Live Demo">
                                                      <ExternalLink className="w-5 h-5" />
                                                </a>
                                          </div>
                                    </div>

                                    <div className="p-6">
                                          <h3 className="text-xl font-bold mb-2 group-hover:text-accent-primary transition-colors">{project.title}</h3>
                                          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                                          <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                      <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5">
                                                            {tag}
                                                      </span>
                                                ))}
                                          </div>
                                    </div>
                              </motion.div>
                        ))}
                  </div>


            </section>
      );
};
