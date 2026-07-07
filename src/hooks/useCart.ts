import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, PriceOption } from '../data/products';

interface CartItem {
  productId: string;
  productName: string;
  gameName: string;
  selectedOption: PriceOption;
  quantity: number;
  icon: string;
  color: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, option: PriceOption) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (product, option) => {
        const items = get().items;
        const existingIndex = items.findIndex(i => i.productId === product.id && i.selectedOption.amount === option.amount);
        
        if (existingIndex >= 0) {
          const newItems = [...items];
          newItems[existingIndex].quantity += 1;
          set({ items: newItems });
        } else {
          set({ 
            items: [...items, {
              productId: product.id,
              productName: product.name,
              gameName: product.game,
              selectedOption: option,
              quantity: 1,
              icon: product.icon,
              color: product.color,
            }],
          });
        }
      },
      
      removeItem: (productId) => {
        set({ items: get().items.filter(i => i.productId !== productId) });
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({ 
          items: get().items.map(i => 
            i.productId === productId ? { ...i, quantity } : i
          )
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      toggleCart: () => set({ isOpen: !get().isOpen }),
      
      getTotal: () => {
        return get().items.reduce((sum, item) => 
          sum + (item.selectedOption.price * item.quantity), 0
        );
      },
      
      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    { name: 'game-vault-cart' }
  )
);