import { useState, useEffect } from "react";
import { Product, PriceOption } from "@/types";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { useProducts } from "@/contexts/ProductContext";

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "8801793686958";

function formatWhatsAppMessage(product: Product, price: PriceOption): string {
  const priceText = price.usdt
    ? `${price.bdt} BDT | ₹${price.inr} | ${price.usdt} USDT`
    : `${price.bdt} BDT | ₹${price.inr}`;
  const noteText = price.note ? ` ${price.note}` : "";
  return `${product.name} ${price.duration} ${priceText}${noteText}`;
}

export function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  const { products } = useProducts();
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const { t } = useLanguage();

  useEffect(() => {
    if (product?.prices[0]) {
      setSelectedDuration(product.prices[0].duration);
    }
  }, [product]);

  if (!product) return null;

  const selectedPrice = product.prices.find(p => p.duration === selectedDuration) || product.prices[0];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name}>
      <div className="p-4 md:p-6 space-y-6">
        {/* Product Header Section - More Compact */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image - Smaller & Cleaner */}
          <div className="flex-shrink-0 md:w-1/3">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-black/60 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t("common.inStock")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info - Simplified */}
          <div className="flex-1 space-y-4">
            <div>
              <p className="text-sm font-bold text-[#00eaff] uppercase tracking-widest mb-1">{product.subtitle}</p>
              <h1 className="text-2xl font-black text-white">{product.name}</h1>
              {product.description && (
                <p className="text-sm text-[#a9b0ff] mt-2 leading-relaxed">{product.description}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase">
                {product.prices.length} Pricing Options
              </div>
            </div>
          </div>
        </div>

        {/* Video Demo - Replaces Features as requested */}
        {product.videoUrl && (
          <div className="pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-4 h-4 text-[#ff4fd8]" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Video Demonstration</h3>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={product.videoUrl.includes('youtube.com') || product.videoUrl.includes('youtu.be')
                    ? product.videoUrl.replace('watch?v=', 'embed/').split('&')[0].replace('youtu.be/', 'youtube.com/embed/')
                    : product.videoUrl}
                  title={`${product.name} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* Duration Selection - Cleaner Grid */}
        <div className="pt-4 border-t border-white/5">
          <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4 text-center opacity-50">Select Duration</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {product.prices.map((price, index) => (
              <button
                key={index}
                onClick={() => setSelectedDuration(price.duration)}
                className={`p-3 rounded-xl border text-center transition-all ${selectedDuration === price.duration
                  ? "bg-[#00eaff]/10 border-[#00eaff] shadow-[0_0_20px_rgba(0,234,255,0.2)]"
                  : "bg-white/5 border-white/10 hover:border-white/30"
                  }`}
              >
                <div className="text-[10px] font-black text-white/40 uppercase mb-1">{price.duration}</div>
                <div className="text-sm font-black text-white">৳{price.bdt}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Price Display - Compact */}
        {selectedPrice && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)] border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black text-[#00eaff] uppercase tracking-widest">{selectedPrice.duration} Plan</span>
              <CheckCircle2 className="w-4 h-4 text-[#00eaff]" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-[9px] text-[#a9b0ff] font-bold uppercase mb-1">BDT</p>
                <p className="text-lg font-black text-white">৳{selectedPrice.bdt}</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-[9px] text-[#a9b0ff] font-bold uppercase mb-1">INR</p>
                <p className="text-lg font-black text-white">₹{selectedPrice.inr}</p>
              </div>
              <div className="text-center">
                <p className="text-[9px] text-[#a9b0ff] font-bold uppercase mb-1">USDT</p>
                <p className="text-lg font-black text-[#00eaff]">{selectedPrice.usdt}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4">
          <Button
            asChild
            className="w-full h-14 rounded-2xl font-black text-white bg-gradient-to-r from-[#25D366] to-[#00eaff] shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formatWhatsAppMessage(product, selectedPrice))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact to Purchase</span>
            </a>
          </Button>
          <p className="text-center text-[10px] text-[#a9b0ff] mt-2 uppercase font-bold tracking-widest opacity-50">
            24/7 Premium Support Available
          </p>
        </div>

        {/* Recommendations - Smaller */}
        <div className="pt-6 border-t border-white/5">
          <ProductRecommendations
            currentProduct={product}
            allProducts={products}
            onProductClick={(newProduct) => {
              onClose();
              setTimeout(() => {
                window.location.href = `/products#${newProduct.id}`;
              }, 300);
            }}
          />
        </div>
      </div>
    </Modal>
  );
}
