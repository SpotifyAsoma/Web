import { useCartStore } from '../hooks/useCart';

export function Navigation() {
  const { toggleCart, getItemCount } = useCartStore();
  const count = getItemCount();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker/95 backdrop-blur-xl border-b border-cyber-neon/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                boxShadow: '0 0 20px #00ff8880',
              }}
            >
              <span style={{ filter: 'dropShadow(0 0 4px #00ff88)' }}>🎮</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-cyber-darker"
              style={{ background: '#00ff88', boxShadow: '0 0 8px #00ff88' }}
            />
          </div>
          <div>
            <h1 className="font-sans font-bold text-xl text-white tracking-tight flex items-center gap-2">
              GAME <span className="text-cyber-neon">VAULT</span>
              <span className="ml-2 px-2 py-0.5 text-[10px] font-mono font-bold rounded"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  color: '#0a0a0f',
                }}
              >
                AIDEN
              </span>
            </h1>
            <p className="font-mono text-xs text-cyber-neon/70 -mt-0.5">DIGITAL CURRENCY STORE</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#featured" className="text-gray-300 hover:text-cyber-neon transition-colors font-mono text-sm relative group">
            Featured
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-neon transition-all group-hover:w-full" />
          </a>
          <a href="#all" className="text-gray-300 hover:text-cyber-neon transition-colors font-mono text-sm relative group">
            All Games
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-neon transition-all group-hover:w-full" />
          </a>
          <a href="#about" className="text-gray-300 hover:text-cyber-neon transition-colors font-mono text-sm relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-neon transition-all group-hover:w-full" />
          </a>
          <a href="/admin" className="text-cyber-neon2 hover:text-cyber-neon transition-colors font-mono text-sm px-3 py-1 rounded border border-cyber-neon2/30 hidden sm:block">
            Admin
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleCart}
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group"
            style={{
              background: 'rgba(0, 255, 136, 0.1)',
              border: '1px solid #00ff8840',
              color: '#00ff88',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-6">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1 4 4v4" />
            </svg>
            <span className="font-mono text-sm font-medium">Cart</span>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: 'linear-gradient(135deg, #ff006e, #ffd700)',
                  color: '#0a0a0f',
                  boxShadow: '0 0 10px #ff006e',
                }}
              >
                {count > 9 ? '9+' : count}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}