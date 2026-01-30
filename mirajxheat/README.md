# MIRAJ XHEAT OFFICIAL

> Premium Gaming Solutions | Trusted Seller | 24/7 Support

A modern, professional e-commerce platform built with cutting-edge web technologies for selling premium gaming cheats and modifications. Designed with user experience and performance in mind.

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC?logo=tailwind-css)

---

## ✨ Features

### 🛍️ E-Commerce Functionality
- **Multi-page System** - Complete navigation with Home, Products, Cart, Wishlist, About, Contact, FAQ, and Payment pages
- **Shopping Cart** - Full cart functionality with quantity management and real-time price calculation
- **Wishlist** - Save favorite products for later purchase
- **Discount System** - Promo code support with percentage-based discounts
- **Product Management** - Detailed product cards with images, features, pricing, and stock status

### 🎨 User Experience
- **Product Quick View** - Hover to preview products without leaving the page
- **Product Recommendations** - Smart "You May Also Like" suggestions
- **Product Videos/Demos** - Optional YouTube video embeds for product demonstrations
- **Stock Status Indicators** - Real-time availability (In Stock, Low Stock, Out of Stock)
- **Responsive Design** - Optimized for PC, Mobile, Tablet, and TV displays

### 🌍 Internationalization
- **Multi-language Support** - 20+ languages with Google Translate integration
- **Language Persistence** - User language preference saved in localStorage
- **Auto-detection** - Automatic language detection based on browser settings

### 💳 Payment Integration
- **Multiple Payment Methods** - Support for bKash, Nagad, UPI, and Binance
- **Easy Copy Functionality** - One-click copy for payment details
- **Payment Instructions** - Clear step-by-step payment process
- **QR Code Support** - Visual payment method images with collapse/expand

### 🔒 Trust & Security
- **SSL Secure** - Encrypted connections
- **Trust Badges** - Verified seller and security indicators
- **Privacy Policy** - Complete privacy policy page
- **Refund Policy** - Transparent refund terms and conditions

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19.2.3 |
| **Language** | TypeScript 5.9.3 |
| **Build Tool** | Vite 7.3.0 |
| **Styling** | Tailwind CSS 3.4.19 |
| **Routing** | React Router DOM 7.11.0 |
| **UI Components** | shadcn-ui |
| **Icons** | Lucide React |
| **State Management** | React Context API |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

```bash
# Clone the repository
git clone https://github.com/Hackerjoy456/selling-website.git

# Navigate to project directory
cd selling-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

---

## 🌐 Deployment

### Cloudflare Pages (Recommended)

This project is optimized for deployment on **Cloudflare Pages**.

#### Quick Setup

1. **Connect Repository**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create Application** → **Pages**
   - Click **Connect to Git** and authorize GitHub
   - Select repository: `Hackerjoy456/selling-website`

2. **Configure Build Settings**
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`

3. **Deploy**
   - Click **Save and Deploy**
   - Your site will be live automatically!

#### Benefits
- ✅ Global CDN with 200+ edge locations
- ✅ Automatic HTTPS/SSL
- ✅ DDoS protection
- ✅ Automatic deployments on git push
- ✅ Free tier available

---

## 📁 Project Structure

```
selling-website/
├── public/
│   ├── assets/              # Static assets (images, logos)
│   └── _redirects           # SPA routing configuration
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn-ui base components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Footer.tsx      # Footer component
│   │   ├── ProductCard.tsx # Product display card
│   │   ├── ProductDetailsModal.tsx
│   │   ├── DisclaimerModal.tsx
│   │   └── ...
│   ├── contexts/           # React Context providers
│   │   ├── CartContext.tsx
│   │   ├── WishlistContext.tsx
│   │   └── LanguageContext.tsx
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── CartPage.tsx
│   │   └── ...
│   ├── data/               # Data files
│   │   └── products.ts     # Product catalog
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── lib/                # Utility functions
│   │   └── utils.ts
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── wrangler.toml           # Cloudflare configuration
```

---

## 🎨 Customization

### Adding Products

Edit `src/data/products.ts`:

```typescript
{
  id: "unique-product-id",
  name: "Product Name",
  subtitle: "MIRAJ XHEAT OFFICIAL",
  image: "/assets/product-image.jpg",
  description: "Detailed product description",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  videoUrl: "https://youtube.com/watch?v=VIDEO_ID", // Optional
  stockStatus: "in_stock", // "in_stock" | "low_stock" | "out_of_stock"
  stockCount: 10, // Optional
  prices: [
    createPrice("1 Day", 2),
    createPrice("7 Days", 4),
    createPrice("30 Days", 10),
  ],
}
```

### Adding Coupon Codes

Edit `src/pages/CartPage.tsx`:

```typescript
const coupons: Record<string, number> = {
  "WELCOME10": 10,  // 10% discount
  "SAVE20": 20,     // 20% discount
  "PREMIUM15": 15,  // 15% discount
  "YOURCODE": 15,   // Add your custom codes
};
```

### Customizing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: '#00eaff',
  secondary: '#8a3dff',
  accent: '#ff4fd8',
  // ... customize as needed
}
```

---

## 🔗 Contact & Support

### Get in Touch

- **WhatsApp**: [+8801793686958](http://wa.me/8801793686958)
- **Telegram**: [@mirajxheat](https://t.me/mirajxheat)
- **Discord**: [Join Server](https://discord.gg/p8zt6TuUSv)
- **YouTube**: [@mirajxheat](https://youtube.com/@mirajxheat?si=0l6QYubm857Y_S-T)

### Support Hours
24/7 Available - We're always here to help!

---

## 👥 Contributors

- **Hackerjoy456** (BIJOY) - Project maintainer and developer

---

## 📄 License

© 2025 MIRAJ XHEAT OFFICIAL | All Rights Reserved

This project is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- UI Components by [shadcn/ui](https://ui.shadcn.com/)

---

**Built with ❤️ using modern web technologies**

*For inquiries, support, or business opportunities, please contact us through the channels listed above.*
