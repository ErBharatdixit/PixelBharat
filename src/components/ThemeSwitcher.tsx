import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const themeOptions = [
      { id: 'blue', color: 'bg-blue-500', name: 'Original' },
      { id: 'purple', color: 'bg-purple-500', name: 'Neon' },
      { id: 'emerald', color: 'bg-emerald-500', name: 'Forest' },
      { id: 'yellow', color: 'bg-yellow-500', name: 'Sunset' },
      { id: 'rose', color: 'bg-rose-500', name: 'Bloom' },
      { id: 'cyan', color: 'bg-cyan-500', name: 'Cyber' },
];

export const ThemeSwitcher = () => {
      const [isOpen, setIsOpen] = useState(false);
      const { activeTheme, setTheme } = useTheme();

      return (
            <div className="fixed bottom-24 left-6 z-50">
                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                                    className="mb-4 p-2 bg-zinc-900/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md flex flex-col gap-2"
                              >
                                    {themeOptions.map((theme) => (
                                          <button
                                                key={theme.id}
                                                onClick={() => {
                                                      setTheme(theme.id as any);
                                                      // setIsOpen(false); // keep open for quick testing
                                                }}
                                                className={`w-10 h-10 rounded-full ${theme.color} flex items-center justify-center transition-transform hover:scale-110 active:scale-95 relative group`}
                                          >
                                                {activeTheme === theme.id && (
                                                      <Check className="w-5 h-5 text-white stroke-[3px]" />
                                                )}
                                                <span className="absolute left-full ml-3 px-2 py-1 bg-black text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                                      {theme.name}
                                                </span>
                                          </button>
                                    ))}
                              </motion.div>
                        )}
                  </AnimatePresence>

                  <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-4 bg-zinc-900 border border-white/10 rounded-full text-white hover:text-accent-primary transition-colors shadow-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                        <Palette className="w-6 h-6" />
                  </motion.button>
            </div>
      );
};
