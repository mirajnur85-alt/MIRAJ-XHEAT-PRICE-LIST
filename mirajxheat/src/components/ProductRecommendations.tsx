import { Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductRecommendationsProps {
  currentProduct: Product;
  allProducts: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductRecommendations({ currentProduct, allProducts, onProductClick }: ProductRecommendationsProps) {
  const { t } = useLanguage();
  
  // Get related products (excluding current product)
  const relatedProducts = allProducts
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-12 sm:mt-16">
      <div className="flex items-center gap-4 mb-8 sm:mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(138,61,255,0.5)] to-transparent"></div>
        <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#8a3dff]" />
          {t("recommendations.title")}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(138,61,255,0.5)] to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
}

