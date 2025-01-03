/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#FF7F50',  // Orange color for the gradient
        'gradient-end': '#FF4500',    // Darker orange to complement the gradient
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out forwards', // Fade-in effect for smooth entry
        'scale-up': 'scaleUp 0.3s ease-out forwards', // Soft scale-up effect on hover
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
