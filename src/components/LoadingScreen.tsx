import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  brightness: number;
  hue: number;
}

export function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: Star[] = [];
    const STAR_COUNT = 200;
    const CONNECTION_DIST = 120;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 3 + 0.5,
        size: Math.random() * 2.5 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        brightness: Math.random() * 0.7 + 0.3,
        hue: Math.random() * 60 + 120,
      });
    }

    let animId: number;

    function animate() {
      ctx!.fillStyle = 'rgba(5, 5, 8, 0.15)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      for (const s of stars) {
        s.y -= s.speed * s.z;
        s.x += Math.sin(s.y * 0.005) * 0.15;

        if (s.y < -10) {
          s.y = canvas!.height + 10;
          s.x = Math.random() * canvas!.width;
        }
        if (s.x < -10) s.x = canvas!.width + 10;
        if (s.x > canvas!.width + 10) s.x = -10;
      }

      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        const alpha = a.brightness * (0.5 + Math.sin(Date.now() * 0.002 + i) * 0.3);
        ctx!.beginPath();
        ctx!.arc(a.x, a.y, a.size * a.z, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${a.hue}, 80%, 75%, ${alpha})`;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(a.x, a.y, a.size * a.z * 2, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${a.hue}, 80%, 75%, ${alpha * 0.15})`;
        ctx!.fill();
      }

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const a = stars[i];
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const lineAlpha = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 70%, 70%, ${lineAlpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setHidden(true), 800);
    }, 2500);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timer);
      window.removeEventListener('resize', resize);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ background: 'linear-gradient(135deg, #050508 0%, #0a0a2e 40%, #0a1a0a 70%, #050508 100%)' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div
            className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
              boxShadow: '0 0 40px #00ff8860, 0 0 80px #00ff8830',
            }}
          >
            🎮
          </div>
        </div>

        <h1
          className="font-sans font-bold text-5xl md:text-7xl tracking-tight mb-4"
          style={{
            background: 'linear-gradient(135deg, #00ff88, #00d4ff, #ff006e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 30px #00ff8840)',
          }}
        >
          GAME VAULT
        </h1>

        <p className="font-mono text-lg text-cyber-neon/70 mb-8 tracking-widest" style={{ textShadow: '0 0 20px #00ff8840' }}>
          POWERED BY AIDEN
        </p>

        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #60a5fa)',
                boxShadow: '0 0 5px rgba(96, 165, 250, 0.45)',
                animation: `loading-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes loading-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-16px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
