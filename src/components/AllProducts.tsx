import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export function AllProducts() {
  return (
    <section id="all" className="py-24 px-6 bg-cyber-darker relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-xs text-cyber-neon tracking-widest uppercase">All Products</span>
            <h2 className="font-sans font-bold text-4xl md:text-5xl mt-4 text-white">
              Complete <span className="text-gradient">Catalog</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <select className="bg-cyber-darker/50 border border-cyber-neon/20 rounded-lg px-4 py-2 text-white font-mono text-sm focus:border-cyber-neon focus:outline-none appearance-none cursor-pointer"
              style={{ backgroundImage: 'none' }}
            >
              <option value="all">All Games</option>
              <option value="popular">Popular</option>
              <option value="sale">On Sale</option>
            </select>
            
            <select className="bg-cyber-darker/50 border border-cyber-neon/20 rounded-lg px-4 py-2 text-white font-mono text-sm focus:border-cyber-neon focus:outline-none appearance-none cursor-pointer"
              style={{ backgroundImage: 'none' }}
            >
              <option value="default">Sort: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Best Discount</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}