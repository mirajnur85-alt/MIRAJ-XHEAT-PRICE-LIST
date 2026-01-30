import * as React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
      
      {/* Modal Content */}
      <div
        className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1020] via-[#0a0d18] to-[#0d1020] border-2 border-[rgba(255,255,255,0.2)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "modalSlideIn 0.3s ease-out"
        }}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.1)] bg-gradient-to-r from-[rgba(0,234,255,0.05)] to-transparent">
            <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200 hover:rotate-90"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-[#a9b0ff] hover:text-white" />
            </button>
          </div>
        )}
        
        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-100px)] custom-scrollbar">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00eaff, #8a3dff);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #8a3dff, #ff4fd8);
        }
      `}</style>
    </div>
  );
}
