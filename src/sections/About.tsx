import { motion } from "framer-motion";
import { GraduationCap, Code2, BookOpen } from "lucide-react";

export const About = () => {
      return (
            <section id="about" className="py-20 relative">
                  <div className="max-w-4xl mx-auto">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="mb-16"
                        >
                              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                              <div className="w-20 h-1 bg-accent-primary rounded-full mb-8" />
                              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    I am a detail-oriented B.Tech (CSE) student at GLA University with a strong foundation in Java and Full Stack Development, now <strong>focusing on Artificial Intelligence</strong>.
                                    Previously, I completed my B.Sc (PCM) from Kanpur University. I am passionate about solving DSA problems,
                                    building real-world MERN stack applications, and <strong>integrating AI-driven insights</strong> into modern web solutions.
                              </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                              {/* Education Column */}
                              <div>
                                    <h3 className="text-xl font-bold mb-6 flex items-center">
                                          <GraduationCap className="mr-2 text-accent-primary" /> Education
                                    </h3>
                                    <div className="space-y-4">
                                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                                <h4 className="text-base font-bold text-white">B.Tech in Computer Science (Lateral Entry)</h4>
                                                <p className="text-accent-primary text-sm">GLA University, Mathura</p>
                                                <p className="text-gray-500 text-xs mt-1">2023 - 2026 (Expected)</p>
                                          </div>
                                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                                <h4 className="text-base font-bold text-white">B.Sc (PCM)</h4>
                                                <p className="text-accent-primary text-sm">Chhatrapati Shahu Ji Maharaj University, Kanpur</p>
                                                <p className="text-gray-500 text-xs mt-1">Completed: 2023</p>
                                          </div>
                                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                                <h4 className="text-base font-bold text-white">Intermediate (Science Stream)</h4>
                                                <p className="text-accent-primary text-sm">Seth Babu Ram Bhartiya Inter College, Pali, Hardoi</p>
                                                <p className="text-gray-500 text-xs mt-1">Completed: 2020</p>
                                          </div>
                                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                                <h4 className="text-base font-bold text-white">High School (Science Stream)</h4>
                                                <p className="text-accent-primary text-sm">Public Shiksha Niketan, Pali, Hardoi</p>
                                                <p className="text-gray-500 text-xs mt-1">Completed: 2018</p>
                                          </div>
                                    </div>
                              </div>

                              {/* Coursework Column */}
                              <div>
                                    <h3 className="text-xl font-bold mb-6 flex items-center">
                                          <BookOpen className="mr-2 text-accent-secondary" /> Coursework
                                    </h3>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors h-full">
                                          <ul className="space-y-4 text-gray-300">
                                                <li className="flex items-start">
                                                      <Code2 className="w-5 h-5 mr-3 text-accent-primary mt-1" />
                                                      <span>Data Structures and Algorithms (Java)</span>
                                                </li>
                                                <li className="flex items-start">
                                                      <Code2 className="w-5 h-5 mr-3 text-accent-primary mt-1" />
                                                      <span>Theory of Automata and Formal Language</span>
                                                </li>
                                                <li className="flex items-start">
                                                      <Code2 className="w-5 h-5 mr-3 text-accent-primary mt-1" />
                                                      <span>Soft Computing & Machine Learning</span>
                                                </li>
                                                <li className="flex items-start">
                                                      <Code2 className="w-5 h-5 mr-3 text-accent-primary mt-1" />
                                                      <span>Network Security and Cryptography</span>
                                                </li>
                                                <li className="flex items-start">
                                                      <Code2 className="w-5 h-5 mr-3 text-accent-primary mt-1" />
                                                      <span>Software Engineering</span>
                                                </li>
                                                <li className="flex items-start">
                                                      <Code2 className="w-5 h-5 mr-3 text-accent-primary mt-1" />
                                                      <span>Digital Image Processing</span>
                                                </li>
                                                <li className="flex items-start">
                                                      <Code2 className="w-5 h-5 mr-3 text-accent-primary mt-1" />
                                                      <span>Web Development (MERN Stack)</span>
                                                </li>
                                                <li className="flex items-start">
                                                      <Code2 className="w-5 h-5 mr-3 text-accent-primary mt-1" />
                                                      <span>Database Management Systems (SQL)</span>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
