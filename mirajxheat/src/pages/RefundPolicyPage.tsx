import { RefreshCw, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function RefundPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center border-2 border-[rgba(0,234,255,0.3)]">
              <RefreshCw className="w-10 h-10 text-[#00eaff]" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">
              {t("refund.title")}
            </h1>
            <div className="h-1 sm:h-2 w-24 sm:w-32 mx-auto bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] rounded-full"></div>
          </div>
          <p className="text-sm sm:text-base text-[#a9b0ff] font-medium">
            {t("refund.lastUpdated")}: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#22c55e]" />
              <h2 className="text-xl md:text-2xl font-black text-white">{t("refund.eligibility")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed mb-4">
              {t("refund.eligibilityText")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#cfd6ff] ml-4">
              <li>{t("refund.eligible1")}</li>
              <li>{t("refund.eligible2")}</li>
              <li>{t("refund.eligible3")}</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-[#ef4444]" />
              <h2 className="text-2xl font-black text-white">{t("refund.nonEligible")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed mb-4">
              {t("refund.nonEligibleText")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#cfd6ff] ml-4">
              <li>{t("refund.nonEligible1")}</li>
              <li>{t("refund.nonEligible2")}</li>
              <li>{t("refund.nonEligible3")}</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#00eaff]" />
              <h2 className="text-2xl font-black text-white">{t("refund.process")}</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(0,234,255,0.05)] border border-[rgba(0,234,255,0.2)]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00eaff] to-[#8a3dff] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-black">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-white mb-1">{t("refund.step1Title")}</h3>
                  <p className="text-sm text-[#cfd6ff]">{t("refund.step1Text")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(0,234,255,0.05)] border border-[rgba(0,234,255,0.2)]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00eaff] to-[#8a3dff] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-black">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-white mb-1">{t("refund.step2Title")}</h3>
                  <p className="text-sm text-[#cfd6ff]">{t("refund.step2Text")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(0,234,255,0.05)] border border-[rgba(0,234,255,0.2)]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00eaff] to-[#8a3dff] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-black">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-white mb-1">{t("refund.step3Title")}</h3>
                  <p className="text-sm text-[#cfd6ff]">{t("refund.step3Text")}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,193,7,0.1)] to-[rgba(255,152,0,0.1)] border-2 border-[rgba(255,193,7,0.3)]">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-black text-white">{t("refund.important")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed">
              {t("refund.importantText")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

