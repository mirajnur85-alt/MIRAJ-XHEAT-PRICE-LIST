import { useState } from "react";
import { Copy, Check, CreditCard, Globe, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_NUMBER = "8801793686958";
const SHOW_INDIA_PAYMENT = false;
const UPI_ID = "gund";

interface PaymentMethod {
  id: string;
  title: string;
  icon: React.ReactNode;
  methods: {
    label: string;
    value: string;
    type: "number" | "text" | "username";
  }[];
  color: string;
}

export function PaymentPage() {
  const { t } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);


  const paymentMethods: PaymentMethod[] = [
    {
      id: "bd",
      title: t("payment.bd"),
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      methods: [
        { label: "bKash", value: "01793606909", type: "number" },
        { label: "Nagad", value: "01793606909", type: "number" },
      ],
    },
    ...(SHOW_INDIA_PAYMENT ? [{
      id: "india",
      title: t("payment.india"),
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-orange-500 to-amber-600",
      methods: [
        { label: "UPI ID", value: UPI_ID, type: "text" as const },
      ],
    }] : []),
    {
      id: "international",
      title: t("payment.international"),
      icon: <Globe className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600",
      methods: [
        { label: "Binance ID", value: "756710028", type: "number" },
        { label: "Username", value: "MIRAJ XHEAT", type: "username" },
      ],
    },
  ];



  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleWhatsAppContact = () => {
    const message = `Hello! I have completed the payment. Please find the payment details below:\n\n[Please attach screenshot and mention exact amount]`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">
          {t("payment.title")}
        </h1>
        <div className="h-1 w-20 sm:w-24 mx-auto bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] rounded-full mb-4"></div>
        <p className="text-xs sm:text-sm md:text-base text-[#a9b0ff] max-w-2xl mx-auto font-medium">
          {t("payment.instructions")}
        </p>
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {paymentMethods.map((method) => (
          <Card
            key={method.id}
            className="p-6 sm:p-8 border-2 border-[rgba(255,255,255,0.1)] hover:border-[#00eaff] transition-all duration-300"
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 sm:mb-6 text-white`}>
              {method.icon}
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4">{method.title}</h2>

            {/* Important Note for Bangladesh Payment */}
            {method.id === "bd" && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-[rgba(255,193,7,0.15)] to-[rgba(255,152,0,0.15)] border-2 border-[rgba(255,193,7,0.3)]">
                <p className="text-xs sm:text-sm text-white font-bold leading-relaxed">
                  ⚠️ {t("payment.warning")}
                </p>
              </div>
            )}

            <div className="space-y-3 sm:space-y-4">
              {method.methods.map((item, index) => {
                const uniqueId = `${method.id}-${index}`;
                const isCopied = copiedId === uniqueId;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs sm:text-sm font-bold text-[#a9b0ff] uppercase tracking-wider">
                        {item.label}
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,255,255,0.1)]">
                        <span className="text-base sm:text-lg font-bold text-white break-all">{item.value}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.value, uniqueId)}
                        className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#00eaff] to-[#8a3dff] hover:from-[#8a3dff] hover:to-[#ff4fd8] text-white font-black transition-all duration-300 hover:scale-105 flex items-center gap-2 min-w-[80px] justify-center"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">{t("payment.copied")}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">{t("payment.copy")}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>

      {/* Important Instructions */}
      <Card className="p-6 sm:p-8 md:p-10 border-2 border-[rgba(0,234,255,0.3)] bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)] mb-8 sm:mb-12">
        <div className="flex items-start gap-4 sm:gap-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#00eaff] to-[#8a3dff] flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-3 sm:mb-4">
              {t("payment.instructions")}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-black">1</span>
                </div>
                <p className="text-sm sm:text-base text-[#a9b0ff] font-medium leading-relaxed">
                  {t("payment.step1")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-black">2</span>
                </div>
                <p className="text-sm sm:text-base text-[#a9b0ff] font-medium leading-relaxed">
                  {t("payment.step2")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-black">3</span>
                </div>
                <p className="text-sm sm:text-base text-[#a9b0ff] font-medium leading-relaxed">
                  {t("payment.step3")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-black">4</span>
                </div>
                <p className="text-sm sm:text-base text-[#a9b0ff] font-medium leading-relaxed">
                  {t("payment.step4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* WhatsApp Contact Button */}
      <div className="text-center">
        <Button
          onClick={handleWhatsAppContact}
          className="rounded-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-[#25D366] via-[#00eaff] to-[#8a3dff] hover:from-[#8a3dff] hover:via-[#ff4fd8] hover:to-[#25D366] shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all duration-300 relative overflow-hidden group"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          <span>{t("payment.sendScreenshot")}</span>
        </Button>
        <p className="text-xs sm:text-sm text-[#a9b0ff] mt-4 font-medium">
          {t("payment.sendScreenshot")}
        </p>
      </div>
    </div>
  );
}

