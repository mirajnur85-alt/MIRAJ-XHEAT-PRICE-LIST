import { MessageCircle, Send, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    const whatsappUrl = `http://wa.me/8801793686958?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">
          Contact Us
        </h1>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] rounded-full mb-4"></div>
        <p className="text-sm sm:text-base md:text-lg text-[#a9b0ff] max-w-2xl mx-auto font-medium">
          Get in touch with us. We're here to help 24/7
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Contact Form */}
        <Card className="p-6 sm:p-8 border-2 border-[rgba(255,255,255,0.1)]">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#a9b0ff] mb-2">Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full h-11 sm:h-12"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#a9b0ff] mb-2">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full h-11 sm:h-12"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#a9b0ff] mb-2">Subject</label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full h-11 sm:h-12"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#a9b0ff] mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 sm:h-36 rounded-xl border-2 border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] px-4 py-3 text-sm sm:text-base text-white placeholder:text-[#a9b0ff] focus:outline-none focus:border-[#00eaff] focus:ring-2 focus:ring-[rgba(0,234,255,0.3)] transition-all duration-300 resize-none"
                placeholder="Tell us how we can help..."
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-lg py-3 sm:py-4 text-sm sm:text-base font-bold bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] hover:from-[#ff4fd8] hover:to-[#00eaff] shadow-[0_0_25px_rgba(138,61,255,0.4)] hover:shadow-[0_0_35px_rgba(138,61,255,0.6)] transition-all duration-300"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6">
          <Card className="p-6 sm:p-8 border-2 border-[rgba(0,234,255,0.3)] bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#00eaff] to-[#8a3dff] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2">WhatsApp</h3>
                <p className="text-sm sm:text-base text-[#a9b0ff] mb-3 sm:mb-4 font-medium">Chat with us instantly</p>
                <Button
                  asChild
                  className="rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#25D366] to-[#00eaff] text-white font-black text-sm sm:text-base"
                >
                  <a href="http://wa.me/8801793686958" target="_blank" rel="noopener noreferrer">
                    Open WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-[#00eaff]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Email</h3>
                <p className="text-sm sm:text-base text-[#a9b0ff] font-medium">support@mirajxheat.com</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 border-2 border-[rgba(255,255,255,0.1)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#00eaff]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Support Hours</h3>
                <p className="text-sm sm:text-base text-[#a9b0ff] font-medium">24/7 Available</p>
                <p className="text-xs sm:text-sm text-[#8a8a8a] mt-2">We're always here to help</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
