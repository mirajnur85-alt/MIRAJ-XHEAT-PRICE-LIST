import { FileText, CheckCircle2, XCircle, AlertTriangle, Shield, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center border-2 border-[rgba(0,234,255,0.3)]">
              <FileText className="w-10 h-10 text-[#00eaff]" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">
              {t("terms.title")}
            </h1>
            <div className="h-1 sm:h-2 w-24 sm:w-32 mx-auto bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] rounded-full"></div>
          </div>
          <p className="text-sm sm:text-base text-[#a9b0ff] font-medium">
            {t("terms.lastUpdated")}: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#22c55e]" />
              <h2 className="text-xl md:text-2xl font-black text-white">{t("terms.acceptance")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed">
              {t("terms.acceptanceText")}
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#00eaff]" />
              <h2 className="text-2xl font-black text-white">{t("terms.serviceDescription")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed">
              {t("terms.serviceDescriptionText")}
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#8a3dff]" />
              <h2 className="text-2xl font-black text-white">{t("terms.purchases")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed mb-4">
              {t("terms.purchasesText")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#cfd6ff] ml-4">
              <li>{t("terms.purchase1")}</li>
              <li>{t("terms.purchase2")}</li>
              <li>{t("terms.purchase3")}</li>
              <li>{t("terms.purchase4")}</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#00eaff]" />
              <h2 className="text-2xl font-black text-white">{t("terms.userResponsibilities")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed mb-4">
              {t("terms.userResponsibilitiesText")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#cfd6ff] ml-4">
              <li>{t("terms.responsibility1")}</li>
              <li>{t("terms.responsibility2")}</li>
              <li>{t("terms.responsibility3")}</li>
              <li>{t("terms.responsibility4")}</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-[#ef4444]" />
              <h2 className="text-2xl font-black text-white">{t("terms.prohibitedUses")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed mb-4">
              {t("terms.prohibitedUsesText")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#cfd6ff] ml-4">
              <li>{t("terms.prohibited1")}</li>
              <li>{t("terms.prohibited2")}</li>
              <li>{t("terms.prohibited3")}</li>
              <li>{t("terms.prohibited4")}</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,193,7,0.1)] to-[rgba(255,152,0,0.1)] border-2 border-[rgba(255,193,7,0.3)]">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-black text-white">{t("terms.liability")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed">
              {t("terms.liabilityText")}
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-6 h-6 text-[#ff4fd8]" />
              <h2 className="text-2xl font-black text-white">{t("terms.refunds")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed">
              {t("terms.refundsText")}
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <h2 className="text-2xl font-black text-white mb-4">{t("terms.contact")}</h2>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed mb-4">
              {t("terms.contactText")}
            </p>
            <div className="flex flex-wrap gap-4 text-sm sm:text-base">
              <a
                href="http://wa.me/8801793686958"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00eaff] hover:text-[#ff4fd8] font-bold transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-[#8a8a8a]">•</span>
              <a
                href="https://t.me/mirajxheat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00eaff] hover:text-[#ff4fd8] font-bold transition-colors"
              >
                Telegram
              </a>
              <span className="text-[#8a8a8a]">•</span>
              <a
                href="https://discord.gg/p8zt6TuUSv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00eaff] hover:text-[#ff4fd8] font-bold transition-colors"
              >
                Discord
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

