'use client';

import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartSidebar } from './components/CartSidebar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimateOnScroll } from './components/AnimateOnScroll';
import { featuredProducts, products } from './data/products';
import { useCartStore } from './hooks/useCart';
import { useContentStore } from './hooks/useContent';
import { AdminDashboard } from './pages/AdminDashboard';
import { Blog } from './pages/Blog';

function FeaturedSection() {
  const t = useContentStore((s) => s.texts);
  return (
    <section id="featured" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold mb-6"
            style={{
              background: 'rgba(0, 255, 136, 0.1)',
              border: '1px solid #00ff8840',
              color: '#00ff88',
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00ff88' }} />
            {t['featured-badge']}
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded ml-2"
              style={{
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                color: '#0a0a0f',
              }}
            >
              AIDEN
            </span>
          </span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            <span className="text-gradient">{t['featured-heading']}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            {t['featured-subtext']}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
      </div>
    </section>
  );
}

function AllGamesSection() {
  const t = useContentStore((s) => s.texts);
  return (
    <section id="all" className="relative py-24 px-6 bg-gradient-to-b from-cyber-darker/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold mb-6"
              style={{
                background: 'rgba(255, 0, 110, 0.1)',
                border: '1px solid #ff006e40',
                color: '#ff006e',
              }}
            >
              {t['catalog-badge']}
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded ml-2"
                style={{
                  background: 'linear-gradient(135deg, #ff006e, #ffd700)',
                  color: '#0a0a0f',
                }}
              >
                AIDEN
              </span>
            </span>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-white">
              <span className="text-gradient">{t['catalog-heading']}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-cyber-card border border-cyber-neon/20 rounded-xl px-4 py-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search games..."
              className="bg-transparent border-none outline-none text-white text-sm font-mono w-48 placeholder-gray-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const t = useContentStore((s) => s.texts);
  const features = [
    { icon: '⚡', title: 'Instant Delivery', desc: 'Get your currency in seconds, not hours. Automated 24/7 delivery system.', color: '#00ff88' },
    { icon: '🔒', title: 'Secure Payments', desc: 'SSL encrypted checkout with multiple payment options including crypto.', color: '#00d4ff' },
    { icon: '💎', title: 'Best Prices', desc: 'We monitor competitor prices daily to ensure you always get the best deal.', color: '#ffd700' },
    { icon: '🛡️', title: 'Money-Back Guarantee', desc: '100% refund if delivery fails. Your satisfaction is our top priority.', color: '#ff006e' },
    { icon: '🌐', title: 'Global Support', desc: 'Serving gamers worldwide with localized payment methods and support.', color: '#e91e63' },
    { icon: '🎮', title: '100+ Games', desc: 'From Roblox to Valorant, we cover all major gaming platforms and currencies.', color: '#00ff88' },
  ];

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold mb-6"
            style={{
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid #00d4ff40',
              color: '#00d4ff',
            }}
          >
            {t['features-badge']}
          </span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white">
            <span className="text-gradient">{t['features-heading']}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4 font-mono">
            {t['features-subtext']}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-glow p-8 hover:border-cyber-neon/50 transition-all duration-300 relative overflow-hidden group"
              style={{ borderColor: `${feature.color}40` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(0,255,136,0.02)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                    border: `1px solid ${feature.color}40`,
                    boxShadow: `0 0 20px ${feature.color}30`,
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="font-sans font-semibold text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { toggleCart } = useCartStore();
  const t = useContentStore((s) => s.texts);
  
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card-glow p-12 md:p-16 relative overflow-hidden"
          style={{
            borderColor: '#00ff8840',
            background: 'linear-gradient(135deg, #0a0a0a0f 0%, #11111a 100%)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon/5 via-transparent to-cyber-neon2/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-neon/50 to-transparent" />
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold mb-6"
              style={{
                background: 'rgba(255, 215, 0, 0.1)',
                border: '1px solid #ffd70040',
                color: '#ffd700',
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: '#ffd700', animation: 'pulse 1.5s infinite' }} />
              {t['cta-badge']}
            </span>
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              <span className="text-gradient">{t['cta-heading']}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-mono">
              {t['cta-subtext']}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('all')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-sans font-semibold text-lg transition-all duration-200 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  color: '#0a0a0f',
                  boxShadow: '0 0 40px #00ff8860',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t['cta-button']}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </button>
              <button
                onClick={toggleCart}
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-sans font-semibold text-lg transition-all duration-200 bg-cyber-card border border-cyber-neon/30 hover:border-cyber-neon hover:bg-cyber-neon/10 text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block mr-2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1 4 4v4" />
                </svg>
                {t['cta-button2']}
              </button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-cyber-neon/70">
              <span className="flex items-center gap-1 px-3 py-1 rounded border"
                style={{ borderColor: '#00ff8840' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00ff88' }} />
                Powered by AIDEN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreApp() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      {ready && (
        <div className="min-h-screen bg-cyber-darker bg-grid animate-fadeIn">
          <Navigation />

          <main>
            <AnimateOnScroll><Hero /></AnimateOnScroll>
            <AnimateOnScroll><FeaturedSection /></AnimateOnScroll>
            <AnimateOnScroll><AllGamesSection /></AnimateOnScroll>
            <AnimateOnScroll><FeaturesSection /></AnimateOnScroll>
            <AnimateOnScroll><CTASection /></AnimateOnScroll>
          </main>

          <Footer />
          <CartSidebar />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StoreApp />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}