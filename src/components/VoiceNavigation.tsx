import { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Polyfill for TypeScript
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const VoiceNavigation = ({ onResumeClick }: { onResumeClick?: () => void }) => {
      const [isListening, setIsListening] = useState(false);
      const [transcript, setTranscript] = useState('');
      const [recognition, setRecognition] = useState<any>(null);

      useEffect(() => {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                  const r = new SpeechRecognition();
                  r.continuous = true;
                  r.interimResults = true;
                  r.onresult = (event: any) => {
                        const current = event.resultIndex;
                        const t = event.results[current][0].transcript.toLowerCase();
                        setTranscript(t);
                        handleCommand(t);
                  };
                  r.onerror = () => setIsListening(false);
                  r.onend = () => setIsListening(false);
                  setRecognition(r);
            }
      }, []);

      const handleCommand = (cmd: string) => {
            if (cmd.includes('home')) document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            else if (cmd.includes('about')) document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            else if (cmd.includes('projects')) document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            else if (cmd.includes('skills')) document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            else if (cmd.includes('experience')) document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            else if (cmd.includes('contact')) document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            else if (cmd.includes('resume') && onResumeClick) onResumeClick();
      };

      const toggleListen = () => {
            if (isListening) {
                  recognition?.stop();
                  setIsListening(false);
            } else {
                  recognition?.start();
                  setIsListening(true);
            }
      };

      if (!recognition) return null;

      return (
            <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-2">
                  <AnimatePresence>
                        {isListening && (
                              <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="bg-zinc-900/90 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg text-sm max-w-xs text-white"
                              >
                                    {transcript || "Listening..."}
                              </motion.div>
                        )}
                  </AnimatePresence>
                  
                  <button
                        onClick={toggleListen}
                        className={`p-3 rounded-full shadow-lg transition-all ${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-zinc-800 hover:bg-zinc-700'} text-white border border-white/10`}
                        title="Voice Navigation (Try 'Go to Projects')"
                  >
                        {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
            </div>
      );
};
