import { useEffect } from "react";
import type { ReactNode } from "react";

import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { NeuralBackground } from "./components/NeuralBackground";
import { AIChatbot } from "./components/AIChatbot";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

interface LayoutProps {
      children: ReactNode;
      onResumeClick: () => void;
}

export const Layout = ({ children, onResumeClick }: LayoutProps) => {
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
                  <NeuralBackground />
                  <CustomCursor />
                  <Navbar onResumeClick={onResumeClick} />
                  {children}
                  <AIChatbot />
                  <ThemeSwitcher />
            </div>
      );
};
