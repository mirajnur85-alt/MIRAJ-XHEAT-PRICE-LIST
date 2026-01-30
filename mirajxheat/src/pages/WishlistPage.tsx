import { useWishlist } from "@/contexts/WishlistContext";
import { ProductCard } from "@/components/ProductCard";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { useState } from "react";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";

export function WishlistPage() {
  const { items } = useWishlist();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[rgba(255,79,216,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center border-2 border-[rgba(255,79,216,0.3)]">
            <Heart className="w-16 h-16 text-[#ff4fd8]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-3 bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] bg-clip-text text-transparent">
            Your Wishlist is Empty
          </h2>
          <p className="text-sm md:text-base text-[#a9b0ff] mb-6 font-medium">
            Start adding products to your wishlist to save them for later
          </p>
          <Button
            asChild
            className="rounded-lg px-6 py-4 text-sm md:text-base font-bold bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] hover:from-[#ff4fd8] hover:to-[#00eaff] shadow-[0_0_30px_rgba(138,61,255,0.5)]"
          >
            <Link to="/products" className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 rotate-180" />
              Browse Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-[#ff4fd8] via-[#8a3dff] to-[#00eaff] bg-clip-text text-transparent">
            My Wishlist
          </h1>
          <p className="text-sm md:text-base text-[#a9b0ff] font-medium">
            {items.length} {items.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((product, index) => (
            <div
              key={product.id}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <ProductCard
                product={product}
                onProductClick={handleProductClick}
              />
            </div>
          ))}
        </div>
      </div>

      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

