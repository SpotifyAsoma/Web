import { useCartStore } from '../hooks/useCart';

export function CartSidebar() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
        aria-hidden="true"
      />
      
      <aside className="fixed top-0 right-0 h-full w-full max-w-md z-50 flex flex-col"
        style={{
          background: 'linear-gradient(180deg, #0a0a0f 0%, #050508 100%)',
          borderLeft: '1px solid #00ff8820',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
        }}
      >
        <div className="p-6 border-b border-cyber-neon/10 flex items-center justify-between">
          <h2 className="font-sans font-bold text-xl text-white flex items-center gap-2">
            <span style={{ color: '#00ff88' }}>🛒</span>
            Cart ({items.length})
          </h2>
          <button
            onClick={toggleCart}
            className="p-2 rounded-lg text-gray-400 hover:text-cyber-neon transition-colors bg-cyber-darker/50 border border-cyber-neon/10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center text-gray-500">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4 opacity-30">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1 4 4v4" />
              </svg>
              <p className="font-mono text-sm">Your cart is empty</p>
              <p className="text-xs mt-1">Add some game currency to get started</p>
            </div>
          ) : (
            items.map((item, index) => {
                return (
                  <div key={`${item.productId}-${index}`} className="card-glow p-4 relative">
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-500 hover:text-cyber-neon2 transition-colors bg-cyber-darker/50"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                        border: `1px solid ${item.color}40`,
                      }}
                    >
                      {item.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-sans font-semibold text-sm text-white truncate">{item.gameName}</h4>
                        <span className="font-mono text-xs font-bold" style={{ color: item.color }}>
                          ${(item.selectedOption.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-gray-400">{item.productName}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-mono text-xs text-gray-500">{item.selectedOption.amount.toLocaleString()} {item.selectedOption.currency}</span>
                        {item.selectedOption.badge && (
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                            style={{
                              background: item.selectedOption.badge === 'Best Value' 
                                ? 'linear-gradient(135deg, #00ff88, #00d4ff)' 
                                : 'linear-gradient(135deg, #ff006e, #ffd700)',
                              color: '#0a0a0f',
                            }}
                          >
                            {item.selectedOption.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 bg-cyber-darker/50 border border-cyber-neon/10 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-8 h-8 rounded flex items-center justify-center text-gray-400 hover:text-cyber-neon transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                      <span className="font-mono text-sm font-bold text-white w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-8 h-8 rounded flex items-center justify-center text-gray-400 hover:text-cyber-neon transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-cyber-neon/10 bg-cyber-darker/50">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-gray-400">Subtotal</span>
              <span className="font-sans font-bold text-xl" style={{ color: '#00ff88' }}>
                ${getTotal().toFixed(2)}
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Delivery</span>
                <span className="font-mono text-cyber-neon">Instant</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Tax</span>
                <span className="font-mono text-cyber-neon">Included</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4 pt-4 border-t border-cyber-neon/10">
              <span className="font-sans font-semibold">Total</span>
              <span className="font-sans font-bold text-2xl" style={{ color: '#ffd700' }}>
                ${getTotal().toFixed(2)}
              </span>
            </div>
            
            <button className="w-full py-4 rounded-lg font-sans font-semibold text-lg transition-all duration-200 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                color: '#0a0a0f',
                boxShadow: '0 0 30px #00ff8860',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Checkout
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1 4 4v4" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={clearCart}
              className="w-full py-3 mt-3 rounded-lg font-sans font-medium text-sm text-gray-400 hover:text-cyber-neon2 transition-colors bg-cyber-darker/50 border border-cyber-neon/10"
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}