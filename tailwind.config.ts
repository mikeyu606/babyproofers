import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cloud: '#F8F5F0',
        stone: '#D8CFC3',
        terracotta: '#A65A47',
        pine: '#9CB8A8',
        ink: '#2E2A27',
        rose: '#FF5A5F',
        plum: '#5C3D56'
      },
      boxShadow: {
        luxe: '0 20px 50px rgba(46, 42, 39, 0.1)'
      }
    }
  },
  plugins: []
};

export default config;
