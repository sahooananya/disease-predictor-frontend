import { create } from 'zustand';

interface Medicine {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: Medicine[];
  addItem: (item: Medicine) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          total: state.total + item.price,
        };
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        total: state.total + item.price,
      };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
      total: state.total - state.items.find((i) => i.id === id)!.price * state.items.find((i) => i.id === id)!.quantity,
    })),
  updateQuantity: (id, quantity) =>
    set((state) => {
      const item = state.items.find((i) => i.id === id);
      if (!item) return state;
      const priceDiff = item.price * (quantity - item.quantity);
      return {
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity } : i
        ),
        total: state.total + priceDiff,
      };
    }),
  clearCart: () => set({ items: [], total: 0 }),
}));