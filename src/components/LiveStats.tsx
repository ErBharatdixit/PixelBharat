import { motion } from 'framer-motion';
import { Github, Code, Award, Flame } from 'lucide-react';

const stats = [
      {
            label: 'GitHub Contributions',
            value: '500+',
            icon: Github,
            color: 'text-white',
            link: 'https://github.com/ErBharatdixit'
      },
      {
            label: 'LeetCode Solved',
            value: '200+',
            icon: Code,
            color: 'text-yellow-500',
            link: 'https://leetcode.com/ErBharatdixit'
      },
      {
            label: 'Projects Completed',
            value: '15+',
            icon: Award,
            color: 'text-blue-400',
            link: '#projects'
      },
      {
            label: 'Current Learning Streak',
            value: '45 Days',
            icon: Flame,
            color: 'text-orange-500',
            link: '#'
      }
];

export const LiveStats = () => {
      return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  {stats.map((stat, index) => (
                        <motion.a
                              key={index}
                              href={stat.link}
                              target={stat.link.startsWith('http') ? '_blank' : '_self'}
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group relative overflow-hidden"
                        >
                              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <stat.icon className="w-12 h-12" />
                              </div>

                              <stat.icon className={`w-6 h-6 ${stat.color === 'text-white' ? 'text-white' : 'text-accent-primary'} mb-4`} />
                              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>

                              <div className="mt-4 flex items-center text-[10px] text-accent-primary font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Source ↗
                              </div>
                        </motion.a>
                  ))}
            </div>
      );
};
