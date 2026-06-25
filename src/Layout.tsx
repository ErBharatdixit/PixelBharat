import { useEffect } from "react";
import type { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";

import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { NeuralBackground } from "./components/NeuralBackground";
import { AIChatbot } from "./components/AIChatbot";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { VoiceNavigation } from "./components/VoiceNavigation";
import { HackerMode } from "./components/HackerMode";

interface LayoutProps {
      children: ReactNode;
      onResumeClick: () => void;
}

export const Layout = ({ children, onResumeClick }: LayoutProps) => {
      const { scrollYProgress } = useScroll();

      useEffect(() => {
            const lenis = new Lenis({
                  duration: 1.2,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                  orientation: "vertical",
            });

            function raf(time: number) {
                  lenis.raf(time);
                  requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            return () => {
                  lenis.destroy();
            }
      }, []);

      return (
            <div className="min-h-screen text-white selection:bg-white selection:text-black">
                  <motion.div 
                        className="fixed top-0 left-0 right-0 h-1 bg-accent-primary z-[100] origin-left"
                        style={{ scaleX: scrollYProgress }}
                  />
                  <HackerMode />
                  <NeuralBackground />
                  <CustomCursor />
                  <Navbar onResumeClick={onResumeClick} />
                  {children}
                  <AIChatbot />
                  <ThemeSwitcher />
                  <VoiceNavigation onResumeClick={onResumeClick} />
            </div>
      );
};
