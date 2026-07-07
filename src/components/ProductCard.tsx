import type { Product, PriceOption } from '../data/products';
import { useCartStore } from '../hooks/useCart';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
  className?: string;
}

const productImages: Record<string, string> = {
  'cod-points': '/images/cod.jpg',
  'fortnite-vbucks': '/images/fortnite.jpg',
  'pubg-uc': '/images/pubg.jpg',
};

export function ProductCard({ product, featured = false, className = '' }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = (option: PriceOption) => {
    addItem(product, option);
  };

  const popularOption = product.prices.find(p => p.badge === 'Popular') || product.prices[1] || product.prices[0];
  const productImage = productImages[product.id];

  return (
    <article
      className={`relative group card-glow overflow-hidden transition-all duration-300 ${featured ? 'h-full' : ''} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? `0 0 30px ${product.glowColor}40, 0 0 60px ${product.glowColor}20, inset 0 1px 0 rgba(255,255,255,0.05)`
          : `0 0 20px ${product.glowColor}20, inset 0 1px 0 rgba(255,255,255,0.05)`,
        borderColor: hovered ? product.color : `${product.color}40`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(0,255,136,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-neon/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex flex-col h-full">
        {/* Product Image */}
        {productImage && (
          <div className="relative h-40 md:h-48 overflow-hidden">
            <img
              src={productImage}
              alt={product.game}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{
                filter: 'brightness(0.7) saturate(1.2)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/90 via-transparent to-transparent" />
            <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded text-xs font-mono font-bold"
              style={{
                background: `linear-gradient(135deg, ${product.color}, ${product.glowColor})`,
                color: '#0a0a0f',
              }}
            >
              AIDEN
            </div>
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded text-xs font-mono font-bold bg-cyber-darker/80 border border-cyber-neon/30 text-cyber-neon backdrop-blur">
              AIDEN STORE
            </div>
          </div>
        )}
        
        <div className="relative p-6 flex flex-col h-full flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}20, ${product.glowColor}10)`,
                    border: `1px solid ${product.color}40`,
                    boxShadow: `0 0 20px ${product.color}30, inset 0 0 20px ${product.color}10`,
                  }}
                >
                  {product.icon}
                </div>
                {product.popular && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold rounded-full"
                    style={{
                      background: `linear-gradient(135deg, #ffd700, #ffaa00)`,
                      color: '#0a0a0f',
                      boxShadow: '0 0 10px #ffd700',
                    }}
                  >
                    HOT
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg text-white">{product.game}</h3>
                <p className="font-mono text-xs text-cyber-neon/80">{product.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-cyber-neon/60">AIDEN</p>
              <p className="font-mono text-[10px] text-gray-500">OFFICIAL PARTNER</p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-5 flex-1 line-clamp-2">{product.description}</p>

          <div className="space-y-2 mb-5">
            {product.prices.slice(0, 3).map((option, index) => (
              <button
                key={`${product.id}-${option.amount}`}
                onClick={() => handleAddToCart(option)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  index === 1
                    ? 'bg-cyber-neon/10 border-cyber-neon/50'
                    : 'bg-cyber-darker/50 border-cyber-neon/10 hover:border-cyber-neon/30 hover:bg-cyber-neon/5'
                }`}
                style={{
                  borderWidth: index === 1 ? '2px' : '1px',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full transition-all duration-200"
                    style={{
                      background: index === 1 ? product.color : 'transparent',
                      border: `1px solid ${index === 1 ? product.color : product.color}40`,
                      boxShadow: index === 1 ? `0 0 8px ${product.color}` : 'none',
                    }}
                  />
                  <div>
                    <div className="font-mono text-sm font-semibold text-white">{option.amount.toLocaleString()} {option.currency}</div>
                    {option.badge && (
                      <span className="font-mono text-xs px-1.5 py-0.5 rounded"
                        style={{
                          background: option.badge === 'Best Value' ? 'linear-gradient(135deg, #00ff88, #00d4ff)' : 'linear-gradient(135deg, #ff006e, #ffd700)',
                          color: '#0a0a0f',
                        }}
                      >
                        {option.badge}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-lg font-bold" style={{ color: product.color }}>
                    ${option.price.toFixed(2)}
                  </span>
                  {option.originalPrice && (
                    <span className="font-mono text-sm line-through text-gray-500">
                      ${option.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleAddToCart(popularOption)}
            className="w-full py-3.5 rounded-lg font-sans font-semibold text-sm transition-all duration-200 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${product.color}, ${product.glowColor})`,
              color: '#0a0a0f',
              boxShadow: `0 0 20px ${product.color}50`,
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Add to Cart
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1 4 4v4" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </button>
          
          <div className="mt-3 pt-3 border-t border-cyber-neon/10 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>Secure checkout powered by AIDEN</span>
            <span className="flex items-center gap-1 text-cyber-neon/70">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              SSL Secured
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}