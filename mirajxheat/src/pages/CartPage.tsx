import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CouponInput } from "@/components/CouponInput";
import { useLanguage } from "@/contexts/LanguageContext";

export function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { t } = useLanguage();
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const total = getTotalPrice();
  const discountedTotal = discount > 0 ? {
    inr: Math.round(total.inr * (1 - discount / 100)),
    bdt: Math.round(total.bdt * (1 - discount / 100)),
    usdt: total.usdt > 0 ? Math.round(total.usdt * (1 - discount / 100) * 100) / 100 : 0
  } : total;

  const handleApplyCoupon = (code: string) => {
    if (!code) {
      setAppliedCoupon(null);
      setDiscount(0);
      return;
    }

    // Example coupon codes - you can expand this
    const coupons: Record<string, number> = {
      "WELCOME10": 10,
      "SAVE20": 20,
      "PREMIUM15": 15,
      "FIRST5": 5,
    };

    if (coupons[code]) {
      setAppliedCoupon(code);
      setDiscount(coupons[code]);
    } else {
      setAppliedCoupon(null);
      setDiscount(0);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center border-2 border-[rgba(0,234,255,0.3)]">
            <ShoppingBag className="w-16 h-16 text-[#00eaff]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-3 bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent">
            Your Cart is Empty
          </h2>
          <p className="text-sm md:text-base text-[#a9b0ff] mb-6 font-medium">
            Start adding products to your cart to continue shopping
          </p>
          <Button
            asChild
            className="rounded-lg px-6 py-4 text-sm md:text-base font-bold bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] hover:from-[#ff4fd8] hover:to-[#00eaff] shadow-[0_0_30px_rgba(138,61,255,0.5)]"
          >
            <Link to="/products" className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 rotate-180" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">
          Shopping Cart
        </h1>
        <p className="text-sm md:text-base text-[#a9b0ff] font-medium">
          {items.length} {items.length === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, index) => (
            <Card
              key={`${item.product.id}-${item.priceOption.duration}-${index}`}
              className="p-6 md:p-8 border-2 border-[rgba(255,255,255,0.1)] hover:border-[#00eaff] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full md:w-40 h-40 rounded-2xl object-cover border-2 border-[rgba(255,255,255,0.1)]"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">{item.product.name}</h3>
                    <p className="text-sm text-[#a9b0ff] mb-4 font-medium">{item.product.subtitle}</p>
                    <div className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border border-[rgba(0,234,255,0.3)]">
                      <span className="text-sm font-bold text-[#00eaff]">{item.priceOption.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t-2 border-[rgba(255,255,255,0.1)]">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-[#a9b0ff] font-bold">Quantity:</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.priceOption.duration, item.quantity - 1)}
                          className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.2)] flex items-center justify-center hover:bg-[rgba(255,79,216,0.2)] hover:border-[#ff4fd8] transition-all"
                        >
                          <Minus className="w-5 h-5 text-white" />
                        </button>
                        <span className="text-xl font-black text-white w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.priceOption.duration, item.quantity + 1)}
                          className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.2)] flex items-center justify-center hover:bg-[rgba(0,234,255,0.2)] hover:border-[#00eaff] transition-all"
                        >
                          <Plus className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white mb-1">
                        ₹{item.priceOption.inr * item.quantity}
                      </div>
                      <div className="text-sm text-[#a9b0ff] font-medium">
                        {item.priceOption.bdt * item.quantity} BDT
                        {item.priceOption.usdt && ` • ${item.priceOption.usdt * item.quantity} USDT`}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id, item.priceOption.duration)}
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(255,0,0,0.1)] border-2 border-[rgba(255,0,0,0.3)] flex items-center justify-center hover:bg-[rgba(255,0,0,0.2)] hover:border-red-500 transition-all self-start md:self-center"
                >
                  <Trash2 className="w-5 h-5 text-red-400" />
                </button>
              </div>
            </Card>
          ))}

          <Button
            onClick={clearCart}
            variant="outline"
            className="w-full md:w-auto rounded-2xl px-8 py-6 text-base font-black border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500"
          >
            Clear Cart
          </Button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 md:p-8 border-2 border-[rgba(0,234,255,0.3)] bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)] sticky top-24">
            <h2 className="text-2xl font-black text-white mb-6">{t("cart.orderSummary")}</h2>

            {/* Coupon Input */}
            <div className="mb-6">
              <CouponInput
                onApplyCoupon={handleApplyCoupon}
                appliedCoupon={appliedCoupon}
                discount={discount}
              />
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-[#a9b0ff] font-medium">
                <span>{t("cart.subtotal")} ({items.reduce((sum, item) => sum + item.quantity, 0)} {t("cart.items")})</span>
                <span className="text-white font-bold">₹{total.inr}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-400 font-medium">
                  <span>{t("cart.discount")} ({discount}%)</span>
                  <span className="font-bold">-₹{total.inr - discountedTotal.inr}</span>
                </div>
              )}
              <div className="h-px bg-gradient-to-r from-transparent via-[rgba(0,234,255,0.5)] to-transparent my-4"></div>
              <div className="flex justify-between">
                <span className="text-xl font-black text-white">{t("cart.total")}</span>
                <div className="text-right">
                  <div className="text-3xl font-black bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent">
                    ₹{discountedTotal.inr}
                  </div>
                  <div className="text-sm text-[#a9b0ff] font-medium">
                    {discountedTotal.bdt} BDT
                    {discountedTotal.usdt > 0 && ` • ${discountedTotal.usdt} USDT`}
                  </div>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="w-full rounded-2xl py-7 text-lg font-black bg-gradient-to-r from-[#25D366] via-[#00eaff] to-[#8a3dff] hover:from-[#8a3dff] hover:via-[#ff4fd8] hover:to-[#25D366] shadow-[0_0_40px_rgba(37,211,102,0.5)] hover:shadow-[0_0_60px_rgba(37,211,102,0.7)] transition-all duration-500 mb-4"
            >
              <a
                href={`http://wa.me/8801793686958?text=${encodeURIComponent(
                  `Order Summary:\n${items.map(item => `${item.product.name} (${item.priceOption.duration}) x${item.quantity} - ₹${item.priceOption.inr * item.quantity}`).join('\n')}\n\nTotal: ₹${total.inr} (${total.bdt} BDT${total.usdt > 0 ? `, ${total.usdt} USDT` : ''})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Proceed to Checkout
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full rounded-2xl py-6 text-base font-black border-2 border-[rgba(0,234,255,0.5)] text-white hover:bg-[rgba(0,234,255,0.1)]"
            >
              <Link to="/products" className="flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 rotate-180" />
                Continue Shopping
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

