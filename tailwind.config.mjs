// tailwind.config.js
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'h-0.5',
    'h-4',
    'my-4',
    'bg-custom-black'
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-xs': 'clamp(0.875rem,  1.5vw + 0.5rem,   1rem)',     // 14px → 16px
        'fluid-sm': 'clamp(1rem,      2vw + 0.5rem,     1.25rem)',  // 16px → 20px
        'fluid-base': 'clamp(1.125rem,  2.5vw + 0.625rem, 1.5rem)',   // 18px → 24px
        'fluid-lg': 'clamp(1.25rem,   3vw + 0.75rem,    1.875rem)', // 20px → 30px
        'fluid-xl': 'clamp(1.5rem,    3.5vw + 1rem,     2.25rem)',  // 24px → 36px
        'fluid-2xl': 'clamp(1.875rem,  4vw + 1.25rem,    2.875rem)', // 30px → 46px
        'fluid-3xl': 'clamp(2.25rem,   5vw + 1.5rem,     3.5rem)',   // 36px → 56px
        'fluid-4xl': 'clamp(3rem,      6vw + 2rem,       4.5rem)',   // 48px → 72px
      },
      lineHeight: {
        'tight-fluid': 'clamp(1.1, 1vw + 1, 1.3)',
      },
      colors: {
        primary: '#00311F',
        secondary: '#B89B6B',
        white: '#F7F0DE',
        black: '#0D1010',
      }
    }
  }
}