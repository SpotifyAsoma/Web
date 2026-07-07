import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const defaults: Record<string, string> = {
  'hero-badge': 'NEW',
  'hero-title': 'GAME VAULT',
  'hero-description': 'Premium digital currency for your favorite games. Instant delivery, unbeatable prices, trusted by millions of gamers worldwide.',
  'hero-cta-primary': 'Shop Featured',
  'hero-cta-secondary': 'Browse All Games',
  'featured-badge': 'FEATURED CURRENCIES',
  'featured-heading': 'Top Game Currencies',
  'featured-subtext': 'Instant delivery • Best prices • 24/7 support',
  'catalog-badge': 'ALL GAMES',
  'catalog-heading': 'Complete Catalog',
  'features-badge': 'WHY CHOOSE AIDEN',
  'features-heading': 'Trusted by Millions',
  'features-subtext': 'Join over 2 million gamers who trust GameVault for their digital currency needs',
  'cta-badge': 'READY TO LEVEL UP?',
  'cta-heading': 'Start Gaming Today',
  'cta-subtext': 'Join millions of gamers. Instant delivery, best prices, 24/7 support.',
  'cta-button': 'Browse All Games',
  'cta-button2': 'View Cart',
  'footer-tagline': 'Your trusted source for instant digital game currency delivery. Serving millions of gamers worldwide with the best prices and 24/7 support.',
  'footer-copyright': 'GAMEVAULT',
  'footer-tag': 'Official Partner Store',
};

interface ContentStore {
  texts: Record<string, string>;
  setText: (key: string, value: string) => void;
  resetText: (key: string) => void;
}

export const useContentStore = create<ContentStore>()(
  persist(
    (set, get) => ({
      texts: { ...defaults },
      setText: (key, value) => set({ texts: { ...get().texts, [key]: value } }),
      resetText: (key) => set({ texts: { ...get().texts, [key]: defaults[key] } }),
    }),
    { name: 'game-vault-content' }
  )
);
