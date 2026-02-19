import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Calendar, ExternalLink, Github } from "lucide-react";

const experience = [
      {
            type: "internship",
            title: "Job Oriented Value Added Course",
            company: "GLA University, Mathura",
            period: "June 2024 – July 2024",
            desc: "Gained hands-on experience in full-stack development and real-world project execution. Worked on implementing application features following structured development practices."
      }
];

export const Experience = () => {
      return (
            <section id="experience" className="py-20 relative">
                  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center md:text-left"
                  >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                        <div className="w-20 h-1 bg-accent-primary rounded-full mx-auto md:mx-0" />
                  </motion.div>

                  <div className="relative border-l border-white/20 ml-4 md:ml-10 space-y-12">
                        {experience.map((item, index) => (
                              <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-8 md:pl-12"
                              >
                                    {/* Timeline Icon */}
                                    <div className="absolute -left-3 md:-left-3 top-0 bg-black p-1 border border-white/20 rounded-full">
                                          <Briefcase className="w-4 h-4 text-accent-primary" />
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                          <span className="hidden sm:block text-gray-600">•</span>
                                          <span className="text-accent-primary font-medium">{item.company}</span>
                                    </div>

                                    <div className="flex items-center text-gray-500 text-sm mb-4">
                                          <Calendar className="w-4 h-4 mr-2" />
                                          {item.period}
                                    </div>

                                    <p className="text-gray-400 max-w-2xl leading-relaxed">
                                          {item.desc}
                                    </p>
                              </motion.div>
                        ))}
                  </div>

                  {/* Achievements / Coding Section */}
                  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 mb-16"
                  >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                              <span className="text-accent-primary">#</span> Coding Achievements
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                              <a
                                    href="https://leetcode.com/u/bharat010703/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-accent-primary/50 transition-all hover:bg-zinc-800/50"
                              >
                                    <div className="flex items-start justify-between mb-4">
                                          <div>
                                                <h4 className="text-lg font-bold text-white group-hover:text-accent-primary transition-colors">LeetCode</h4>
                                                <p className="text-sm text-gray-400">Solved numerous DSA problems</p>
                                          </div>
                                          <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-accent-primary transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                          <span>View Profile</span>
                                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                              </a>

                              <a
                                    href="https://github.com/ErBharatdixit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-white/30 transition-all hover:bg-zinc-800/50"
                              >
                                    <div className="flex items-start justify-between mb-4">
                                          <div>
                                                <h4 className="text-lg font-bold text-white group-hover:text-white transition-colors">GitHub</h4>
                                                <p className="text-sm text-gray-400">Explore my repositories</p>
                                          </div>
                                          <Github className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                          <span>View Profile</span>
                                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                              </a>
                        </div>


                  </motion.div>

                  <div className="mt-16 bg-white/5 rounded-2xl p-8 border border-white/10 text-center max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold mb-4">Ready to Start a New Project?</h3>
                        <p className="text-gray-400 mb-6">I am currently available for freelance projects and job opportunities.</p>
                        <a href="#contact" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                              Get in Touch
                        </a>
                  </div>
            </section>
      );
};
