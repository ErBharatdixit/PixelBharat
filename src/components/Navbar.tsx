import { useState, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";
import { useSound } from "../hooks/useSound";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
      onResumeClick: () => void;
}

export const Navbar = ({ onResumeClick }: NavbarProps) => {
      const { playSound } = useSound();
      const [scrolled, setScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  setScrolled(window.scrollY > 50);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const navLinks = [
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            { name: "Experience", href: "#experience" },
            { name: "Contact", href: "#contact" },
      ];

      const toggleMobileMenu = () => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            playSound('click');
      };

      const handleLinkClick = () => {
            setIsMobileMenuOpen(false);
            playSound('click');
      };

      return (
            <nav
                  className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                        ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                        : "bg-transparent py-6"
                        }`}
            >
                  <div className="container mx-auto px-6 flex justify-between items-center">
                        <a
                              href="#"
                              onClick={() => playSound('click')}
                              className="text-xl md:text-2xl font-bold font-mono tracking-tighter z-50"
                        >
                              BHARAT DIXIT
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                              {navLinks.map((link) => (
                                    <a
                                          key={link.name}
                                          href={link.href}
                                          onMouseEnter={() => playSound('hover')}
                                          onClick={() => playSound('click')}
                                          className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                    >
                                          {link.name}
                                    </a>
                              ))}
                              <button
                                    onClick={() => {
                                          onResumeClick();
                                          playSound('click');
                                    }}
                                    onMouseEnter={() => playSound('hover')}
                                    className="flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 hover:border-accent-primary/50 transition-all text-sm font-medium backdrop-blur-sm"
                              >
                                    <FileText className="w-4 h-4 text-accent-primary" />
                                    Resume
                              </button>
                              <a
                                    href="#contact"
                                    onClick={() => playSound('click')}
                                    onMouseEnter={() => playSound('hover')}
                                    className="px-6 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-sm font-semibold rounded-full hover:opacity-90 transition-all shadow-lg shadow-accent-primary/20"
                              >
                                    Hire Me
                              </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                              className="md:hidden z-50 p-2 text-gray-300 hover:text-white"
                              onClick={toggleMobileMenu}
                        >
                              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                  </div>

                  {/* Mobile Menu Drawer */}
                  <AnimatePresence>
                        {isMobileMenuOpen && (
                              <motion.div
                                    initial={{ opacity: 0, x: "100%" }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: "100%" }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                              >
                                    {navLinks.map((link) => (
                                          <a
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => handleLinkClick()}
                                                className="text-2xl font-bold text-gray-300 hover:text-white transition-colors"
                                          >
                                                {link.name}
                                          </a>
                                    ))}
                                    <button
                                          onClick={() => {
                                                onResumeClick();
                                                setIsMobileMenuOpen(false);
                                                playSound('click');
                                          }}
                                          className="flex items-center gap-2 text-2xl font-bold text-gray-300 hover:text-white transition-colors"
                                    >
                                          <FileText className="w-6 h-6" />
                                          Resume
                                    </button>
                                    <a
                                          href="#contact"
                                          onClick={() => handleLinkClick()}
                                          className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xl font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-accent-primary/20"
                                    >
                                          Hire Me
                                    </a>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </nav>
      );
};
