import { motion } from "framer-motion";

const skills = [
      { category: "Languages", items: ["Java", "JavaScript", "SQL", "HTML/CSS"] },
      { category: "Frontend", items: ["React.js", "Tailwind CSS", "Redux", "Framer Motion"] },
      { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT/Passport)"] },
      { category: "Databases & Tools", items: ["MongoDB", "MySQL", "Git", "GitHub", "Visual Studio Code"] },
];

export const Skills = () => {
      return (
            <section id="skills" className="py-20">
                  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                  >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                        <div className="w-20 h-1 bg-accent-primary rounded-full" />
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((section, sIndex) => (
                              <motion.div
                                    key={section.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: sIndex * 0.1 }}
                                    className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5"
                              >
                                    <h3 className="text-xl font-bold text-accent-primary mb-6 border-b border-white/10 pb-2">
                                          {section.category}
                                    </h3>
                                    <div className="flex flex-col gap-3">
                                          {section.items.map((skill, index) => (
                                                <div key={index} className="flex items-center text-gray-300">
                                                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3" />
                                                      {skill}
                                                </div>
                                          ))}
                                    </div>
                              </motion.div>
                        ))}
                  </div>
            </section>
      );
};
