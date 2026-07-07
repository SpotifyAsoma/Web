import { useState } from 'react';
import { products } from '../data/products';

const mockOrders = [
  { id: 'ORD-001', customer: 'john.doe@email.com', game: 'Fortnite V-Bucks', amount: 2800, price: 19.99, status: 'completed', date: '2025-07-06 14:32' },
  { id: 'ORD-002', customer: 'jane.smith@email.com', game: 'Call of Duty CP', amount: 2400, price: 19.99, status: 'pending', date: '2025-07-06 13:15' },
  { id: 'ORD-003', customer: 'mike.wilson@email.com', game: 'PUBG UC', amount: 1800, price: 24.99, status: 'completed', date: '2025-07-06 12:45' },
  { id: 'ORD-004', customer: 'sarah.jones@email.com', game: 'Roblox Robux', amount: 1700, price: 19.99, status: 'completed', date: '2025-07-06 11:20' },
  { id: 'ORD-005', customer: 'alex.brown@email.com', game: 'Valorant VP', amount: 2050, price: 19.99, status: 'failed', date: '2025-07-06 10:05' },
  { id: 'ORD-006', customer: 'lisa.davis@email.com', game: 'Steam Wallet', amount: 50, price: 50.00, status: 'completed', date: '2025-07-06 09:30' },
];

