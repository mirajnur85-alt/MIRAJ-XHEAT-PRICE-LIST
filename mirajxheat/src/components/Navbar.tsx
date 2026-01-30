import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, MessageSquare, Menu, X, Sparkles, ShoppingCart, Heart, Info, HelpCircle, Mail, CreditCard, LogOut, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useAuth } from "@/contexts/AuthContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const { getItemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { t } = useLanguage();
  const cartCount = getItemCount();
  const wishlistCount = wishlistItems.length;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Enhanced Logo Section - Responsive */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 font-bold text-white no-underline group flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <img
                src="/assets/logo.jpg"
                alt="MIRAJ XHEAT OFFICIAL"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 group-hover:scale-105 relative z-10 border-2 border-[rgba(0,234,255,0.25)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-black bg-gradient-to-r from-white via-neon-blue to-neon-pink bg-clip-text text-transparent leading-tight whitespace-nowrap">
                MIRAJ XHEAT
              </span>
              <span className="text-xs sm:text-sm md:text-base font-black bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent leading-tight">
                OFFICIAL
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] text-text-muted font-medium uppercase tracking-wider hidden md:block mt-0.5">
                Premium Gaming Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Enhanced */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all duration-200 relative group flex items-center gap-1.5 ${isActive("/")
                ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] border border-transparent"
                }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="relative z-10">{t("nav.products")}</span>
            </Link>
            <Link
              to="/about"
              className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all duration-200 flex items-center gap-1.5 ${isActive("/about")
                ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] border border-transparent"
                }`}
            >
              <Info className="w-3.5 h-3.5" />
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all duration-200 flex items-center gap-1.5 ${isActive("/contact")
                ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] border border-transparent"
                }`}
            >
              <Mail className="w-3.5 h-3.5" />
              {t("nav.contact")}
            </Link>

            <div className="w-px h-6 bg-[rgba(255,255,255,0.08)] mx-1"></div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 group"
            >
              <ShoppingCart className="w-5 h-5 text-[#a9b0ff] group-hover:text-[#00eaff] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] text-white text-[10px] font-black flex items-center justify-center border-2 border-[#0d1020] shadow-lg">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>

            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="relative p-2 rounded-lg hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 group"
            >
              <Heart className={`w-5 h-5 transition-colors ${wishlistCount > 0 ? 'text-[#ff4fd8] fill-[#ff4fd8]' : 'text-[#a9b0ff] group-hover:text-[#ff4fd8]'}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] text-white text-[10px] font-black flex items-center justify-center border-2 border-[#0d1020] shadow-lg">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </Link>

            {/* User Account / Auth Section */}
            <div className="relative">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 p-1.5 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00eaff] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00eaff] to-[#8a3dff] flex items-center justify-center text-white font-black text-xs uppercase">
                      {user.name.charAt(0)}
                    </div>
                    <span className="text-xs xl:text-sm font-bold text-[#a9b0ff] group-hover:text-white hidden xl:inline">{user.name.split(' ')[0]}</span>
                    <ChevronDown className={`w-4 h-4 text-[#a9b0ff] transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 py-2 rounded-2xl bg-[#1a1c2e] border-2 border-[rgba(255,255,255,0.1)] shadow-2xl z-50 animate-in fade-in zoom-in duration-200">
                      <div className="px-4 py-2 border-b border-[rgba(255,255,255,0.05)] mb-1">
                        <p className="text-xs font-black text-[#a9b0ff] uppercase tracking-widest leading-none mb-1">Signed in as</p>
                        <p className="text-sm font-bold text-white truncate">{user.email}</p>
                      </div>
                      <Link
                        to="/wishlist"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#a9b0ff] hover:text-[#00eaff] hover:bg-[rgba(255,255,255,0.03)] transition-all"
                      >
                        <Heart className="w-4 h-4" />
                        Wishlist
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-1.5 ml-1">
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-lg font-bold text-xs xl:text-sm text-[#a9b0ff] hover:text-white transition-all"
                  >
                    Login
                  </Link>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-lg px-4 py-2 bg-gradient-to-r from-[#00eaff] to-[#8a3dff] text-white font-black text-xs xl:text-sm hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                  >
                    <Link to="/signup">Join Now</Link>
                  </Button>
                </div>
              )}
            </div>

            <Button
              asChild
              variant="default"
              className="rounded-lg px-3 xl:px-4 py-2 bg-gradient-to-r from-[#25D366] via-[rgba(37,211,102,0.8)] to-[#25D366] text-white font-bold text-xs xl:text-sm shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-200 border-0 ml-1"
            >
              <a
                href="http://wa.me/8801793686958"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Tablet/Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-[#a9b0ff]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] text-white text-[10px] font-black flex items-center justify-center border-2 border-[#0d1020]">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
            <button
              className="text-white p-2 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-3 space-y-2 border-t border-[rgba(0,234,255,0.15)]">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${isActive("/")
                ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]"
                : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
                }`}
            >
              <Sparkles className="w-4 h-4" />
              {t("nav.products")}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${isActive("/about")
                ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]"
                : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
                }`}
            >
              <Info className="w-4 h-4" />
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${isActive("/contact")
                ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]"
                : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
                }`}
            >
              <Mail className="w-4 h-4" />
              {t("nav.contact")}
            </Link>
            <Link
              to="/faq"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${isActive("/faq")
                ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]"
                : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
                }`}
            >
              <HelpCircle className="w-4 h-4" />
              {t("nav.faq")}
            </Link>
            <Link
              to="/payment"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${isActive("/payment")
                ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]"
                : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
                }`}
            >
              <CreditCard className="w-4 h-4" />
              {t("nav.payment")}
            </Link>
            <Link
              to="/wishlist"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all"
            >
              <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-[#ff4fd8] fill-[#ff4fd8]' : ''}`} />
              {t("nav.wishlist")} {wishlistCount > 0 && <span className="text-xs">({wishlistCount})</span>}
            </Link>
            <div className="pt-2 space-y-2">
              <Button
                asChild
                variant="default"
                className="w-full rounded-lg px-4 py-2.5 bg-gradient-to-r from-[#25D366] to-[#00eaff] text-white font-bold text-sm"
              >
                <a
                  href="http://wa.me/8801793686958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                className="w-full rounded-lg px-4 py-2.5 bg-gradient-to-r from-[#5865F2] to-[#8a3dff] text-white font-bold text-sm"
              >
                <a
                  href="https://discord.gg/p8zt6TuUSv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Discord
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
