import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'work-sans': ['Work Sans', 'sans-serif'],
      'crimson-text': ['Crimson Text', 'serif'],
    },
    extend: {
      colors: {
        dark: '#212529',
        black: '#000000',
        primary: '#74C69D',
        white: '#FFFFFF',
        gray: '#21252980',
      },
      boxShadow: {
        '4xl': '3px 4px 12px 1px rgba(0, 0, 0, 0.25);',
      },
    },
    screens: {
      xs: '380px',
      'xs-sm': '550px',
      sm: '640px',
      md: '768px',
      'md-lg': '850px',
      lg: '1024px',
      'lg-xl': '1150px',
      xl: '1280px',
    },
  },

  plugins: [],
};
export default config;
