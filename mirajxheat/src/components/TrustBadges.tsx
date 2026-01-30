import { Shield, Lock, CheckCircle2, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function TrustBadges() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6 sm:py-8 border-t border-b border-[rgba(255,255,255,0.1)]">
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#00eaff]" />
        <span className="text-xs sm:text-sm text-white font-bold">{t("trust.sslSecure")}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
        <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-[#22c55e]" />
        <span className="text-xs sm:text-sm text-white font-bold">{t("trust.securePayment")}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff4fd8]" />
        <span className="text-xs sm:text-sm text-white font-bold">{t("trust.verified")}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#8a3dff]" />
        <span className="text-xs sm:text-sm text-white font-bold">{t("trust.moneyBack")}</span>
      </div>
    </div>
  );
}

