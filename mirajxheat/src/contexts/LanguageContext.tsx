import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "bn" | "hi" | "ar" | "es" | "fr" | "de" | "ja" | "ko" | "pt" | "ru" | "zh" | "it" | "tr" | "vi" | "th" | "id" | "nl" | "pl" | "uk";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.faq": "FAQ",
    "nav.payment": "Payment",
    "nav.wishlist": "Wishlist",
    "nav.cart": "Cart",
    // Home
    "home.title": "MIRAJ XHEAT OFFICIAL",
    "home.subtitle": "Premium Gaming Solutions",
    "home.tagline": "Your Trusted Partner for Premium Gaming",
    "home.description": "Experience the ultimate gaming advantage with our premium collection of verified cheats and mods. Quality products, competitive pricing, and 24/7 dedicated support.",
    "home.explore": "Explore Products",
    "home.contact": "Contact Us",
    "home.whyChoose": "Why Choose Us",
    "home.trusted": "Trusted & Secure",
    "home.instant": "Instant Delivery",
    "home.premium": "Premium Quality",
    "home.ready": "Ready to Get Started?",
    // Products
    "products.title": "Our Products",
    "products.search": "Search products...",
    "products.all": "All Products",
    "products.viewDetails": "View Details",
    // Payment
    "payment.title": "Payment Methods",
    "payment.bd": "Bangladesh Payment",
    "payment.india": "India Payment",
    "payment.international": "International Payment",
    "payment.warning": "Important: Send money to these numbers only. This is a personal account. Do NOT call anyone.",
    "payment.copy": "Copy",
    "payment.copied": "Copied!",
    "payment.instructions": "Important Payment Instructions",
    "payment.step1": "Complete the payment using any of the methods above. Make sure to send the exact amount as specified.",
    "payment.step2": "Take a screenshot of your payment confirmation or transaction receipt.",
    "payment.step3": "Click the button below to contact us via WhatsApp and send the screenshot along with the exact payment amount.",
    "payment.step4": "Our team will verify your payment and provide your product access within 24 hours.",
    "payment.sendScreenshot": "Send Payment Screenshot via WhatsApp",
    // Footer
    "footer.connect": "CONNECT WITH US",
    "footer.copyright": "© 2026 MIRAJ XHEAT OFFICIAL | All Rights Reserved",
    "footer.tagline": "Premium Gaming Solutions • Trusted Reseller • 24/7 Support",
    // Common
    "common.addToCart": "Add to Cart",
    "common.contactToBuy": "Contact to Buy",
    "common.inStock": "In Stock",
    "common.selectDuration": "Select Duration",
    "common.selectedPlan": "Selected Plan",
    "common.startingFrom": "Starting from",
    // Product Card
    "productCard.quickView": "Quick View",
    "productCard.premium": "Premium",
    "productCard.addToWishlist": "Add to Wishlist",
    "productCard.removeFromWishlist": "Remove from Wishlist",
    "productCard.viewDetails": "View Details",
    // Product Details
    "productDetails.videoDemo": "Video Demo",
    "productDetails.availableNow": "Available Now",
    "productDetails.priceRange": "Price Range",
    "productDetails.plans": "Plans",
    "productDetails.options": "Options",
    "productDetails.keyFeatures": "Key Features",
    "productDetails.selectDuration": "Select Duration",
    "productDetails.selectedPlan": "Selected Plan",
    "productDetails.contactToBuy": "Contact to Buy",
    "productDetails.contactSupport": "Click to contact us via WhatsApp for instant purchase • 24/7 Support Available",
    // Stock
    "stock.inStock": "In Stock",
    "stock.lowStock": "Low Stock",
    "stock.outOfStock": "Out of Stock",
    // Coupon
    "coupon.enterCode": "Enter coupon code",
    "coupon.apply": "Apply",
    "coupon.applied": "Coupon Applied",
    "coupon.discount": "Discount",
    "coupon.remove": "Remove",
    // Cart
    "cart.orderSummary": "Order Summary",
    "cart.subtotal": "Subtotal",
    "cart.items": "items",
    "cart.discount": "Discount",
    "cart.total": "Total",
    // Recommendations
    "recommendations.title": "You May Also Like",
    // Trust
    "trust.sslSecure": "SSL Secure",
    "trust.securePayment": "Secure Payment",
    "trust.verified": "Verified Seller",
    "trust.moneyBack": "Money Back Guarantee",
    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.refund": "Refund Policy",
    "footer.terms": "Terms & Conditions",
    // Terms
    "terms.title": "Terms & Conditions",
    "terms.lastUpdated": "Last Updated",
    "terms.acceptance": "Acceptance of Terms",
    "terms.acceptanceText": "By accessing and using this website, you accept and agree to be bound by the terms and conditions set forth below. If you do not agree to these terms, please do not use this website.",
    "terms.serviceDescription": "Service Description",
    "terms.serviceDescriptionText": "MIRAJ XHEAT OFFICIAL provides premium gaming solutions and modifications. All products are digital and delivered electronically upon successful payment verification.",
    "terms.purchases": "Purchases and Payments",
    "terms.purchasesText": "When making a purchase:",
    "terms.purchase1": "All prices are in USD unless otherwise stated",
    "terms.purchase2": "Payments must be made through the approved payment methods listed on our Payment page",
    "terms.purchase3": "Product access will be provided within 24 hours of payment verification",
    "terms.purchase4": "All sales are final unless otherwise stated in our Refund Policy",
    "terms.userResponsibilities": "User Responsibilities",
    "terms.userResponsibilitiesText": "As a user, you agree to:",
    "terms.responsibility1": "Provide accurate payment information",
    "terms.responsibility2": "Use products in accordance with their intended purpose",
    "terms.responsibility3": "Not share, resell, or redistribute purchased products",
    "terms.responsibility4": "Contact us directly for any issues or concerns",
    "terms.prohibitedUses": "Prohibited Uses",
    "terms.prohibitedUsesText": "You may not:",
    "terms.prohibited1": "Use products for illegal activities",
    "terms.prohibited2": "Attempt to reverse engineer or modify our products",
    "terms.prohibited3": "Share your product access with unauthorized users",
    "terms.prohibited4": "Use automated systems to access our website",
    "terms.liability": "Limitation of Liability",
    "terms.liabilityText": "MIRAJ XHEAT OFFICIAL is not responsible for any damages, losses, or issues arising from the use of our products. Users assume all risks associated with product usage. We provide products 'as is' without warranties of any kind.",
    "terms.refunds": "Refunds",
    "terms.refundsText": "Refund requests must be made within 2 hours of purchase. Products used for more than 3 hours are not eligible for refunds. Please refer to our Refund Policy for complete details.",
    "terms.contact": "Contact",
    "terms.contactText": "For questions about these Terms & Conditions, please contact us through:",
    // Privacy
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last Updated",
    "privacy.introduction": "Introduction",
    "privacy.introText": "At MIRAJ XHEAT OFFICIAL, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.",
    "privacy.dataCollection": "Data Collection",
    "privacy.dataCollectionText": "We do not collect, store, or process any personal data. All transactions are handled directly through secure payment providers, and we do not maintain any customer databases or tracking systems.",
    "privacy.data1": "We do not collect personal information",
    "privacy.data2": "We do not store payment details (all payments are processed by third-party providers)",
    "privacy.data3": "We do not track your usage or browsing behavior",
    "privacy.data4": "We do not collect device or IP address information",
    "privacy.dataUsage": "How We Operate",
    "privacy.dataUsageText": "Since we do not collect data, we operate as follows:",
    "privacy.usage1": "All communications are handled directly through WhatsApp, Telegram, or Discord",
    "privacy.usage2": "Payment processing is handled entirely by third-party providers (bKash, Nagad, UPI, Binance)",
    "privacy.usage3": "No customer data is stored on our servers",
    "privacy.usage4": "All interactions are private and not logged",
    "privacy.dataProtection": "Data Protection",
    "privacy.dataProtectionText": "Since we do not collect or store any personal data, there is no risk of data breaches from our end. All payment transactions are handled securely by third-party payment providers with their own encryption and security measures.",
    "privacy.contact": "Contact Us",
    "privacy.contactText": "If you have questions about this Privacy Policy, please contact us:",
    // Refund
    "refund.title": "Refund Policy",
    "refund.lastUpdated": "Last Updated",
    "refund.eligibility": "Refund Eligibility",
    "refund.eligibilityText": "You are eligible for a refund if:",
    "refund.eligible1": "The product is defective or not working as described",
    "refund.eligible2": "You have not used the product extensively",
    "refund.eligible3": "The refund request is made within 2 hours of purchase",
    "refund.nonEligible": "Non-Refundable Items",
    "refund.nonEligibleText": "Refunds are not available for:",
    "refund.nonEligible1": "Products that have been used for more than 3 hours",
    "refund.nonEligible2": "Digital products that have been activated or downloaded",
    "refund.nonEligible3": "Products purchased during special promotions (unless stated otherwise)",
    "refund.process": "Refund Process",
    "refund.step1Title": "Contact Support",
    "refund.step1Text": "Reach out to us via WhatsApp or email with your order details and reason for refund.",
    "refund.step2Title": "Review & Approval",
    "refund.step2Text": "Our team will review your request within 24-48 hours and notify you of the decision.",
    "refund.step3Title": "Refund Processing",
    "refund.step3Text": "If approved, refunds will be processed within 5-7 business days to your original payment method.",
    "refund.important": "Important Notes",
    "refund.importantText": "All refund requests are subject to review. We reserve the right to deny refunds if the product has been misused or if the request does not meet our refund criteria.",

  },
  bn: {
    "nav.home": "হোম",
    "nav.products": "পণ্য",
    "nav.about": "সম্পর্কে",
    "nav.contact": "যোগাযোগ",
    "nav.faq": "প্রশ্নোত্তর",
    "nav.payment": "পেমেন্ট",
    "nav.wishlist": "ইচ্ছা তালিকা",
    "nav.cart": "কার্ট",
    "home.title": "র‍্যান্ডম চিট বিক্রয়",
    "home.subtitle": "প্রিমিয়াম গেমিং সমাধান",
    "home.tagline": "প্রিমিয়াম গেমিংয়ের জন্য আপনার বিশ্বস্ত অংশীদার",
    "home.description": "যাচাইকৃত চিট এবং মডের আমাদের প্রিমিয়াম সংগ্রহ দিয়ে চূড়ান্ত গেমিং সুবিধা অনুভব করুন। মানসম্মত পণ্য, প্রতিযোগিতামূলক মূল্য এবং 24/7 নিবেদিত সহায়তা।",
    "home.explore": "পণ্য অন্বেষণ করুন",
    "home.contact": "যোগাযোগ করুন",
    "home.whyChoose": "কেন আমাদের বেছে নিন",
    "home.trusted": "বিশ্বস্ত এবং নিরাপদ",
    "home.instant": "তাত্ক্ষণিক ডেলিভারি",
    "home.premium": "প্রিমিয়াম মান",
    "home.ready": "শুরু করতে প্রস্তুত?",
    "products.title": "আমাদের পণ্য",
    "products.search": "পণ্য খুঁজুন...",
    "products.all": "সব পণ্য",
    "products.viewDetails": "বিস্তারিত দেখুন",
    "payment.title": "পেমেন্ট পদ্ধতি",
    "payment.bd": "বাংলাদেশ পেমেন্ট",
    "payment.india": "ভারত পেমেন্ট",
    "payment.international": "আন্তর্জাতিক পেমেন্ট",
    "payment.warning": "গুরুত্বপূর্ণ: শুধুমাত্র এই নম্বরগুলিতে টাকা পাঠান। এটি একটি ব্যক্তিগত অ্যাকাউন্ট। কারও সাথে কল করবেন না।",
    "payment.copy": "কপি করুন",
    "payment.copied": "কপি হয়েছে!",
    "payment.instructions": "গুরুত্বপূর্ণ পেমেন্ট নির্দেশাবলী",
    "payment.step1": "উপরের যেকোনো পদ্ধতি ব্যবহার করে পেমেন্ট সম্পন্ন করুন। নির্দিষ্ট পরিমাণ ঠিক পাঠাতে ভুলবেন না।",
    "payment.step2": "আপনার পেমেন্ট নিশ্চিতকরণ বা লেনদেনের রসিদের একটি স্ক্রিনশট নিন।",
    "payment.step3": "WhatsApp এর মাধ্যমে আমাদের সাথে যোগাযোগ করতে এবং সঠিক পেমেন্ট পরিমাণ সহ স্ক্রিনশট পাঠাতে নীচের বোতামে ক্লিক করুন।",
    "payment.step4": "আমাদের দল আপনার পেমেন্ট যাচাই করবে এবং 24 ঘন্টার মধ্যে আপনার পণ্যের অ্যাক্সেস প্রদান করবে।",
    "payment.sendScreenshot": "WhatsApp এর মাধ্যমে পেমেন্ট স্ক্রিনশট পাঠান",
    "footer.connect": "আমাদের সাথে সংযুক্ত হন",
    "footer.copyright": "© 2026 MIRAJ XHEAT OFFICIAL | সর্বস্বত্ব সংরক্ষিত",
    "footer.tagline": "প্রিমিয়াম গেমিং সমাধান • বিশ্বস্ত বিক্রেতা • 24/7 সহায়তা",
    "common.addToCart": "কার্টে যোগ করুন",
    "common.contactToBuy": "ক্রয় করতে যোগাযোগ করুন",
    "common.inStock": "স্টকে আছে",
    "common.selectDuration": "সময়কাল নির্বাচন করুন",
    "common.selectedPlan": "নির্বাচিত পরিকল্পনা",
    "common.startingFrom": "শুরু থেকে",

  },
  hi: {
    "nav.home": "होम",
    "nav.products": "उत्पाद",
    "nav.about": "के बारे में",
    "nav.contact": "संपर्क",
    "nav.faq": "सवाल-जवाब",
    "nav.payment": "भुगतान",
    "nav.wishlist": "इच्छा सूची",
    "nav.cart": "कार्ट",
    "home.title": "रैंडम चीट सेलिंग",
    "home.subtitle": "प्रीमियम गेमिंग समाधान",
    "home.tagline": "प्रीमियम गेमिंग के लिए आपका विश्वसनीय साथी",
    "home.description": "सत्यापित चीट और मॉड्स के हमारे प्रीमियम संग्रह के साथ अंतिम गेमिंग लाभ का अनुभव करें। गुणवत्तापूर्ण उत्पाद, प्रतिस्पर्धी मूल्य और 24/7 समर्पित समर्थन।",
    "home.explore": "उत्पाद देखें",
    "home.contact": "संपर्क करें",
    "home.whyChoose": "हमें क्यों चुनें",
    "home.trusted": "विश्वसनीय और सुरक्षित",
    "home.instant": "तत्काल डिलीवरी",
    "home.premium": "प्रीमियम गुणवत्ता",
    "home.ready": "शुरू करने के लिए तैयार?",
    "products.title": "हमारे उत्पाद",
    "products.search": "उत्पाद खोजें...",
    "products.all": "सभी उत्पाद",
    "products.viewDetails": "विवरण देखें",
    "payment.title": "भुगतान विधियाँ",
    "payment.bd": "बांग्लादेश भुगतान",
    "payment.india": "भारत भुगतान",
    "payment.international": "अंतर्राष्ट्रीय भुगतान",
    "payment.warning": "महत्वपूर्ण: केवल इन नंबरों पर पैसा भेजें। यह एक व्यक्तिगत खाता है। किसी को कॉल न करें।",
    "payment.copy": "कॉपी करें",
    "payment.copied": "कॉपी हो गया!",
    "payment.instructions": "महत्वपूर्ण भुगतान निर्देश",
    "payment.step1": "ऊपर दी गई किसी भी विधि का उपयोग करके भुगतान पूरा करें। निर्दिष्ट सटीक राशि भेजना सुनिश्चित करें।",
    "payment.step2": "अपनी भुगतान पुष्टि या लेनदेन रसीद का स्क्रीनशॉट लें।",
    "payment.step3": "WhatsApp के माध्यम से हमसे संपर्क करने और सटीक भुगतान राशि के साथ स्क्रीनशॉट भेजने के लिए नीचे दिए गए बटन पर क्लिक करें।",
    "payment.step4": "हमारी टीम आपके भुगतान को सत्यापित करेगी और 24 घंटों के भीतर आपकी उत्पाद पहुंच प्रदान करेगी।",
    "payment.sendScreenshot": "WhatsApp के माध्यम से भुगतान स्क्रीनशॉट भेजें",
    "footer.connect": "हमसे जुड़ें",
    "footer.copyright": "© 2026 MIRAJ XHEAT OFFICIAL | सभी अधिकार सुरक्षित",
    "footer.tagline": "प्रीमियम गेमिंग समाधान • विश्वसनीय विक्रेता • 24/7 समर्थन",
    "common.addToCart": "कार्ट में जोड़ें",
    "common.contactToBuy": "खरीदने के लिए संपर्क करें",
    "common.inStock": "स्टॉक में",
    "common.selectDuration": "अवधि चुनें",
    "common.selectedPlan": "चयनित योजना",
    "common.startingFrom": "शुरुआत से",
  },
  ar: { "nav.home": "الرئيسية", "nav.products": "المنتجات", "nav.about": "حول", "nav.contact": "اتصل", "nav.faq": "الأسئلة الشائعة", "nav.payment": "الدفع", "nav.wishlist": "قائمة الأمنيات", "nav.cart": "السلة" },
  es: { "nav.home": "Inicio", "nav.products": "Productos", "nav.about": "Acerca de", "nav.contact": "Contacto", "nav.faq": "Preguntas", "nav.payment": "Pago", "nav.wishlist": "Lista de deseos", "nav.cart": "Carrito" },
  fr: { "nav.home": "Accueil", "nav.products": "Produits", "nav.about": "À propos", "nav.contact": "Contact", "nav.faq": "FAQ", "nav.payment": "Paiement", "nav.wishlist": "Liste de souhaits", "nav.cart": "Panier" },
  de: { "nav.home": "Startseite", "nav.products": "Produkte", "nav.about": "Über uns", "nav.contact": "Kontakt", "nav.faq": "FAQ", "nav.payment": "Zahlung", "nav.wishlist": "Wunschliste", "nav.cart": "Warenkorb" },
  ja: { "nav.home": "ホーム", "nav.products": "製品", "nav.about": "について", "nav.contact": "お問い合わせ", "nav.faq": "よくある質問", "nav.payment": "支払い", "nav.wishlist": "ウィッシュリスト", "nav.cart": "カート" },
  ko: { "nav.home": "홈", "nav.products": "제품", "nav.about": "소개", "nav.contact": "연락처", "nav.faq": "자주 묻는 질문", "nav.payment": "결제", "nav.wishlist": "위시리스트", "nav.cart": "장바구니" },
  pt: { "nav.home": "Início", "nav.products": "Produtos", "nav.about": "Sobre", "nav.contact": "Contato", "nav.faq": "Perguntas", "nav.payment": "Pagamento", "nav.wishlist": "Lista de desejos", "nav.cart": "Carrinho" },
  ru: { "nav.home": "Главная", "nav.products": "Продукты", "nav.about": "О нас", "nav.contact": "Контакты", "nav.faq": "Вопросы", "nav.payment": "Оплата", "nav.wishlist": "Список желаний", "nav.cart": "Корзина" },
  zh: { "nav.home": "首页", "nav.products": "产品", "nav.about": "关于", "nav.contact": "联系", "nav.faq": "常见问题", "nav.payment": "支付", "nav.wishlist": "愿望清单", "nav.cart": "购物车" },
  it: { "nav.home": "Home", "nav.products": "Prodotti", "nav.about": "Chi siamo", "nav.contact": "Contatti", "nav.faq": "FAQ", "nav.payment": "Pagamento", "nav.wishlist": "Lista desideri", "nav.cart": "Carrello" },
  tr: { "nav.home": "Ana Sayfa", "nav.products": "Ürünler", "nav.about": "Hakkında", "nav.contact": "İletişim", "nav.faq": "SSS", "nav.payment": "Ödeme", "nav.wishlist": "İstek Listesi", "nav.cart": "Sepet" },
  vi: { "nav.home": "Trang chủ", "nav.products": "Sản phẩm", "nav.about": "Giới thiệu", "nav.contact": "Liên hệ", "nav.faq": "Câu hỏi", "nav.payment": "Thanh toán", "nav.wishlist": "Danh sách yêu thích", "nav.cart": "Giỏ hàng" },
  th: { "nav.home": "หน้าแรก", "nav.products": "ผลิตภัณฑ์", "nav.about": "เกี่ยวกับ", "nav.contact": "ติดต่อ", "nav.faq": "คำถามที่พบบ่อย", "nav.payment": "การชำระเงิน", "nav.wishlist": "รายการที่ต้องการ", "nav.cart": "ตะกร้า" },
  id: { "nav.home": "Beranda", "nav.products": "Produk", "nav.about": "Tentang", "nav.contact": "Kontak", "nav.faq": "FAQ", "nav.payment": "Pembayaran", "nav.wishlist": "Daftar Keinginan", "nav.cart": "Keranjang" },
  nl: { "nav.home": "Home", "nav.products": "Producten", "nav.about": "Over ons", "nav.contact": "Contact", "nav.faq": "FAQ", "nav.payment": "Betaling", "nav.wishlist": "Verlanglijst", "nav.cart": "Winkelwagen" },
  pl: { "nav.home": "Strona główna", "nav.products": "Produkty", "nav.about": "O nas", "nav.contact": "Kontakt", "nav.faq": "FAQ", "nav.payment": "Płatność", "nav.wishlist": "Lista życzeń", "nav.cart": "Koszyk" },
  uk: { "nav.home": "Головна", "nav.products": "Продукти", "nav.about": "Про нас", "nav.contact": "Контакти", "nav.faq": "Питання", "nav.payment": "Оплата", "nav.wishlist": "Список бажань", "nav.cart": "Кошик" },
};

const languageNames: Record<Language, string> = {
  en: "English",
  bn: "বাংলা",
  hi: "हिन्दी",
  ar: "العربية",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
  ko: "한국어",
  pt: "Português",
  ru: "Русский",
  zh: "中文",
  it: "Italiano",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  th: "ไทย",
  id: "Bahasa Indonesia",
  nl: "Nederlands",
  pl: "Polski",
  uk: "Українська",
};

function detectLanguage(): Language {
  // Check localStorage first
  const stored = localStorage.getItem("preferred-language") as Language;
  if (stored && translations[stored]) return stored;

  // Detect from browser
  const browserLang = navigator.language.split("-")[0] as Language;
  if (translations[browserLang]) return browserLang;

  // Default to English
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  useEffect(() => {
    const stored = localStorage.getItem("preferred-language") as Language;
    if (stored && translations[stored]) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred-language", lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export { languageNames, type Language };

