/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#05060a',
        'void-dark': '#020205',
        'neon-blue': '#00f0ff',
        'neon-purple': '#bd00ff',
        'neon-pink': '#ff0099',
        'cyber-glass': 'rgba(16, 18, 27, 0.4)',
        'cyber-border': 'rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(0,240,255,0.1) 0%, rgba(189,0,255,0.1) 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-strong': '0 0 40px rgba(0, 240, 255, 0.5), 0 0 80px rgba(189, 0, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
