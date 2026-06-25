import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HackerMode = () => {
    const [active, setActive] = useState(false);
    const [inputBuffer, setInputBuffer] = useState('');
    const secretCode = 'hacker';

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (active) return;
            
            const newBuffer = (inputBuffer + e.key).slice(-secretCode.length).toLowerCase();
            setInputBuffer(newBuffer);
            
            if (newBuffer === secretCode) {
                setActive(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [inputBuffer, active]);

    if (!active) return null;

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black text-green-500 font-mono p-8 overflow-hidden"
            >
                <div className="absolute top-4 right-4 cursor-pointer text-white/50 hover:text-white" onClick={() => setActive(false)}>
                    [Exit]
                </div>
                <div className="flex items-center gap-4 mb-8 border-b border-green-500/30 pb-4">
                    <Terminal className="w-8 h-8" />
                    <h1 className="text-2xl font-bold tracking-widest">SYS.TERMINAL.ACCESS</h1>
                </div>
                <div className="space-y-2 opacity-80 text-sm md:text-base">
                    <p>{`> Establishing secure connection to mainframe... [OK]`}</p>
                    <p>{`> Bypassing security protocols... [OK]`}</p>
                    <p>{`> Accessing ErBharatdixit credentials... [AUTHORIZED]`}</p>
                    <br />
                    <p className="text-white">Welcome, Admin.</p>
                    <p>System status: ONLINE</p>
                    <p>AI Core: GEMINI-2.5 [ACTIVE]</p>
                    <p>Neural Net: STABLE</p>
                    <br />
                    <p className="animate-pulse">{`> _`}</p>
                </div>
                
                {/* Matrix Rain Effect - CSS implementation */}
                <div className="fixed inset-0 pointer-events-none opacity-20 -z-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.2) 2px, rgba(0, 255, 0, 0.2) 4px)' }}></div>
            </motion.div>
        </AnimatePresence>
    );
};
