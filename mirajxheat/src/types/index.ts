export interface PriceOption {
  duration: string;
  bdt: number;
  inr: number;
  usdt?: number;
  note?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  prices: PriceOption[];
  description?: string;
  features?: string[];
  videoUrl?: string; // Optional YouTube video URL
  stockStatus?: "in_stock" | "low_stock" | "out_of_stock"; // Stock status
  stockCount?: number; // Optional stock count
  categories?: string[]; // Optional categories for filtering
}

export interface Coupon {
  code: string;
  discount: number; // Percentage discount
  type: "percentage" | "fixed";
  minPurchase?: number;
  validUntil?: string;
}

export interface GiftCard {
  id: string;
  amount: number;
  code: string;
  isValid: boolean;
  expiresAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  joinedAt: string;
}
