import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { useSound } from '../hooks/useSound';

interface Message {
      id: string;
      text: string;
      sender: 'user' | 'bot';
      timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
      id: '1',
      text: "Hi! I'm Bharat's AI assistant. How can I help you today? You can ask about his skills, projects, or how to contact him.",
      sender: 'bot',
      timestamp: new Date(),
};

const KNOWLEDGE_BASE = [
      {
            keywords: ['color', 'favourite color', 'fav color'],
            answers: [
                  "Bharat's favorite color is Yellow! It's a color that reflects energy and positivity.",
                  "His favorite color is Yellow. He finds it very vibrant and inspiring!",
                  "Yellow is Bharat's favorite color. He loves the brightness and warmth it brings."
            ]
      },
      {
            keywords: ['skill', 'stack', 'technology', 'tech', 'language', 'know'],
            answers: [
                  "Bharat is a Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). He's also proficient in Java and SQL.",
                  "His technical arsenal includes Java, React, Node.js, and Python. He's currently diving deep into AI and Machine Learning!",
                  "He loves working with the MERN stack but is also a strong Java developer. He's always learning new things like Soft Computing and ML."
            ]
      },
      {
            keywords: ['project', 'build', 'work', 'make', 'create'],
            answers: [
                  "He has built several impressive projects like a Smart Expense Manager with ML, a School Management System, and a Travel Portal. Check the 'Projects' section for details!",
                  "Bharat enjoys building real-world solutions. His highlights include an ML-powered finance tool and a comprehensive school management system.",
                  "You should definitely check out his Wanderlust Travel Portal and the ML Expense Tracker. They showcase his full-stack capabilities!"
            ]
      },
      {
            keywords: ['contact', 'email', 'phone', 'reach', 'whatsapp', 'hire', 'talk', 'social', 'linkedin', 'github'],
            answers: [
                  "You can reach Bharat via WhatsApp at +91 7068876861 or email him at bharat010703@gmail.com.",
                  "LinkedIn: @bharat-dixit | GitHub: @ErBharatdixit. He's also available on WhatsApp: +91 7068876861!",
                  "Feel free to connect on LinkedIn or check out his code on GitHub (@ErBharatdixit). For quick chats, WhatsApp him at +91 7068876861."
            ]
      },
      {
            keywords: ['father', 'mother', 'parent', 'family', 'parents', 'hero', 'idol', 'person', 'inspiration', 'role model', 'papa'],
            answers: [
                  "Bharat's father, Shri Arvind Kumar Dixit, is his greatest hero and idol. He often says, 'My PAPA is my strength and my greatest source of inspiration.'",
                  "His role model is his father, Shri Arvind Kumar Dixit. Bharat believes that everything he has achieved is thanks to his father's constant support and guidance.",
                  "Bharat's biggest inspiration is his father. He truly admires him and considers him his hero. As Bharat says, his PAPA is the one who shaped his future."
            ]
      },
      {
            keywords: ['cricket', 'cricketer', 'dhoni', 'msd', 'ipl', 'icc', 'sport'],
            answers: [
                  "Bharat's favorite cricketer is Mahendra Singh Dhoni (MSD). He admires Dhoni for being the legendary captain who won all three ICC trophies and 5 IPL trophies!",
                  "He is a huge fan of MS Dhoni! He respects Dhoni's leadership and calm nature, especially as the leader who secured all three major ICC titles and multiple IPL wins.",
                  "Mahendra Singh Dhoni is Bharat's favorite cricketer. Dhoni's achievements—including 3 ICC trophies and 5 IPL titles—are a huge inspiration to him."
            ]
      },
      {
            keywords: ['address', 'location', 'live', 'from', 'home', 'village'],
            answers: [
                  "Bharat is originally from Village - Bharakhani, Hardoi, Uttar Pradesh (UP), 241123, India.",
                  "He lives in Village - Bharakhani, Hardoi, UP - 241123. He's currently based out of Mathura for his studies at GLA University."
            ]
      },
      {
            keywords: ['school', 'schooling', '10th', '12th', 'high school', 'intermediate'],
            answers: [
                  "Bharat's detailed schooling information (High School and Intermediate) is available in the 'Education' and 'About' sections of this portfolio!",
                  "You can see all his schooling and academic history in the Education section above. He completed his schooling before moving on to B.Sc and B.Tech."
            ]
      },
      {
            keywords: ['about', 'who is', 'who are', 'tell me about', 'biography'],
            answers: [
                  "Bharat is a passionate Computer Science student and Full Stack Developer. He loves building high-quality web apps and is deep into AI/ML. He's also a B.Sc PCM graduate!",
                  "He's an engineer at heart who specializes in Java and the MERN stack. Currently, he's a B.Tech student at GLA University and is always looking for innovative tech to master.",
                  "Bharat is a developer who believes in 'Engineering tomorrow's digital experiences.' He has a strong background in both Science and Computer Science!"
            ]
      },
      {
            keywords: ['education', 'university', 'college', 'gla', 'study', 'degree'],
            answers: [
                  "Bharat is pursuing B.Tech in CSE at GLA University (Lateral Entry 2023). He also holds a B.Sc in PCM from CSJM University.",
                  "He's a CS student at GLA University with a prior background in Science (B.Sc PCM). He maintains a great balance between theory and practice.",
                  "Currently studying Computer Science at GLA, sticking to his passion for technology and engineering."
            ]
      },
      {
            keywords: ['hi', 'hello', 'hey', 'yo', 'sup'],
            answers: [
                  "Hello! I'm Bharat's AI. What can I tell you about his work today?",
                  "Hey there! Always happy to help. Looking for his projects or skills?",
                  "Hi! I'm here to answer anything about Bharat's professional journey. How can I assist?"
            ]
      },
];

