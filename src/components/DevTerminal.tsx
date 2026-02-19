import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minimize2 } from 'lucide-react';

const COMMANDS = {
      help: 'Available commands: about, skills, projects, contact, clear, whoami, help',
      about: 'Bharat Dixit: Detail-oriented B.Tech(CSE) student at GLA University, focusing on Artificial Intelligence. Passionate about Full Stack Development and building innovative solutions.',
      whoami: 'User: Guest | Assistant: Portfolio System | Target: Hire Bharat',
      skills: 'Tech Stack: Java, MERN Stack (MongoDB, Express, React, Node.js), Python, ML, SQL.',
      projects: 'Featured: Smart Expense Budget, Multi-School Management System, Travel Portal. Type "view [project]" for more info (coming soon).',
      contact: 'Email: bharat010703@gmail.com | Phone: +91 7068876861 | LinkedIn: @bharat-dixit',
};

export const DevTerminal = () => {
      const [input, setInput] = useState('');
      const [history, setHistory] = useState<string[]>(['System Initialized...', 'Type "help" to see available commands.']);
      const [isMinimized, setIsMinimized] = useState(false);
      const scrollRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
            if (scrollRef.current) {
                  scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
      }, [history]);

      const handleCommand = (e: React.FormEvent) => {
            e.preventDefault();
            const cmd = input.trim().toLowerCase();
            if (!cmd) return;

            const newHistory = [...history, `> ${input}`];

            if (cmd === 'clear') {
                  setHistory([]);
            } else if (COMMANDS[cmd as keyof typeof COMMANDS]) {
                  newHistory.push(COMMANDS[cmd as keyof typeof COMMANDS]);
                  setHistory(newHistory);
            } else {
                  newHistory.push(`Command not found: ${cmd}. Type "help" for a list of available commands.`);
                  setHistory(newHistory);
            }

            setInput('');
      };

      if (isMinimized) {
            return (
                  <div className="fixed bottom-6 left-6 z-50">
                        <button
                              onClick={() => setIsMinimized(false)}
                              className="bg-zinc-900 border border-white/10 rounded-full p-4 text-blue-400 hover:text-white transition-colors shadow-2xl flex items-center gap-2"
                        >
                              <TerminalIcon className="w-6 h-6" />
                              <span className="text-sm font-mono font-bold pr-2">Terminal</span>
                        </button>
                  </div>
            );
      }

      return (
            <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="fixed bottom-6 left-6 z-50 w-[350px] md:w-[500px] h-[300px] bg-black/90 border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-md font-mono"
            >
                  {/* Terminal Title Bar */}
                  <div className="bg-zinc-900 px-4 py-2 flex justify-between items-center border-b border-white/10">
                        <div className="flex items-center gap-2">
                              <TerminalIcon className="w-4 h-4 text-gray-400" />
                              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Dev_Terminal</span>
                        </div>
                        <div className="flex gap-2">
                              <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-white/5 rounded transition-colors">
                                    <Minimize2 className="w-3.5 h-3.5 text-gray-500" />
                              </button>
                              <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-red-500/20 rounded transition-colors group">
                                    <X className="w-3.5 h-3.5 text-gray-500 group-hover:text-red-500" />
                              </button>
                        </div>
                  </div>

                  {/* Terminal Body */}
                  <div
                        ref={scrollRef}
                        className="flex-1 p-4 overflow-y-auto text-sm space-y-1 scrollbar-hide"
                  >
                        {history.map((line, i) => (
                              <div key={i} className={line.startsWith('>') ? 'text-blue-400' : 'text-green-400/90'}>
                                    {line}
                              </div>
                        ))}
                        <div className="flex items-center gap-2">
                              <span className="text-blue-400 font-bold">portfolio $</span>
                              <form onSubmit={handleCommand} className="flex-1">
                                    <input
                                          type="text"
                                          value={input}
                                          onChange={(e) => setInput(e.target.value)}
                                          className="w-full bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                                          autoFocus
                                    />
                              </form>
                        </div>
                  </div>
            </motion.div>
      );
};
