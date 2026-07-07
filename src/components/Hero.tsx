import { HeroCanvas } from './HeroCanvas';
import { useContentStore } from '../hooks/useContent';

export function Hero() {
  const t = useContentStore((s) => s.texts);
  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon/5 via-transparent to-cyber-neon2/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent" />
      
      <div className="relative flex flex-col md:block md:h-[700px]">
        <div className="relative z-20 order-1 px-6 py-16 md:absolute md:inset-0 md:flex md:items-center md:justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{
                  background: 'rgba(0, 255, 136, 0.1)',
                  border: '1px solid #00ff8840',
                }}
              >
                <span className="font-mono text-xs text-cyber-neon">{t['hero-badge']}</span>
                <span className="font-mono text-xs text-cyber-neon/70">Instant Delivery · 24/7 Support · Best Prices</span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded ml-2"
                  style={{
                    background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                    color: '#0a0a0f',
                  }}
                >
                  AIDEN
                </span>
              </div>
              
              <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 tracking-tight">
                <span className="text-gradient">{t['hero-title']}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                {t['hero-description']}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a
                  href="#featured"
                  className="px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all duration-200 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                    color: '#0a0a0f',
                    boxShadow: '0 0 30px #00ff8860',
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t['hero-cta-primary']}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </a>
                
                <a
                  href="#all"
                  className="px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all duration-200 border border-cyber-neon/30 hover:border-cyber-neon hover:bg-cyber-neon/10"
                  style={{ color: '#00ff88' }}
                >
                  {t['hero-cta-secondary']}
                </a>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 font-mono mb-12">
                <div className="flex items-center gap-2">
                  <span style={{ color: '#00ff88' }}>⚡</span>
                  <span>Instant Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#00d4ff' }}>🛡️</span>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#ff006e' }}>💬</span>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#ffd700' }}>⭐</span>
                  <span>4.9/5 Rating</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-cyber-neon/60">
                <span>Powered by</span>
                <span className="font-bold text-cyber-neon">AIDEN</span>
                <span className="px-2 py-1 rounded border border-cyber-neon/30">OFFICIAL PARTNER</span>
                <span className="text-gray-500">|</span>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative order-2 md:absolute md:inset-0 h-[350px] md:h-auto">
          <HeroCanvas />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="1.5" className="opacity-60">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}