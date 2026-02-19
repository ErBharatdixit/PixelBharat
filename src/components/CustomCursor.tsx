import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
      const [isTouchDevice, setIsTouchDevice] = useState(false);

      useEffect(() => {
            const checkTouch = () => {
                  setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
            };
            checkTouch();

            const updateMousePosition = (e: MouseEvent) => {
                  setMousePosition({ x: e.clientX, y: e.clientY });
            };

            window.addEventListener("mousemove", updateMousePosition);

            return () => {
                  window.removeEventListener("mousemove", updateMousePosition);
            };
      }, []);

      if (isTouchDevice) return null;

      return (
            <motion.div
                  className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-50 mix-blend-difference"
                  animate={{
                        x: mousePosition.x - 16,
                        y: mousePosition.y - 16,
                  }}
                  transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        mass: 0.5,
                  }}
            >
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
      );
};
