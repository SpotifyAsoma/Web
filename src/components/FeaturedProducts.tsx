import { ProductCard } from './ProductCard';
import { featuredProducts } from '../data/products';

export function FeaturedProducts() {
  return (
    <section id="featured" className="py-24 px-6 bg-cyber-darker/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-neon/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyber-neon tracking-widest uppercase">Featured Games</span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl mt-4 text-white">
            Top Picks This <span className="text-gradient">Week</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Hand-picked digital currencies with the best value deals. All instantly delivered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={index < 3}
              className={index < 3 ? 'lg:col-span-2 xl:col-span-2' : ''}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#all"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-sans font-medium transition-all duration-200 border border-cyber-neon/30 hover:border-cyber-neon hover:bg-cyber-neon/10"
            style={{ color: '#00ff88' }}
          >
            View All Games
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}