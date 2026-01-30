import { Shield, Lock, Eye, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center border-2 border-[rgba(0,234,255,0.3)]">
              <Shield className="w-10 h-10 text-[#00eaff]" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">
              {t("privacy.title")}
            </h1>
            <div className="h-1 sm:h-2 w-24 sm:w-32 mx-auto bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] rounded-full"></div>
          </div>
          <p className="text-sm sm:text-base text-[#a9b0ff] font-medium">
            {t("privacy.lastUpdated")}: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#00eaff]" />
              <h2 className="text-xl md:text-2xl font-black text-white">{t("privacy.introduction")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed">
              {t("privacy.introText")}
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#8a3dff]" />
              <h2 className="text-2xl font-black text-white">{t("privacy.dataCollection")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed mb-4">
              {t("privacy.dataCollectionText")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#cfd6ff] ml-4">
              <li>{t("privacy.data1")}</li>
              <li>{t("privacy.data2")}</li>
              <li>{t("privacy.data3")}</li>
              <li>{t("privacy.data4")}</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#ff4fd8]" />
              <h2 className="text-2xl font-black text-white">{t("privacy.dataUsage")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed mb-4">
              {t("privacy.dataUsageText")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#cfd6ff] ml-4">
              <li>{t("privacy.usage1")}</li>
              <li>{t("privacy.usage2")}</li>
              <li>{t("privacy.usage3")}</li>
              <li>{t("privacy.usage4")}</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#22c55e]" />
              <h2 className="text-2xl font-black text-white">{t("privacy.dataProtection")}</h2>
            </div>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed">
              {t("privacy.dataProtectionText")}
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]">
            <h2 className="text-2xl font-black text-white mb-4">{t("privacy.contact")}</h2>
            <p className="text-sm sm:text-base text-[#cfd6ff] leading-relaxed">
              {t("privacy.contactText")}
            </p>
            <p className="text-sm sm:text-base text-[#00eaff] font-bold mt-4">
              support@mirajxheat.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

