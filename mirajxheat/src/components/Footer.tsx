import { Link } from "react-router-dom";
import { Send, MessageCircle, Youtube } from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { TrustBadges } from "@/components/TrustBadges";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer py-12 sm:py-16 mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h5 className="font-black text-2xl sm:text-3xl mb-8 sm:mb-10 bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
            {t("footer.connect")}
          </h5>

          <div className="flex justify-center gap-4 sm:gap-5 md:gap-6 my-8 sm:my-10">
            {/* Telegram */}
            <a
              href="https://t.me/mirajxheat"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(42,171,238,0.3)] transition-all duration-300 hover:bg-[#2AABEE] hover:border-[#2AABEE] hover:shadow-[0_0_40px_rgba(42,171,238,0.9)] hover:-translate-y-3 hover:scale-110"
              aria-label="Telegram"
            >
              <Send className="w-6 h-6 sm:w-7 sm:h-7 text-[#2AABEE] group-hover:text-white transition-colors duration-300" />
            </a>

            {/* WhatsApp */}
            <a
              href="http://wa.me/8801793686958"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(37,211,102,0.3)] transition-all duration-300 hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_40px_rgba(37,211,102,0.9)] hover:-translate-y-3 hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#25D366] group-hover:text-white transition-colors duration-300" />
            </a>

            {/* Discord - Using Official Discord Icon */}
            <a
              href="https://discord.gg/p8zt6TuUSv"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(88,101,242,0.3)] transition-all duration-300 hover:bg-[#5865F2] hover:border-[#5865F2] hover:shadow-[0_0_40px_rgba(88,101,242,0.9)] hover:-translate-y-3 hover:scale-110"
              aria-label="Discord"
            >
              <DiscordIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#5865F2] group-hover:text-white transition-colors duration-300" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@mirajxheat?si=0l6QYubm857Y_S-T"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,0,0,0.3)] transition-all duration-300 hover:bg-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_40px_rgba(255,0,0,0.9)] hover:-translate-y-3 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF0000] group-hover:text-white transition-colors duration-300" />
            </a>
          </div>

          {/* Trust Badges */}
          <TrustBadges />

          <div className="border-t-2 border-cyber-border pt-6 sm:pt-8 mt-6 sm:mt-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
              <Link to="/privacy" className="text-xs sm:text-sm text-[#a9b0ff] hover:text-[#00eaff] font-semibold transition-colors">
                {t("footer.privacy")}
              </Link>
              <span className="text-[#8a8a8a]">•</span>
              <Link to="/refund" className="text-xs sm:text-sm text-[#a9b0ff] hover:text-[#00eaff] font-semibold transition-colors">
                {t("footer.refund")}
              </Link>
              <span className="text-[#8a8a8a]">•</span>
              <Link to="/terms" className="text-xs sm:text-sm text-[#a9b0ff] hover:text-[#00eaff] font-semibold transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
            <p className="text-sm sm:text-base text-[#a9b0ff] font-semibold">
              {t("footer.copyright")}
            </p>
            <p className="text-xs sm:text-sm text-[#8a8a8a] mt-2 sm:mt-3 font-medium">
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
