export interface Product {
  id: string;
  name: string;
  game: string;
  icon: string;
  color: string;
  glowColor: string;
  prices: PriceOption[];
  description: string;
  popular?: boolean;
}

export interface PriceOption {
  amount: number;
  currency: string;
  price: number;
  originalPrice?: number;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 'roblox-robux',
    name: 'Robux',
    game: 'Roblox',
    icon: '🎮',
    color: '#00ff88',
    glowColor: '#00ff88',
    description: 'Premium currency for Roblox. Buy items, accessories, and game passes.',
    popular: true,
    prices: [
      { amount: 400, currency: 'Robux', price: 4.99 },
      { amount: 800, currency: 'Robux', price: 9.99, badge: 'Popular' },
      { amount: 1700, currency: 'Robux', price: 19.99, originalPrice: 24.99, badge: 'Best Value' },
      { amount: 4500, currency: 'Robux', price: 49.99, originalPrice: 59.99 },
      { amount: 10000, currency: 'Robux', price: 99.99, originalPrice: 119.99 },
    ],
  },
  {
    id: 'steam-wallet',
    name: 'Steam Wallet',
    game: 'Steam',
    icon: '🎮',
    color: '#00d4ff',
    glowColor: '#00d4ff',
    description: 'Add funds to your Steam Wallet to buy games, DLC, and in-game items.',
    popular: true,
    prices: [
      { amount: 5, currency: 'USD', price: 5.00 },
      { amount: 10, currency: 'USD', price: 10.00 },
      { amount: 20, currency: 'USD', price: 20.00, badge: 'Popular' },
      { amount: 50, currency: 'USD', price: 50.00, originalPrice: 55.00, badge: 'Best Value' },
      { amount: 100, currency: 'USD', price: 100.00, originalPrice: 110.00 },
    ],
  },
  {
    id: 'playstation',
    name: 'PlayStation Store',
    game: 'PlayStation',
    icon: '🎮',
    color: '#0066ff',
    glowColor: '#0066ff',
    description: 'Purchase games, add-ons, and subscriptions for PlayStation.',
    prices: [
      { amount: 10, currency: 'USD', price: 10.00 },
      { amount: 20, currency: 'USD', price: 20.00 },
      { amount: 50, currency: 'USD', price: 50.00, badge: 'Popular' },
      { amount: 100, currency: 'USD', price: 100.00, originalPrice: 110.00, badge: 'Best Value' },
    ],
  },
  {
    id: 'xbox',
    name: 'Xbox Gift Card',
    game: 'Xbox',
    icon: '🎮',
    color: '#10b981',
    glowColor: '#10b981',
    description: 'Buy games, movies, apps, and more for Xbox and Windows.',
    popular: true,
    prices: [
      { amount: 10, currency: 'USD', price: 10.00 },
      { amount: 15, currency: 'USD', price: 15.00 },
      { amount: 25, currency: 'USD', price: 25.00, badge: 'Popular' },
      { amount: 50, currency: 'USD', price: 50.00, originalPrice: 55.00, badge: 'Best Value' },
      { amount: 100, currency: 'USD', price: 100.00, originalPrice: 110.00 },
    ],
  },
  {
    id: 'valorant-vp',
    name: 'Valorant Points',
    game: 'Valorant',
    icon: '🎯',
    color: '#ff4655',
    glowColor: '#ff4655',
    description: 'Premium currency for Valorant. Unlock skins, battle passes, and more.',
    popular: true,
    prices: [
      { amount: 475, currency: 'VP', price: 4.99 },
      { amount: 1000, currency: 'VP', price: 9.99 },
      { amount: 2050, currency: 'VP', price: 19.99, badge: 'Popular' },
      { amount: 3650, currency: 'VP', price: 34.99, originalPrice: 39.99, badge: 'Best Value' },
      { amount: 5350, currency: 'VP', price: 49.99, originalPrice: 59.99 },
      { amount: 11000, currency: 'VP', price: 99.99, originalPrice: 119.99 },
    ],
  },
  {
    id: 'fortnite-vbucks',
    name: 'V-Bucks',
    game: 'Fortnite',
    icon: '🏗️',
    color: '#ffd700',
    glowColor: '#ffd700',
    description: 'Fortnite currency for Battle Pass, skins, emotes, and more.',
    popular: true,
    prices: [
      { amount: 1000, currency: 'V-Bucks', price: 7.99 },
      { amount: 2800, currency: 'V-Bucks', price: 19.99, badge: 'Popular' },
      { amount: 5000, currency: 'V-Bucks', price: 31.99, originalPrice: 39.99, badge: 'Best Value' },
      { amount: 13500, currency: 'V-Bucks', price: 79.99, originalPrice: 99.99 },
    ],
  },
  {
    id: 'minecraft',
    name: 'Minecraft Minecoins',
    game: 'Minecraft',
    icon: '⛏️',
    color: '#2ecc71',
    glowColor: '#2ecc71',
    description: 'Purchase skins, texture packs, and worlds in the Minecraft Marketplace.',
    prices: [
      { amount: 350, currency: 'Minecoins', price: 1.99 },
      { amount: 880, currency: 'Minecoins', price: 4.99 },
      { amount: 1720, currency: 'Minecoins', price: 9.99, badge: 'Popular' },
      { amount: 4380, currency: 'Minecoins', price: 24.99, originalPrice: 29.99, badge: 'Best Value' },
    ],
  },
  {
    id: 'league-rp',
    name: 'Riot Points',
    game: 'League of Legends',
    icon: '⚔️',
    color: '#c89b3c',
    glowColor: '#c89b3c',
    description: 'Premium currency for League of Legends. Champions, skins, and more.',
    popular: true,
    prices: [
      { amount: 650, currency: 'RP', price: 4.99 },
      { amount: 1380, currency: 'RP', price: 9.99 },
      { amount: 2800, currency: 'RP', price: 19.99, badge: 'Popular' },
      { amount: 5400, currency: 'RP', price: 34.99, originalPrice: 39.99, badge: 'Best Value' },
      { amount: 7200, currency: 'RP', price: 49.99, originalPrice: 59.99 },
    ],
  },
  {
    id: 'genshin',
    name: 'Genesis Crystals',
    game: 'Genshin Impact',
    icon: '✨',
    color: '#e91e63',
    glowColor: '#e91e63',
    description: 'Premium currency for Genshin Impact. Wishes, resin, and more.',
    prices: [
      { amount: 60, currency: 'Crystals', price: 0.99 },
      { amount: 300, currency: 'Crystals', price: 4.99 },
      { amount: 980, currency: 'Crystals', price: 14.99, badge: 'Popular' },
      { amount: 1980, currency: 'Crystals', price: 29.99, originalPrice: 34.99, badge: 'Best Value' },
      { amount: 3280, currency: 'Crystals', price: 49.99, originalPrice: 59.99 },
      { amount: 6480, currency: 'Crystals', price: 99.99, originalPrice: 119.99 },
    ],
  },
  {
    id: 'apex-coins',
    name: 'Apex Coins',
    game: 'Apex Legends',
    icon: '🏆',
    color: '#ff6b00',
    glowColor: '#ff6b00',
    description: 'Apex Legends premium currency for cosmetics and battle passes.',
    prices: [
      { amount: 1000, currency: 'Coins', price: 9.99 },
      { amount: 2150, currency: 'Coins', price: 19.99, badge: 'Popular' },
      { amount: 4350, currency: 'Coins', price: 39.99, originalPrice: 44.99, badge: 'Best Value' },
      { amount: 6700, currency: 'Coins', price: 59.99, originalPrice: 69.99 },
      { amount: 11500, currency: 'Coins', price: 99.99, originalPrice: 119.99 },
    ],
  },
  {
    id: 'pubg-uc',
    name: 'Unknown Cash (UC)',
    game: 'PUBG Mobile',
    icon: '🎒',
    color: '#ffcc00',
    glowColor: '#ffcc00',
    description: 'PUBG Mobile premium currency for crates, royale pass, and skins.',
    popular: true,
    prices: [
      { amount: 60, currency: 'UC', price: 0.99 },
      { amount: 325, currency: 'UC', price: 4.99 },
      { amount: 660, currency: 'UC', price: 9.99 },
      { amount: 1800, currency: 'UC', price: 24.99, badge: 'Popular' },
      { amount: 3850, currency: 'UC', price: 49.99, originalPrice: 59.99, badge: 'Best Value' },
      { amount: 8100, currency: 'UC', price: 99.99, originalPrice: 119.99 },
    ],
  },
  {
    id: 'cod-points',
    name: 'Call of Duty Points',
    game: 'Call of Duty',
    icon: '🎯',
    color: '#ff4444',
    glowColor: '#ff4444',
    description: 'Call of Duty Points for battle passes, bundles, and store items.',
    popular: true,
    prices: [
      { amount: 500, currency: 'CP', price: 4.99 },
      { amount: 1100, currency: 'CP', price: 9.99 },
      { amount: 2400, currency: 'CP', price: 19.99, badge: 'Popular' },
      { amount: 5000, currency: 'CP', price: 39.99, originalPrice: 44.99, badge: 'Best Value' },
      { amount: 10000, currency: 'CP', price: 79.99, originalPrice: 89.99 },
    ],
  },
];

export const featuredProducts = products.filter(p => p.popular).slice(0, 6);