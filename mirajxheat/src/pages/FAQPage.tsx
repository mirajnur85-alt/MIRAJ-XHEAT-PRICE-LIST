import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "How do I purchase a product?",
    answer: "Browse our products, select your desired duration plan, and click 'Contact to Buy'. You'll be redirected to WhatsApp where our team will assist you with the purchase process."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept payments in BDT, INR, and USDT. All transactions are secure and encrypted. Our team will provide payment details after you contact us."
  },
  {
    question: "How quickly will I receive my product?",
    answer: "Most products are delivered instantly after payment confirmation. Some products may require a few minutes for setup. Our team will provide you with delivery details immediately after purchase."
  },
  {
    question: "Are your products safe to use?",
    answer: "Yes, all our products are verified and tested for safety. We only offer premium, trusted solutions. Your security and privacy are our top priorities."
  },
  {
    question: "Do you provide support after purchase?",
    answer: "Absolutely! We offer 24/7 support for all our customers. You can contact us anytime via WhatsApp, Discord, or email for assistance with setup, troubleshooting, or any questions."
  },
  {
    question: "Can I get a refund?",
    answer: "We offer refunds on a case-by-case basis. Please contact our support team to discuss your situation. We're committed to customer satisfaction."
  },
  {
    question: "How often are products updated?",
    answer: "Our products receive regular updates to ensure compatibility and performance. Updates are provided free of charge to all active subscribers."
  },
  {
    question: "What if I have technical issues?",
    answer: "Our 24/7 support team is ready to help with any technical issues. Contact us via WhatsApp for immediate assistance, or reach out through Discord or email."
  }
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center border-2 border-[rgba(0,234,255,0.3)]">
          <HelpCircle className="w-10 h-10 text-[#00eaff]" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] rounded-full mb-6"></div>
        <p className="text-sm md:text-base text-[#a9b0ff] max-w-3xl mx-auto font-medium">
          Find answers to common questions about our products and services
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="border-2 border-[rgba(255,255,255,0.1)] hover:border-[#00eaff] transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4 group"
            >
              <h3 className="text-base md:text-lg font-black text-white flex-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00eaff] group-hover:to-[#ff4fd8] group-hover:bg-clip-text transition-all">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#00eaff] flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <p className="text-sm md:text-base text-[#a9b0ff] leading-relaxed font-medium">{faq.answer}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

