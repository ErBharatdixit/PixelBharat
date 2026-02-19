import { useCallback } from 'react';

export const useSound = () => {
      const playSound = useCallback((type: 'click' | 'hover' | 'message-sent' | 'message-received') => {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            const now = ctx.currentTime;

            switch (type) {
                  case 'click':
                        oscillator.type = 'sine';
                        oscillator.frequency.setValueAtTime(800, now);
                        oscillator.frequency.exponentialRampToValueAtTime(10, now + 0.1);
                        gainNode.gain.setValueAtTime(0.2, now);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                        oscillator.start(now);
                        oscillator.stop(now + 0.1);
                        break;

                  case 'hover':
                        oscillator.type = 'sine';
                        oscillator.frequency.setValueAtTime(400, now);
                        oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.05);
                        gainNode.gain.setValueAtTime(0.05, now);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
                        oscillator.start(now);
                        oscillator.stop(now + 0.05);
                        break;

                  case 'message-sent':
                        oscillator.type = 'sine';
                        oscillator.frequency.setValueAtTime(440, now);
                        oscillator.frequency.exponentialRampToValueAtTime(880, now + 0.1);
                        gainNode.gain.setValueAtTime(0.1, now);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                        oscillator.start(now);
                        oscillator.stop(now + 0.1);
                        break;

                  case 'message-received':
                        oscillator.type = 'sine';
                        oscillator.frequency.setValueAtTime(660, now);
                        oscillator.frequency.exponentialRampToValueAtTime(440, now + 0.2);
                        gainNode.gain.setValueAtTime(0.1, now);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
                        oscillator.start(now);
                        oscillator.stop(now + 0.2);
                        break;
            }

            setTimeout(() => ctx.close(), 500);
      }, []);

      return { playSound };
};
