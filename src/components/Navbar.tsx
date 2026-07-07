import { useCartStore } from '../hooks/useCart';

export function Navbar() {
  const { getItemCount, toggleCart } = useCartStore();
  const count = getItemCount();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker/80 backdrop-blur-xl border-b border-cyber-neon/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl group-hover:rotate-6 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  boxShadow: '0 0 20px #00ff8860',
                }}
              >
                🎮
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-cyber-darker animate-pulse"
                style={{
                  background: '#00ff88',
                  boxShadow: '0 0 10px #00ff88',
                }}
              />
            </div>
            <span className="font-sans font-bold text-xl text-white tracking-tight">
              GAME<span className="text-cyber-neon">VAULT</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#featured" className="text-gray-300 hover:text-cyber-neon transition-colors font-medium text-sm">Featured</a>
            <a href="#all" className="text-gray-300 hover:text-cyber-neon transition-colors font-medium text-sm">All Games</a>
            <a href="#support" className="text-gray-300 hover:text-cyber-neon transition-colors font-medium text-sm">Support</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#all" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-sans font-medium text-sm transition-all duration-200 border border-cyber-neon/30 hover:border-cyber-neon hover:bg-cyber-neon/10"
              style={{ color: '#00ff88' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              Shop
            </a>
            
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-lg hover:bg-cyber-card transition-colors"
              aria-label="Cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #ff006e, #ff4444)',
                    boxShadow: '0 0 10px #ff006e',
                  }}
                >
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}