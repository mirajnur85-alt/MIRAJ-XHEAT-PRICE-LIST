import { Product } from "@/types";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onViewDetails: () => void;
}

export function ProductQuickView({ product, isOpen, onClose, onViewDetails }: ProductQuickViewProps) {
  if (!isOpen || !product) return null;

  const lowestPrice = product.prices[0];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <Card
        className="max-w-md w-full p-6 bg-[#0d1020] border-2 border-[rgba(255,255,255,0.2)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl"
          />
          <div>
            <h3 className="text-xl font-black text-white mb-1">{product.name}</h3>
            <p className="text-sm text-[#a9b0ff] mb-3">{product.subtitle}</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-black text-white">₹{lowestPrice?.inr || 0}</span>
              {lowestPrice?.usdt && (
                <span className="text-sm text-[#00eaff] font-bold">{lowestPrice.usdt} USDT</span>
              )}
            </div>
            {product.features && product.features.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-md bg-gradient-to-r from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)] border border-[rgba(0,234,255,0.2)] text-[#00eaff] font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <button
              onClick={() => {
                onViewDetails();
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] text-white font-black hover:shadow-[0_0_25px_rgba(138,61,255,0.6)] transition-all duration-300"
            >
              View Full Details
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