const FALLBACK_ANSWERS = [
      "That's an interesting question! While I focus on Bharat's professional details (skills/projects), you can find more in his resume above.",
      "I'm not quite sure about that specific detail, but I know Bharat is great at Full Stack and AI. Want to hear about his projects instead?",
      "I'm still learning! You might find that answer in his Resume or by contacting him directly at bharat010703@gmail.com.",
      "Good question! Bharat usually handles the complex stuff himself. You can reach him through the contact section below!"
];

export const AIChatbot = React.memo(() => {
      const { playSound } = useSound();
      const [isOpen, setIsOpen] = useState(false);
      const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
      const [inputValue, setInputValue] = useState('');
      const [isTyping, setIsTyping] = useState(false);
      const messagesEndRef = useRef<HTMLDivElement>(null);

      const toggleOpen = () => {
            setIsOpen(!isOpen);
            playSound('click');
      };

      const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      useEffect(() => {
            scrollToBottom();
      }, [messages, isTyping]);

      const handleSend = () => {
            if (!inputValue.trim()) return;

            playSound('message-sent');
            const userMessage: Message = {
                  id: Date.now().toString(),
                  text: inputValue,
                  sender: 'user',
                  timestamp: new Date(),
            };

            setMessages(prev => [...prev, userMessage]);
            setInputValue('');
            setIsTyping(true);

            // Simulate AI response
            setTimeout(() => {
                  const lowerInput = userMessage.text.toLowerCase();
                  let responseText = FALLBACK_ANSWERS[Math.floor(Math.random() * FALLBACK_ANSWERS.length)];

                  for (const entry of KNOWLEDGE_BASE) {
                        if (entry.keywords.some(keyword => lowerInput.includes(keyword))) {
                              responseText = entry.answers[Math.floor(Math.random() * entry.answers.length)];
                              break;
                        }
                  }

                  const botMessage: Message = {
                        id: (Date.now() + 1).toString(),
                        text: responseText,
                        sender: 'bot',
                        timestamp: new Date(),
                  };

                  setMessages(prev => [...prev, botMessage]);
                  playSound('message-received');
                  setIsTyping(false);
            }, 1000);
      };

      return (
            <>
                  {/* Toggle Button */}
                  <motion.button
                        onClick={toggleOpen}
                        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-colors flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                  </motion.button>

                  {/* Chat Window */}
                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 100, scale: 0.8 }}
                                    className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] h-[500px] max-h-[calc(100dvh-120px)] bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
                              >
                                    {/* Header */}
                                    <div className="p-4 bg-blue-600/20 border-b border-white/10 flex items-center gap-3">
                                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                                <Bot className="w-6 h-6 text-white" />
                                          </div>
                                          <div>
                                                <h3 className="font-bold text-white text-sm">Bharat's AI Assistant</h3>
                                                <div className="flex items-center gap-1.5">
                                                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                      <span className="text-[10px] text-gray-400 font-medium">Online & Knowledgeable</span>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Messages */}
                                    <div
                                          data-lenis-prevent
                                          className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
                                    >
                                          {messages.map((m) => (
                                                <div
                                                      key={m.id}
                                                      className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                                >
                                                      <div className={`flex gap-2 max-w-[80%] ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                                            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${m.sender === 'user' ? 'bg-zinc-800' : 'bg-blue-600/20'}`}>
                                                                  {m.sender === 'user' ? <User className="w-4 h-4 text-gray-400" /> : <Bot className="w-4 h-4 text-blue-400" />}
                                                            </div>
                                                            <div className={`p-3 rounded-2xl text-sm leading-relaxed ${m.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white/5 text-gray-300 rounded-tl-none border border-white/5'}`}>
                                                                  {m.text}
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                          {isTyping && (
                                                <div className="flex justify-start">
                                                      <div className="flex gap-2 bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                                                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                                                      </div>
                                                </div>
                                          )}
                                          <div ref={messagesEndRef} />
                                    </div>

                                    {/* Input */}
                                    <div className="p-4 bg-zinc-950/50 border-t border-white/10 flex gap-2">
                                          <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                                placeholder="Ask about my skills or projects..."
                                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                          />
                                          <button
                                                onClick={handleSend}
                                                disabled={!inputValue.trim()}
                                                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors"
                                          >
                                                <Send className="w-4 h-4" />
                                          </button>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </>
      );
});
