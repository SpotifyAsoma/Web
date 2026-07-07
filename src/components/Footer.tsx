import { useContentStore } from '../hooks/useContent';

export function Footer() {
  const t = useContentStore((s) => s.texts);
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="support" className="bg-cyber-darker border-t border-cyber-neon/10 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-neon/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl group-hover:rotate-6 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  boxShadow: '0 0 20px #00ff8860',
                }}
              >
                🎮
              </div>
              <span className="font-sans font-bold text-xl text-white">
                GAME<span className="text-cyber-neon">VAULT</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              {t['footer-tagline']}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyber-neon transition-colors border border-cyber-neon/20 hover:border-cyber-neon/50" aria-label="Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.38-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.675 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-.47.076.076 0 0 0 .041-.106 13.107 13.107 0 0 0-.412-.764.074.074 0 0 1-.007-.124c.762-2.514 2.85-4.716 5.813-5.379a.077.077 0 0 1 .128.007c2.686.598 4.547 2.628 5.055 5.065a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-.408.764.077.077 0 0 0 .04.105c.36.163.735.3.11.47a.074.074 0 0 0-.041.078 20.273 20.273 0 0 0 4.66-1.944.077.077 0 0 0 .033-.119c.392-4.015-.288-8.425-1.664-11.937a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176.975 2.157 2.225 0 1.343-.956 2.424-2.157 2.424zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176.975 2.157 2.225 0 1.343-.956 2.424-2.157 2.424z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyber-neon transition-colors border border-cyber-neon/20 hover:border-cyber-neon/50" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyber-neon transition-colors border border-cyber-neon/20 hover:border-cyber-neon/50" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            {/* AIDEN Branding */}
            <div className="flex items-center gap-3 p-3 rounded-lg border"
              style={{
                borderColor: '#00ff8840',
                background: 'rgba(0, 255, 136, 0.05)',
              }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #ff006e)',
                  color: '#0a0a0f',
                }}
              >
                AIDEN
              </div>
              <div>
                <p className="font-mono text-xs text-cyber-neon font-bold">Powered by AIDEN</p>
                <p className="font-mono text-[10px] text-gray-500">{t['footer-tag']}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#featured" className="hover:text-cyber-neon transition-colors">Featured Games</a></li>
              <li><a href="#all" className="hover:text-cyber-neon transition-colors">All Games</a></li>
              <li><a href="#" className="hover:text-cyber-neon transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-cyber-neon transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-cyber-neon transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyber-neon transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-cyber-neon transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-cyber-neon transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-cyber-neon transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyber-neon transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-cyber-neon/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-sm">
            <p className="text-gray-500 font-mono">
              © {currentYear} {t['footer-copyright']}. All rights reserved.
            </p>
            <p className="font-mono text-xs text-cyber-neon/70">
              Built with ❤️ by <span className="font-bold text-cyber-neon">AIDEN</span>
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 font-mono">
            <span>Secure Payments:</span>
            <div className="flex items-center gap-2">
              <span className="text-cyber-neon">💳</span>
              <span className="text-cyber-neon2">🔒</span>
              <span className="text-cyber-neon3">₿</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}