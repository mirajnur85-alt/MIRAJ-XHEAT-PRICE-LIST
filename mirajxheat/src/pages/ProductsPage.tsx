import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { useProducts } from "@/contexts/ProductContext";
import { Product } from "@/types";
import { Search, Sparkles, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProductsPage() {
  const { products } = useProducts();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: "all", label: t("products.all"), icon: Sparkles },
    { id: "mobile", label: "Mobile", icon: Filter },
    { id: "pc", label: "PC", icon: Filter },
    { id: "root", label: "Root", icon: Filter },
    { id: "ios", label: "iOS", icon: Filter },
    { id: "bypass", label: "Bypass", icon: Filter },
    { id: "silentaim", label: "Silent Aim", icon: Filter }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.features && product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory = selectedCategory === "all" ||
      (product.categories && product.categories.includes(selectedCategory));

    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00eaff]"></div>
              <span className="text-xs sm:text-sm font-black text-[#00eaff] uppercase tracking-wider">Premium Collection</span>
              <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00eaff]"></div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent leading-tight">
              {t("products.title")}
            </h1>
            <div className="h-1 w-20 sm:w-24 mx-auto bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] rounded-full"></div>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#a9b0ff] max-w-2xl mx-auto font-medium leading-relaxed">
            Discover our premium collection of gaming solutions. Each product is carefully selected for quality and performance.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#a9b0ff] group-focus-within:text-[#00eaff] transition-colors z-10" />
              <Input
                type="text"
                placeholder={t("products.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 sm:pl-14 pr-4 sm:pr-5 w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border-2 ${selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] text-white shadow-[0_0_20px_rgba(138,61,255,0.5)] scale-105 border-transparent"
                    : "bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.15)] text-[#a9b0ff] hover:border-[#00eaff] hover:bg-[rgba(0,234,255,0.08)] hover:text-white hover:scale-105"
                    }`}
                >
                  <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${selectedCategory === category.id ? 'text-white' : 'text-[#00eaff]'}`} />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                <ProductCard
                  product={product}
                  onProductClick={handleProductClick}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-24 md:py-32">
            <div className="inline-block p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.15)] backdrop-blur-xl">
              <Search className="w-12 h-12 sm:w-16 sm:h-16 text-[#a9b0ff] mx-auto mb-4 sm:mb-6 opacity-50" />
              <p className="text-2xl sm:text-3xl text-white font-black mb-2 sm:mb-3">No products found</p>
              <p className="text-sm sm:text-base text-[#8a8a8a] font-medium">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
