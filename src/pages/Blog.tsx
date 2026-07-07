import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const posts = [
  { title: 'Why Digital Currency is the Future of Gaming', date: 'July 5, 2026', readTime: '5 min', excerpt: 'Explore how digital currencies are transforming the gaming landscape and why players are making the switch.' },
  { title: 'Top 5 Most Valuable Fortnite Skins of 2026', date: 'July 3, 2026', readTime: '4 min', excerpt: 'From rare collaborations to exclusive battle pass items, here are the skins every collector wants.' },
  { title: 'PUBG UC Guide: How to Get the Best Value', date: 'July 1, 2026', readTime: '6 min', excerpt: 'Tips and tricks for maximizing your PUBG United Coupons and getting the most out of every purchase.' },
  { title: 'Call of Duty: Black Ops 7 Season Pass Breakdown', date: 'June 28, 2026', readTime: '3 min', excerpt: 'Everything included in the new season pass and whether it is worth your COD Points.' },
];

export function Blog() {
  return (
    <div className="min-h-screen bg-cyber-darker bg-grid">
      <Navigation />
      
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold mb-6"
              style={{
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid #00d4ff40',
                color: '#00d4ff',
              }}
            >
              AIDEN BLOG
            </span>
            <h1 className="font-sans font-bold text-4xl md:text-6xl text-white mb-4">
              Gaming <span className="text-gradient">News & Guides</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
              Tips, updates, and insights for the gaming community. Powered by AIDEN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="card-glow p-6 hover:border-cyber-neon/40 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyber-neon/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                    <span>{post.readTime} read</span>
                  </div>
                  <h2 className="font-sans font-semibold text-xl text-white mb-3 group-hover:text-cyber-neon transition-colors">{post.title}</h2>
                  <p className="text-gray-400 text-sm font-mono leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-cyber-neon text-xs font-mono font-semibold">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 font-mono text-sm">
              More articles coming soon. Follow us for the latest updates.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
