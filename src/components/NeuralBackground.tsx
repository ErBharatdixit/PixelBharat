import { useEffect, useRef } from 'react';

export const NeuralBackground = () => {
      const canvasRef = useRef<HTMLCanvasElement>(null);

      useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            let particles: Particle[] = [];
            let animationFrameId: number;
            let mouse = { x: 0, y: 0, radius: 200 };

            const resize = () => {
                  canvas.width = window.innerWidth;
                  canvas.height = window.innerHeight;
                  init();
            };

            class Particle {
                  x: number;
                  y: number;
                  size: number;
                  vx: number;
                  vy: number;
                  color: string;

                  constructor(x: number, y: number) {
                        this.x = x;
                        this.y = y;
                        this.size = Math.random() * 2 + 1; // Bigger particles
                        this.vx = (Math.random() - 0.5) * 0.8;
                        this.vy = (Math.random() - 0.5) * 0.8;
                        this.color = Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6'; // Blue or Purple
                  }

                  draw() {
                        if (!ctx) return;

                        // Glow effect for particles
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = this.color;

                        ctx.fillStyle = this.color;
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                        ctx.closePath();
                        ctx.fill();

                        ctx.shadowBlur = 0; // Reset for performance
                  }

                  update() {
                        this.x += this.vx;
                        this.y += this.vy;

                        if (!canvas) return;
                        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                        // Mouse interaction (Attraction/Push)
                        let dx = mouse.x - this.x;
                        let dy = mouse.y - this.y;
                        let distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < mouse.radius) {
                              const force = (mouse.radius - distance) / mouse.radius;
                              const directionX = dx / distance;
                              const directionY = dy / distance;
                              this.x += directionX * force * 1.5;
                              this.y += directionY * force * 1.5;
                        }
                  }
            }

            const init = () => {
                  particles = [];
                  // Lower density on mobile for performance
                  const divisor = window.innerWidth < 768 ? 15000 : 8000;
                  const particleCount = Math.floor((canvas.width * canvas.height) / divisor);
                  for (let i = 0; i < particleCount; i++) {
                        const x = Math.random() * canvas.width;
                        const y = Math.random() * canvas.height;
                        particles.push(new Particle(x, y));
                  }
            };

            const connect = () => {
                  if (!ctx) return;
                  for (let a = 0; a < particles.length; a++) {
                        for (let b = a; b < particles.length; b++) {
                              let dx = particles[a].x - particles[b].x;
                              let dy = particles[a].y - particles[b].y;
                              let distance = Math.sqrt(dx * dx + dy * dy);

                              if (distance < 150) {
                                    const opacity = 1 - (distance / 150);
                                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.5})`; // Purple neon lines
                                    ctx.lineWidth = 1;
                                    ctx.beginPath();
                                    ctx.moveTo(particles[a].x, particles[a].y);
                                    ctx.lineTo(particles[b].x, particles[b].y);
                                    ctx.stroke();
                              }
                        }
                  }
            };

            const animate = () => {
                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                  for (let i = 0; i < particles.length; i++) {
                        particles[i].update();
                        particles[i].draw();
                  }
                  connect();
                  animationFrameId = requestAnimationFrame(animate);
            };

            const handleMouseMove = (event: MouseEvent) => {
                  mouse.x = event.clientX;
                  mouse.y = event.clientY;
            };

            window.addEventListener('resize', resize);
            window.addEventListener('mousemove', handleMouseMove);

            resize();
            animate();

            return () => {
                  window.removeEventListener('resize', resize);
                  window.removeEventListener('mousemove', handleMouseMove);
                  cancelAnimationFrame(animationFrameId);
            };
      }, []);

      return (
            <canvas
                  ref={canvasRef}
                  className="fixed inset-0 pointer-events-none -z-10 opacity-80"
            />
      );
};
