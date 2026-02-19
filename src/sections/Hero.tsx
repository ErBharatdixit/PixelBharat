import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LiveStats } from "../components/LiveStats";
import { useSound } from "../hooks/useSound";

export const Hero = () => {
      const { playSound } = useSound();
      return (
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
                  {/* Background Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/20 rounded-full blur-[120px] -z-10" />
                  <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-secondary/10 rounded-full blur-[80px] -z-10" />

                  <div className="max-w-6xl w-full z-10 px-4 space-y-16">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                              {/* Left: Text Content */}
                              <div className="flex-1 text-center md:text-left">
                                    <motion.div
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5 }}
                                    >
                                          <h2 className="text-xl md:text-2xl font-mono text-accent-primary mb-6">
                                                Hello, I'm Bharat Dixit
                                          </h2>
                                    </motion.div>

                                    <motion.h1
                                          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                          Engineering tomorrow's <br />
                                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                                                digital experiences.
                                          </span>
                                    </motion.h1>

                                    <motion.p
                                          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl mb-10"
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                          Full Stack Developer | AI Enthusiast | Java &amp; MERN Stack
                                    </motion.p>

                                    <motion.div
                                          className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                          <a
                                                href="#projects"
                                                onClick={() => playSound('click')}
                                                className="w-full sm:w-auto text-center group relative px-8 py-3 bg-white text-black font-bold rounded-full transition-transform hover:scale-105 active:scale-95"
                                          >
                                                View Projects
                                                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                          </a>
                                          <a
                                                href="#contact"
                                                onClick={() => playSound('click')}
                                                className="w-full sm:w-auto text-center px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                                          >
                                                Contact Me
                                          </a>
                                    </motion.div>
                              </div>

                              {/* Right: Profile Photo */}
                              <motion.div
                                    className="flex-shrink-0"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                              >
                                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                                          <motion.div
                                                className="absolute inset-0 rounded-full"
                                                style={{
                                                      background: "conic-gradient(from 0deg, var(--accent-primary), var(--accent-secondary), var(--accent-primary))",
                                                      padding: "3px",
                                                }}
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                          >
                                                <div className="w-full h-full rounded-full bg-zinc-950" />
                                          </motion.div>

                                          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 blur-md" />

                                          <motion.div
                                                className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/10"
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                          >
                                                <img
                                                      src="/profile.jpg"
                                                      alt="Bharat Dixit"
                                                      className="w-full h-full object-cover object-[center_15%] scale-105"
                                                />
                                          </motion.div>

                                          <motion.div
                                                className="absolute bottom-4 -right-2 bg-zinc-900 border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 shadow-lg"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.8 }}
                                          >
                                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                <span className="text-xs text-gray-300 font-medium whitespace-nowrap">Open to work</span>
                                          </motion.div>
                                    </div>
                              </motion.div>
                        </div>

                        <LiveStats />
                  </div>

                  {/* Scroll Indicator */}
                  <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                              <div className="w-1 h-2 bg-white rounded-full" />
                        </div>
                  </motion.div>
            </section>
      );
};
