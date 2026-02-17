/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#1B5E20',
        'forest-dark': '#0D3D13',
        'teal-accent': '#00897B',
        'amber-warm': '#D4941C',
        'earth-brown': '#5D4037',
        'charcoal': '#263238',
        'cream': '#FFF8E1',
        'light-bg': '#F5F5F5',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Work Sans', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '6rem',
      },
      borderRadius: {
        'card': '12px',
        'button': '6px',
        'image': '16px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(27, 94, 32, 0.1)',
        'elevated': '0 12px 36px rgba(27, 94, 32, 0.12)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out backwards',
        'fade-in-slide': 'fadeInSlide 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInSlide: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
