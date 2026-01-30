import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, PriceOption } from "@/types";
import { products as initialProducts } from "@/data/products";

interface ExchangeRates {
    bdt: number;
    inr: number;
}

interface ProductContextType {
    products: Product[];
    rates: ExchangeRates;
    updateProductPrice: (productId: string, priceIndex: number, field: 'bdt' | 'inr' | 'usdt', value: number) => void;
    updateProduct: (productId: string, updates: Partial<Product>) => void;
    bulkUpdateCurrency: (currency: 'bdt' | 'inr' | 'usdt', multiplier: number) => void;
    addProduct: (product: Product) => void;
    deleteProduct: (productId: string) => void;
    addPriceOption: (productId: string, option: PriceOption) => void;
    deletePriceOption: (productId: string, optionIndex: number) => void;
    resetProducts: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
    const [rates, setRates] = useState<ExchangeRates>(() => {
        const saved = localStorage.getItem("miraj-xheat-rates");
        return saved ? JSON.parse(saved) : { bdt: 110, inr: 90 };
    });

    const [products, setProducts] = useState<Product[]>(() => {
        const saved = localStorage.getItem("miraj-xheat-products");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return initialProducts;
            }
        }
        return initialProducts;
    });

    // Sync with initialProducts if they change (e.g. new products added)
    useEffect(() => {
        const saved = localStorage.getItem("miraj-xheat-products");
        if (!saved) {
            setProducts(initialProducts);
        }
    }, []);

    const saveProducts = (newProducts: Product[]) => {
        setProducts(newProducts);
        localStorage.setItem("miraj-xheat-products", JSON.stringify(newProducts));
    };

    const updateProductPrice = (productId: string, priceIndex: number, field: 'bdt' | 'inr' | 'usdt', value: number) => {
        const updatedProducts = products.map((p) => {
            if (p.id === productId) {
                const newPrices = [...p.prices];
                newPrices[priceIndex] = {
                    ...newPrices[priceIndex],
                    [field]: value
                };
                return { ...p, prices: newPrices };
            }
            return p;
        });
        saveProducts(updatedProducts);
    };

    const updateProduct = (productId: string, updates: Partial<Product>) => {
        const updatedProducts = products.map((p) => {
            if (p.id === productId) {
                return { ...p, ...updates };
            }
            return p;
        });
        saveProducts(updatedProducts);
    };

    const bulkUpdateCurrency = (currency: 'bdt' | 'inr' | 'usdt', multiplier: number) => {
        const updatedProducts = products.map((p) => ({
            ...p,
            prices: p.prices.map((price) => ({
                ...price,
                [currency]: Math.round((price.usdt || 0) * multiplier)
            })),
        }));

        saveProducts(updatedProducts);

        if (currency !== 'usdt') {
            const newRates = { ...rates, [currency]: multiplier };
            setRates(newRates);
            localStorage.setItem("miraj-xheat-rates", JSON.stringify(newRates));
        }
    };

    const addProduct = (product: Product) => {
        saveProducts([...products, product]);
    };

    const deleteProduct = (productId: string) => {
        saveProducts(products.filter(p => p.id !== productId));
    };

    const addPriceOption = (productId: string, option: PriceOption) => {
        const updatedProducts = products.map((p) => {
            if (p.id === productId) {
                return { ...p, prices: [...p.prices, option] };
            }
            return p;
        });
        saveProducts(updatedProducts);
    };

    const deletePriceOption = (productId: string, optionIndex: number) => {
        const updatedProducts = products.map((p) => {
            if (p.id === productId) {
                const newPrices = p.prices.filter((_, i) => i !== optionIndex);
                return { ...p, prices: newPrices };
            }
            return p;
        });
        saveProducts(updatedProducts);
    };

    const resetProducts = () => {
        saveProducts(initialProducts);
        setRates({ bdt: 110, inr: 90 });
        localStorage.removeItem("miraj-xheat-rates");
    };

    return (
        <ProductContext.Provider value={{
            products,
            rates,
            updateProductPrice,
            updateProduct,
            bulkUpdateCurrency,
            addProduct,
            deleteProduct,
            addPriceOption,
            deletePriceOption,
            resetProducts
        }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
}
