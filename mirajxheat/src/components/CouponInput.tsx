import { useState } from "react";
import { Ticket, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface CouponInputProps {
  onApplyCoupon: (code: string) => void;
  appliedCoupon?: string | null;
  discount?: number;
}

export function CouponInput({ onApplyCoupon, appliedCoupon, discount }: CouponInputProps) {
  const { t } = useLanguage();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleApply = () => {
    if (!code.trim()) {
      setError(t("coupon.enterCode"));
      return;
    }
    setError("");
    onApplyCoupon(code.toUpperCase());
  };

  const handleRemove = () => {
    setCode("");
    onApplyCoupon("");
    setError("");
  };

  return (
    <div className="space-y-3">
      {appliedCoupon ? (
        <div className="p-4 rounded-xl bg-gradient-to-r from-[rgba(34,197,94,0.15)] to-[rgba(34,197,94,0.1)] border-2 border-[rgba(34,197,94,0.3)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-black text-white">{t("coupon.applied")}: {appliedCoupon}</div>
              {discount && (
                <div className="text-xs text-[#a9b0ff] font-semibold">{discount}% {t("coupon.discount")}</div>
              )}
            </div>
          </div>
          <button
            onClick={handleRemove}
            className="p-2 rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
            aria-label={t("coupon.remove")}
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a9b0ff]" />
            <Input
              type="text"
              placeholder={t("coupon.enterCode")}
              value={code}
              onChange={(e) => {
                setCode(e.target.value.toUpperCase());
                setError("");
              }}
              className="pl-10 pr-4 h-12 border-2 border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] text-white placeholder:text-[#a9b0ff] focus:border-[#00eaff]"
            />
          </div>
          <Button
            onClick={handleApply}
            className="px-6 h-12 bg-gradient-to-r from-[#00eaff] to-[#8a3dff] hover:from-[#8a3dff] hover:to-[#ff4fd8] text-white font-black"
          >
            {t("coupon.apply")}
          </Button>
        </div>
      )}
      {error && (
        <div className="text-xs text-red-400 font-semibold flex items-center gap-2">
          <X className="w-4 h-4" />
          {error}
        </div>
      )}
    </div>
  );
}