const mockStats = {
  totalRevenue: 12450.75,
  totalOrders: 1247,
  activeUsers: 3421,
  conversionRate: 3.24,
};

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [orders] = useState(mockOrders);
  const [stats] = useState(mockStats);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statusColors: Record<string, string> = {
    completed: '#00ff88',
    pending: '#ffd700',
    failed: '#ff006e',
    refunded: '#00d4ff',
  };

  return (
    <div className="min-h-screen bg-cyber-darker bg-grid">
      {/* Admin Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker/95 backdrop-blur-xl border-b border-cyber-neon/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{
                background: 'linear-gradient(135deg, #ff006e, #ffd700)',
                boxShadow: '0 0 20px #ff006e80',
              }}
            >
              ⚙️
            </div>
            <div>
              <h1 className="font-sans font-bold text-xl text-white tracking-tight">ADMIN PANEL</h1>
              <p className="font-mono text-xs text-cyber-neon/70 -mt-0.5">AIDEN GAME VAULT</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-300 hover:text-cyber-neon transition-colors font-mono text-sm flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              View Store
            </a>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold"
              style={{
                background: 'linear-gradient(135deg, #ff006e, #ffd700)',
                color: '#0a0a0f',
              }}
            >
              AIDEN
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-cyber-card transition-colors border border-cyber-neon/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <div className="pt-20 flex">
        <aside className="fixed top-20 left-0 bottom-0 w-64 bg-cyber-darker/95 backdrop-blur-xl border-r border-cyber-neon/10 z-40">
          <nav className="p-4 space-y-1">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'orders', label: 'Orders', icon: '📦' },
              { id: 'products', label: 'Products', icon: '🎮' },
              { id: 'analytics', label: 'Analytics', icon: '📈' },
              { id: 'settings', label: 'Settings', icon: '⚙️' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-cyber-neon/10 border-cyber-neon/30 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-cyber-card hover:border-cyber-neon/10'
                }`}
                style={{ borderWidth: '1px' }}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-mono text-sm font-medium">{tab.label}</span>
                {tab.id === 'orders' && (
                  <span className="ml-auto px-2 py-0.5 text-[10px] font-bold rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                      color: '#0a0a0f',
                    }}
                  >
                    {orders.filter(o => o.status === 'pending').length}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4 p-4 border-t border-cyber-neon/10">
            <div className="flex items-center gap-3 p-3 rounded-lg"
              style={{
                background: 'rgba(0, 255, 136, 0.1)',
                border: '1px solid #00ff8830',
              }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  color: '#0a0a0f',
                }}
              >
                A
              </div>
              <div>
                <p className="font-mono text-xs text-cyber-neon font-bold">AIDEN ADMIN</p>
                <p className="font-mono text-[10px] text-gray-500">v1.0.0</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-sans font-bold text-3xl text-white">Dashboard Overview</h2>
                  <p className="text-gray-400 font-mono text-sm mt-1">Real-time metrics for your store</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-neon/20">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00ff88' }} />
                  <span className="font-mono text-xs text-cyber-neon">LIVE</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, icon: '💰', color: '#00ff88', trend: '+12.5%' },
                  { label: 'Total Orders', value: stats.totalOrders.toLocaleString(), icon: '📦', color: '#00d4ff', trend: '+8.2%' },
                  { label: 'Active Users', value: stats.activeUsers.toLocaleString(), icon: '👥', color: '#ffd700', trend: '+15.1%' },
                  { label: 'Conversion Rate', value: `${stats.conversionRate}%`, icon: '📈', color: '#ff006e', trend: '+0.3%' },
                ].map((stat) => (
                  <div key={stat.label} className="card-glow p-6 relative overflow-hidden group"
                    style={{ borderColor: `${stat.color}40` }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${stat.color}20, transparent)` }}
                    />
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <p className="font-mono text-xs text-gray-400 mb-2">{stat.label}</p>
                        <p className="font-sans font-bold text-3xl text-white">{stat.value}</p>
                        <p className="font-mono text-xs mt-1" style={{ color: stat.color }}>
                          {stat.trend} vs last month
                        </p>
                      </div>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                          border: `1px solid ${stat.color}40`,
                        }}
                      >
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Orders + Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 card-glow p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-sans font-semibold text-lg text-white">Recent Orders</h3>
                    <a href="#orders" className="font-mono text-xs text-cyber-neon hover:text-cyber-neon/70">View All</a>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-cyber-neon/10">
                          {['Order ID', 'Customer', 'Game', 'Amount', 'Price', 'Status', 'Date'].map((col) => (
                            <th key={col} className="text-left py-3 px-4 font-mono text-xs text-gray-400 uppercase tracking-wider">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {orders.slice(0, 5).map((order) => (
                          <tr key={order.id} className="border-b border-cyber-neon/5 hover:bg-cyber-card/50">
                            <td className="py-3 px-4 font-mono text-sm text-cyber-neon">{order.id}</td>
                            <td className="py-3 px-4 font-mono text-sm text-gray-300">{order.customer}</td>
                            <td className="py-3 px-4 font-mono text-sm text-white">{order.game}</td>
                            <td className="py-3 px-4 font-mono text-sm text-white">{order.amount.toLocaleString()}</td>
                            <td className="py-3 px-4 font-mono text-sm text-white">${order.price.toFixed(2)}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full text-[10px] font-mono font-bold"
                                style={{
                                  background: `${statusColors[order.status]}20`,
                                  color: statusColors[order.status],
                                }}
                              >
                                {order.status.toUpperCase()}
                              </span>
                            </td>
                            <td className="py-3 px-4 font-mono text-xs text-gray-500">{order.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card-glow p-6">
                  <h3 className="font-sans font-semibold text-lg text-white mb-6">Quick Actions</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Add New Product', icon: '➕', color: '#00ff88' },
                      { label: 'Process Refunds', icon: '💸', color: '#ff006e' },
                      { label: 'Export Reports', icon: '📊', color: '#00d4ff' },
                      { label: 'Manage Users', icon: '👥', color: '#ffd700' },
                      { label: 'Site Settings', icon: '⚙️', color: '#e91e63' },
                    ].map((action) => (
                      <button key={action.label} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left group"
                        style={{
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '1px solid transparent',
                          color: 'white',
                        }}
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform"
                          style={{
                            background: `linear-gradient(135deg, ${action.color}20, ${action.color}10)`,
                            border: `1px solid ${action.color}40`,
                          }}
                        >
                          {action.icon}
                        </div>
                        <span className="font-mono text-sm font-medium">{action.label}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-gray-500 group-hover:text-cyber-neon transition-colors">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="font-sans font-bold text-3xl text-white">Order Management</h2>
                  <p className="text-gray-400 font-mono text-sm mt-1">View and manage all customer orders</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Search orders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-cyber-card border border-cyber-neon/20 rounded-lg px-4 py-2 text-white font-mono text-sm placeholder-gray-500 focus:border-cyber-neon focus:outline-none w-64"
                  />
                  <button className="px-4 py-2 rounded-lg font-sans font-medium text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                      color: '#0a0a0f',
                    }}
                  >
                    Export CSV
                  </button>
                </div>
              </div>

              <div className="card-glow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-cyber-neon/10">
                        {['Order ID', 'Customer', 'Game', 'Amount', 'Price', 'Status', 'Date', 'Actions'].map((col) => (
                          <th key={col} className="text-left py-4 px-6 font-mono text-xs text-gray-400 uppercase tracking-wider">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.map((order) => (
                        <tr key={order.id} className="border-b border-cyber-neon/5 hover:bg-cyber-card/50">
                          <td className="py-4 px-6 font-mono text-sm text-cyber-neon">{order.id}</td>
                          <td className="py-4 px-6 font-mono text-sm text-gray-300">{order.customer}</td>
                          <td className="py-4 px-6 font-mono text-sm text-white">{order.game}</td>
                          <td className="py-4 px-6 font-mono text-sm text-white">{order.amount.toLocaleString()}</td>
                          <td className="py-4 px-6 font-mono text-sm text-white">${order.price.toFixed(2)}</td>
                          <td className="py-4 px-6">
                            <select
                              defaultValue={order.status}
                              className="px-2 py-1 rounded-full text-[10px] font-mono font-bold bg-cyber-darker border appearance-none cursor-pointer"
                              style={{
                                borderColor: `${statusColors[order.status]}40`,
                                color: statusColors[order.status],
                              }}
                            >
                              <option value="pending" style={{ color: '#ffd700' }}>Pending</option>
                              <option value="completed" style={{ color: '#00ff88' }}>Completed</option>
                              <option value="failed" style={{ color: '#ff006e' }}>Failed</option>
                              <option value="refunded" style={{ color: '#00d4ff' }}>Refunded</option>
                            </select>
                          </td>
                          <td className="py-4 px-6 font-mono text-xs text-gray-500">{order.date}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <button className="p-2 rounded-lg hover:bg-cyber-card transition-colors text-gray-400 hover:text-cyber-neon" title="View">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                              </button>
                              <button className="p-2 rounded-lg hover:bg-cyber-card transition-colors text-gray-400 hover:text-cyber-neon" title="Refund">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M9 17V6" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {filteredOrders.length === 0 && (
                  <div className="p-12 text-center text-gray-500">
                    No orders found matching your search.
                  </div>
                )}

                <div className="p-4 border-t border-cyber-neon/10 flex items-center justify-between">
                  <p className="font-mono text-sm text-gray-400">
                    Showing {filteredOrders.length} of {orders.length} orders
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 rounded border border-cyber-neon/20 hover:border-cyber-neon text-gray-400 hover:text-white text-sm font-mono disabled:opacity-50">Prev</button>
                    <button className="px-3 py-1 rounded border border-cyber-neon/20 hover:border-cyber-neon text-gray-400 hover:text-white text-sm font-mono disabled:opacity-50">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="font-sans font-bold text-3xl text-white">Product Management</h2>
                  <p className="text-gray-400 font-mono text-sm mt-1">Manage game currencies and pricing</p>
                </div>
                <button className="px-4 py-2 rounded-lg font-sans font-medium text-sm"
                  style={{
                    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                    color: '#0a0a0f',
                  }}
                >
                  + Add Product
                </button>
              </div>

              <div className="card-glow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-cyber-neon/10">
                        {['Game', 'Currency', 'Popular Option', 'Price', 'Status', 'Actions'].map((col) => (
                          <th key={col} className="text-left py-4 px-6 font-mono text-xs text-gray-400 uppercase tracking-wider">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b border-cyber-neon/5 hover:bg-cyber-card/50">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                                style={{
                                  background: `linear-gradient(135deg, ${product.color}20, ${product.color}10)`,
                                  border: `1px solid ${product.color}40`,
                                }}
                              >
                                {product.icon}
                              </div>
                              <div>
                                <p className="font-sans font-medium text-white">{product.game}</p>
                                <p className="font-mono text-xs text-gray-400">{product.name}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 font-mono text-sm text-white">{product.prices[0]?.currency || '—'}</td>
                          <td className="py-4 px-6 font-mono text-sm text-white">
                            {product.prices.find(p => p.badge === 'Popular')?.amount.toLocaleString() || product.prices[1]?.amount.toLocaleString()}
                          </td>
                          <td className="py-4 px-6 font-mono text-sm text-white">
                            ${product.prices.find(p => p.badge === 'Popular')?.price.toFixed(2) || product.prices[1]?.price.toFixed(2)}
                          </td>
                          <td className="py-4 px-6">
                            <span className={`px-2 py-1 rounded-full text-[10px] font-mono font-bold ${product.popular ? '' : 'opacity-50'}`}
                              style={{
                                background: product.popular 
                                  ? 'linear-gradient(135deg, #00ff88, #00d4ff)' 
                                  : 'linear-gradient(135deg, #666, #888)',
                                color: '#0a0a0f',
                              }}
                            >
                              {product.popular ? 'ACTIVE' : 'INACTIVE'}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <button className="p-2 rounded-lg hover:bg-cyber-card transition-colors text-gray-400 hover:text-cyber-neon" title="Edit">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                              </button>
                              <button className="p-2 rounded-lg hover:bg-cyber-card transition-colors text-gray-400 hover:text-cyber-neon" title="Delete">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="3 6 5 6 21 6" />
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-sans font-bold text-3xl text-white">Analytics</h2>
                <p className="text-gray-400 font-mono text-sm mt-1">Sales trends and performance metrics</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card-glow p-6">
                  <h3 className="font-sans font-semibold text-lg text-white mb-6">Revenue Overview (Last 30 Days)</h3>
                  <div className="h-64 flex items-end justify-between gap-2 px-2">
                    {[12, 19, 8, 24, 15, 31, 18, 22, 14, 28, 11, 26, 9, 21, 16, 33, 13, 29, 10, 25, 17, 23, 12, 30, 14, 27, 11, 24, 15, 28].map((height, i) => (
                      <div key={i} className="flex-1 flex items-end">
                        <div className="w-full rounded-t transition-all duration-300 hover:scale-y-105"
                          style={{
                            height: `${height}%`,
                            background: `linear-gradient(to top, #00ff88, #00d4ff)`,
                            boxShadow: `0 0 10px #00ff8880`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-glow p-6">
                  <h3 className="font-sans font-semibold text-lg text-white mb-6">Top Selling Games</h3>
                  <div className="space-y-4">
                    {[
                      { game: 'Fortnite V-Bucks', sales: 342, revenue: 6840, color: '#ffd700' },
                      { game: 'Call of Duty CP', sales: 287, revenue: 5740, color: '#ff4444' },
                      { game: 'PUBG UC', sales: 245, revenue: 6125, color: '#ffcc00' },
                      { game: 'Roblox Robux', sales: 198, revenue: 3960, color: '#00ff88' },
                      { game: 'Valorant VP', sales: 176, revenue: 3520, color: '#ff4655' },
                    ].map((item, i) => (
                      <div key={item.game} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}
                        >
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-sans font-medium text-white truncate">{item.game}</p>
                          <p className="font-mono text-xs text-gray-400">{item.sales} sales • ${item.revenue.toLocaleString()}</p>
                        </div>
                        <div className="w-24 h-2 rounded bg-cyber-darker overflow-hidden flex-shrink-0">
                          <div className="h-full rounded"
                            style={{
                              width: `${(item.sales / 342) * 100}%`,
                              background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="font-sans font-bold text-3xl text-white">Settings</h2>
                <p className="text-gray-400 font-mono text-sm mt-1">Configure your store settings</p>
              </div>

              <div className="card-glow p-6 space-y-6">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-white mb-4">Store Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-xs text-gray-400 mb-1">Store Name</label>
                      <input type="text" defaultValue="GAME VAULT" className="w-full bg-cyber-darker border border-cyber-neon/20 rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-neon focus:outline-none" />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-gray-400 mb-1">Store Tagline</label>
                      <input type="text" defaultValue="Digital Currency Store by AIDEN" className="w-full bg-cyber-darker border border-cyber-neon/20 rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-neon focus:outline-none" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-cyber-neon/10 pt-6">
                  <h3 className="font-sans font-semibold text-lg text-white mb-4">Theme Colors</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-gray-400 mb-1">Primary Neon</label>
                      <input type="color" defaultValue="#00ff88" className="w-full h-10 rounded-lg border border-cyber-neon/20 cursor-pointer" />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-gray-400 mb-1">Secondary Neon</label>
                      <input type="color" defaultValue="#ff006e" className="w-full h-10 rounded-lg border border-cyber-neon/20 cursor-pointer" />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-gray-400 mb-1">Accent Neon</label>
                      <input type="color" defaultValue="#00d4ff" className="w-full h-10 rounded-lg border border-cyber-neon/20 cursor-pointer" />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-gray-400 mb-1">Gold Accent</label>
                      <input type="color" defaultValue="#ffd700" className="w-full h-10 rounded-lg border border-cyber-neon/20 cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-cyber-neon/10 pt-6">
                  <h3 className="font-sans font-semibold text-lg text-white mb-4">AIDEN Branding</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-cyber-neon/30 text-cyber-neon focus:ring-cyber-neon" />
                      <span className="font-mono text-sm text-white">Show "Powered by AIDEN" on all pages</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-cyber-neon/30 text-cyber-neon focus:ring-cyber-neon" />
                      <span className="font-mono text-sm text-white">Show AIDEN badge on product cards</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-cyber-neon/30 text-cyber-neon focus:ring-cyber-neon" />
                      <span className="font-mono text-sm text-white">Include AIDEN in footer</span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-cyber-neon/10 pt-6 flex justify-end gap-4">
                  <button className="px-6 py-3 rounded-lg font-sans font-medium text-sm bg-cyber-card border border-cyber-neon/20 hover:border-cyber-neon text-white">
                    Cancel
                  </button>
                  <button className="px-6 py-3 rounded-lg font-sans font-medium text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                      color: '#0a0a0f',
                    }}
                  >
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}