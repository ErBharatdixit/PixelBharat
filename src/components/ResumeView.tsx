import { motion } from "framer-motion";
import { useEffect } from "react";
import { Download, X, Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

interface ResumeViewProps {
      isOpen: boolean;
      onClose: () => void;
}

export const ResumeView = ({ isOpen, onClose }: ResumeViewProps) => {
      useEffect(() => {
            if (isOpen) {
                  document.body.style.overflow = "hidden";
                  document.documentElement.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "auto";
                  document.documentElement.style.overflow = "auto";
            }
            return () => {
                  document.body.style.overflow = "auto";
                  document.documentElement.style.overflow = "auto";
            };
      }, [isOpen]);

      if (!isOpen) return null;

      const handleDownload = () => {
            window.print();
      };

      return (
            <div
                  data-lenis-prevent
                  className="fixed inset-0 z-[100] bg-black md:bg-black/90 md:backdrop-blur-sm overflow-y-auto print:bg-white print:p-0"
            >
                  {/* Controls - Hidden on print */}
                  <div className="sticky top-0 z-10 bg-zinc-900 border-b border-white/10 px-6 py-4 flex justify-between items-center print:hidden">
                        <h2 className="text-xl font-bold">Resume Preview</h2>
                        <div className="flex gap-4">
                              <button
                                    onClick={handleDownload}
                                    className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors"
                              >
                                    <Download className="w-4 h-4" />
                                    Download PDF
                              </button>
                              <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                              >
                                    <X className="w-6 h-6" />
                              </button>
                        </div>
                  </div>

                  {/* Resume Content */}
                  <div className="flex justify-center p-4 md:p-8 print:p-0">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="w-full max-w-[800px] bg-white text-black p-8 md:p-12 shadow-2xl min-h-[1123px] print:shadow-none print:w-full print:max-w-none"
                        >
                              {/* Header */}
                              <header className="border-b-2 border-black pb-8 mb-8 text-center">
                                    <h1 className="text-4xl font-bold mb-4 tracking-tight uppercase">Bharat Dixit</h1>
                                    <p className="text-lg font-semibold text-gray-700 mb-4">Full Stack Developer | AI Enthusiast</p>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-gray-600 justify-items-center">
                                          <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4" /> bharat010703@gmail.com
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4" /> +91 7068876861
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" /> Mathura, India
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <Linkedin className="w-4 h-4" /> bharat-dixit
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <Github className="w-4 h-4" /> ErBharatdixit
                                          </div>
                                          <div className="flex items-center gap-2 text-blue-600 font-medium">
                                                <Globe className="w-4 h-4" /> Portfolio Live
                                          </div>
                                    </div>
                              </header>

                              {/* Summary */}
                              <section className="mb-8">
                                    <h2 className="text-xl font-bold border-l-4 border-black pl-3 mb-4 uppercase">Summary</h2>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                          Detail-oriented B.Tech (CSE) student at GLA University focusing on Artificial Intelligence.
                                          Strong foundation in Java and Full Stack Development. Passionate about solving DSA problems,
                                          building real-world MERN stack applications, and integrating AI-driven insights into modern web solutions.
                                    </p>
                              </section>

                              {/* Skills */}
                              <section className="mb-8">
                                    <h2 className="text-xl font-bold border-l-4 border-black pl-3 mb-4 uppercase">Technical Skills</h2>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                          <div><strong>Languages:</strong> Java, JavaScript, SQL, HTML/CSS</div>
                                          <div><strong>Frontend:</strong> React.js, Tailwind CSS, Redux</div>
                                          <div><strong>Backend:</strong> Node.js, Express.js, REST APIs</div>
                                          <div><strong>Databases:</strong> MongoDB, MySQL</div>
                                          <div><strong>AI/Other:</strong> Machine Learning, Soft Computing, Git</div>
                                          <div><strong>Core CS:</strong> DSA, OS, Software Engineering, TOC</div>
                                    </div>
                              </section>

                              {/* Experience */}
                              <section className="mb-8">
                                    <h2 className="text-xl font-bold border-l-4 border-black pl-3 mb-6 uppercase">Experience</h2>
                                    <div className="mb-4">
                                          <div className="flex justify-between font-bold mb-1 uppercase text-sm">
                                                <span>Job Oriented Value Added Course</span>
                                                <span>2024</span>
                                          </div>
                                          <div className="text-sm font-semibold text-gray-700 mb-2">GLA University, Mathura</div>
                                          <p className="text-sm text-gray-600 leading-relaxed">
                                                Gained hands-on experience in full-stack development and real-world project execution.
                                                Worked on implementing application features following structured development practices.
                                          </p>
                                    </div>
                              </section>

                              {/* Projects */}
                              <section className="mb-8">
                                    <h2 className="text-xl font-bold border-l-4 border-black pl-3 mb-6 uppercase">Noteworthy Projects</h2>
                                    <div className="space-y-4">
                                          <div>
                                                <div className="flex justify-between font-bold text-sm mb-1 uppercase">
                                                      <span>Smart Expense Budget & Room Management</span>
                                                      <span className="text-blue-600 lowercase font-normal">Live on Render</span>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                      ML-powered financial tool with EMI reminders and shared room management.
                                                      Tech: React, Node.js, Python, ML Services.
                                                </p>
                                          </div>
                                          <div>
                                                <div className="flex justify-between font-bold text-sm mb-1 uppercase">
                                                      <span>Multiple School Management System</span>
                                                      <span className="text-blue-600 lowercase font-normal">GitHub</span>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                      Comprehensive RBAC system for students, teachers, and admins.
                                                      Tech: MERN Stack, JWT Auth.
                                                </p>
                                          </div>
                                          <div>
                                                <div className="flex justify-between font-bold text-sm mb-1 uppercase">
                                                      <span>Wanderlust Travel Portal</span>
                                                      <span className="text-blue-600 lowercase font-normal">Live</span>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                      Full-stack travel booking with Razorpay integration and map services.
                                                </p>
                                          </div>
                                    </div>
                              </section>

                              {/* Education */}
                              <section>
                                    <h2 className="text-xl font-bold border-l-4 border-black pl-3 mb-6 uppercase">Education</h2>
                                    <div className="space-y-4">
                                          <div>
                                                <div className="flex justify-between font-bold text-sm uppercase">
                                                      <span>B.Tech in Computer Science (Lateral Entry)</span>
                                                      <span>2023 - 2026</span>
                                                </div>
                                                <div className="text-sm text-gray-700 italic">GLA University, Mathura</div>
                                          </div>
                                          <div>
                                                <div className="flex justify-between font-bold text-sm uppercase">
                                                      <span>Bachelor of Science (PCM)</span>
                                                      <span>2020 - 2023</span>
                                                </div>
                                                <div className="text-sm text-gray-700 italic">CSJM University, Kanpur</div>
                                          </div>
                                    </div>
                              </section>

                              <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-[10px] text-gray-400">
                                    Generated from bhartdixit.portfolio | Professional Digital Resume
                              </footer>
                        </motion.div>
                  </div>

                  <style>{`
                        @media print {
                              body * {
                                    visibility: hidden;
                              }
                              .print\\:bg-white {
                                    background: white !important;
                                    color: black !important;
                              }
                              .fixed.inset-0, .fixed.inset-0 * {
                                    visibility: visible;
                              }
                              .sticky.top-0 {
                                    display: none !important;
                              }
                              .fixed.inset-0 {
                                    position: static !important;
                                    height: auto !important;
                                    overflow: visible !important;
                              }
                              .min-h-\\[1123px\\] {
                                    min-height: 0 !important;
                              }
                        }
                  `}</style>
            </div>
      );
};
