import { useEffect } from "react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new(options: any, elementId: string): void;
          InlineLayout?: {
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    // Load Google Translate script if not already loaded
    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      window.googleTranslateElementInit = function () {
        // Wait a bit to ensure API is fully loaded
        const initTranslate = () => {
          try {
            if (
              window.google &&
              window.google.translate &&
              window.google.translate.TranslateElement
            ) {
              const options: any = {
                pageLanguage: "en",
                includedLanguages:
                  "en,bn,hi,ar,es,fr,de,ja,ko,pt,ru,zh,it,tr,vi,th,id,nl,pl,uk",
                autoDisplay: false,
              };

              // Safely add layout if available
              if (
                window.google.translate.TranslateElement.InlineLayout &&
                window.google.translate.TranslateElement.InlineLayout.SIMPLE
              ) {
                options.layout =
                  window.google.translate.TranslateElement.InlineLayout.SIMPLE;
              }

              new window.google.translate.TranslateElement(
                options,
                "google_translate_element"
              );
            } else {
              // Retry if API not ready
              setTimeout(initTranslate, 100);
            }
          } catch (error) {
            console.warn("Google Translate initialization error:", error);
          }
        };

        // Small delay to ensure API is ready
        setTimeout(initTranslate, 50);
      };

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    } else if (window.google && window.google.translate) {
      // Script already loaded, initialize directly
      try {
        const options: any = {
          pageLanguage: "en",
          includedLanguages:
            "en,bn,hi,ar,es,fr,de,ja,ko,pt,ru,zh,it,tr,vi,th,id,nl,pl,uk",
          autoDisplay: false,
        };

        if (
          window.google.translate.TranslateElement.InlineLayout &&
          window.google.translate.TranslateElement.InlineLayout.SIMPLE
        ) {
          options.layout =
            window.google.translate.TranslateElement.InlineLayout.SIMPLE;
        }

        new window.google.translate.TranslateElement(
          options,
          "google_translate_element"
        );
      } catch (error) {
        console.warn("Google Translate initialization error:", error);
      }
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-24 z-40 translate-widget-container">
      <style>{`
        #google_translate_element {
          opacity: 0;
          position: absolute;
          inset: 0;
          width: 100% !important;
          height: 100% !important;
          cursor: pointer;
        }
        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
        }
        .goog-te-gadget-simple img {
          display: none !important;
        }
        .goog-te-menu-value span {
          display: none !important;
        }
        .goog-te-menu-value:after {
          content: '' !important;
          display: none !important;
        }
        /* Hide the bar at the top on mobile */
        .skiptranslate {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
      `}</style>

      <div className="relative w-14 h-14 group">
        {/* Premium Icon Button (Visual Only) */}
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] via-[rgba(138,61,255,0.2)] to-[rgba(255,79,216,0.2)] border-2 border-[rgba(255,255,255,0.3)] backdrop-blur-xl flex items-center justify-center p-2 shadow-[0_0_30px_rgba(0,234,255,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(0,234,255,0.6)]">
          <img
            src="/google-translate.png"
            alt="Translate"
            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(0,234,255,0.8)]"
          />
        </div>

        {/* The Actual Invisible Google Element (Clickable Area) */}
        <div id="google_translate_element" className="z-10" />

        {/* Floating Glow */}
        <div className="absolute inset-0 -z-10 bg-[#00eaff]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}

