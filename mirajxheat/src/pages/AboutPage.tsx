import { Shield, Zap, Star, Users, Award, TrendingUp } from "lucide-react";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">
          About Us
        </h1>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] rounded-full mb-6"></div>
        <p className="text-sm md:text-base text-[#a9b0ff] max-w-3xl mx-auto font-medium leading-relaxed">
          Your trusted partner for premium gaming solutions since 2020
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(0,234,255,0.05)] border-2 border-[rgba(0,234,255,0.3)]">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Our Mission</h2>
          <p className="text-sm md:text-base text-[#a9b0ff] leading-relaxed font-medium">
            To provide gamers worldwide with premium, verified gaming solutions that enhance their experience while maintaining the highest standards of quality, security, and customer service.
          </p>
        </div>
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[rgba(138,61,255,0.1)] to-[rgba(138,61,255,0.05)] border-2 border-[rgba(138,61,255,0.3)]">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Our Vision</h2>
          <p className="text-sm md:text-base text-[#a9b0ff] leading-relaxed font-medium">
            To become the leading global platform for premium gaming solutions, recognized for innovation, reliability, and exceptional customer satisfaction.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-8 bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Trust & Security", desc: "Your security is our priority" },
            { icon: Zap, title: "Innovation", desc: "Cutting-edge solutions" },
            { icon: Star, title: "Quality", desc: "Premium products only" },
            { icon: Users, title: "Community", desc: "Building gaming communities" },
            { icon: Award, title: "Excellence", desc: "Uncompromising standards" },
            { icon: TrendingUp, title: "Growth", desc: "Continuous improvement" },
          ].map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.03)] border-2 border-[rgba(255,255,255,0.15)] hover:border-[#00eaff] hover:shadow-[0_0_40px_rgba(0,234,255,0.4)] transition-all duration-500 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-[#00eaff]" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-white mb-2">{value.title}</h3>
              <p className="text-xs md:text-sm text-[#a9b0ff] font-medium">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "10K+", label: "Happy Customers" },
          { number: "50+", label: "Premium Products" },
          { number: "24/7", label: "Support Available" },
          { number: "100%", label: "Satisfaction Rate" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-8 rounded-3xl bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)] border-2 border-[rgba(0,234,255,0.3)]"
          >
            <div className="text-2xl md:text-3xl font-black mb-2 bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-xs md:text-sm text-[#a9b0ff] font-semibold uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

