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
        'fluid-sm': 'clamp(1rem, 2vw + 0.5rem, 1.5rem)',
        'fluid-base': 'clamp(1.125rem, 2.5vw + 0.75rem, 2rem)',
        'fluid-lg': 'clamp(1.25rem, 3vw + 1rem, 3rem)',
        'fluid-xl': 'clamp(1.5rem, 4vw + 1rem, 4rem)',
        'fluid-2xl': 'clamp(1.875rem, 5vw + 1.5rem, 6rem)', // 96px max
        'fluid-3xl': 'clamp(2.25rem, 6vw + 2rem, 8rem)',
        'fluid-4xl': 'clamp(2.5rem, 7vw + 2.5rem, 10rem)',
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