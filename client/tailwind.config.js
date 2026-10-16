/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { ink: '#173b35', mint: '#e8f4ee', forest: '#176b55' }, boxShadow: { soft: '0 12px 40px rgba(25, 65, 54, 0.08)' } } },
  plugins: [],
};