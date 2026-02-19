import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
      const [text, setText] = useState("");
      const fullText = "Hello, I'm Bharat Dixit";

      useEffect(() => {
            const timeout = setTimeout(() => {
                  onComplete();
            }, 3500);

            return () => clearTimeout(timeout);
      }, [onComplete]);

      useEffect(() => {
            let index = 0;
            const interval = setInterval(() => {
                  setText(fullText.slice(0, index));
                  index++;
                  if (index > fullText.length) {
                        clearInterval(interval);
                  }
            }, 100);

            return () => clearInterval(interval);
      }, []);

      return (
            <AnimatePresence>
                  <motion.div
                        className="fixed inset-0 z-50 bg-black flex items-center justify-center font-mono"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                  >
                        <div className="text-4xl md:text-6xl font-bold text-white relative">
                              <span className="mr-4 text-blue-500">&gt;</span>
                              {text}
                              <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-3 h-10 bg-white inline-block ml-2 align-middle"
                              />
                        </div>
                  </motion.div>
            </AnimatePresence>
      );
};
