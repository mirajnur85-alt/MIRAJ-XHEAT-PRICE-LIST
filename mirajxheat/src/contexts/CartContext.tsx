import { createContext, useContext, useState, ReactNode } from "react";
import { Product, PriceOption } from "@/types";

interface CartItem {
  product: Product;
  priceOption: PriceOption;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, priceOption: PriceOption) => void;
  removeFromCart: (productId: string, duration: string) => void;
  updateQuantity: (productId: string, duration: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => { bdt: number; inr: number; usdt: number };
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, priceOption: PriceOption) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.priceOption.duration === priceOption.duration
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.priceOption.duration === priceOption.duration
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, priceOption, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string, duration: string) => {
    setItems((prev) => prev.filter(
      (item) => !(item.product.id === productId && item.priceOption.duration === duration)
    ));
  };

  const updateQuantity = (productId: string, duration: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, duration);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.priceOption.duration === duration
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => {
        const price = item.priceOption;
        const quantity = item.quantity;
        return {
          bdt: total.bdt + (price.bdt * quantity),
          inr: total.inr + (price.inr * quantity),
          usdt: total.usdt + ((price.usdt || 0) * quantity),
        };
      },
      { bdt: 0, inr: 0, usdt: 0 }
    );
  };

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

