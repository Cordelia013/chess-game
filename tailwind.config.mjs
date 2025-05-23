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
        'fluid-sm': 'clamp(1rem, 2vw + 0.5rem, 1.5rem)', // 1rem = 16px, 1.5rem = 24px
        'fluid-base': 'clamp(1.125rem, 2.5vw + 0.75rem, 2rem)', // 1.125rem = 18px, 2rem = 32px
        'fluid-lg': 'clamp(1.25rem, 3vw + 1rem, 3rem)', // 1.25rem = 20px, 3rem = 48px
        'fluid-xl': 'clamp(1.5rem, 4vw + 1rem, 4rem)', // 1.5rem = 24px, 4rem = 64px
        'fluid-2xl': 'clamp(1.875rem, 5vw + 1.5rem, 6rem)', // 1.875rem = 30px, 6rem = 96px
        'fluid-3xl': 'clamp(2.25rem, 6vw + 2rem, 8rem)', // 2.25rem = 36px, 8rem = 128px
        'fluid-4xl': 'clamp(2.5rem, 7vw + 2.5rem, 10rem)', // 2.5rem = 40px, 10rem = 160px
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