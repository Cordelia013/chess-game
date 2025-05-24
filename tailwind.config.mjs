export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'h-0.5', // 2px
    'h-4', // 16px
    'my-4', // 16px
    'bg-custom-black',
    'mt-4', // 16px
    'mt-8', // 32px
    'mt-12', // 48px
    'mt-50', // 200px
    'mx-4', // 16px
    'mb-7', // 28px
    'pb-4', // 16px
    'pb-6', // 24px
    'pb-8', // 32px
    'pt-2', // 8px
    'px-4', // 16px
    'px-8', // 32px
    'gap-1', // 4px
    'gap-2', // 8px
    'gap-4', // 16px
    'text-sm',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'leading-tight',
    'leading-42', // 42px
    'grid-cols-4',
    'grid-cols-8',
    'grid-cols-12',
    'gap-x-4', // 16px
    'col-span-1',
    'col-span-3',
    'col-span-6',
    'col-span-12',
    'row-span-1',
    'fluid-xs',              // 14px → 16px
    'fluid-sm',               // 16px → 18px
    'fluid-base',             // 18px → 20px
    'fluid-lg',               // 20px → 22px
    'fluid-xl',               // 22px → 24px
    'fluid-2xl',              // 24px → 32px
    'fluid-3xl',              // 32px → 40px
    'fluid-4xl',              // 40px → 48px
    'fluid-5xl',               // 48px → 64px
    'fluid-6xl',               // 64px → 80px
    'fluid-7xl',               // 80px → 96px
    'fluid-8xl',               // 96px → 124px
    'fluid-9xl',               // 124px → 136px
    'fluid-10xl',              // 136px → 148px
  ],
  theme: {
    extend: {

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1480px',
        '3xl': '1536px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
      fontSize: {
        'fluid-xs':    'clamp(0.875rem, 0.5vw + 0.5rem, 1rem)',         // 14px → 16px
        'fluid-sm':    'clamp(1rem, 0.375vw + 0.75rem, 1.125rem)',      // 16px → 18px  
        'fluid-base':  'clamp(1.125rem, 0.375vw + 1rem, 1.25rem)',      // 18px → 20px
        'fluid-lg':    'clamp(1.25rem, 0.375vw + 1.125rem, 1.375rem)',  // 20px → 22px
        'fluid-xl':    'clamp(1.375rem, 0.375vw + 1.25rem, 1.5rem)',    // 22px → 24px
        'fluid-2xl':   'clamp(1.5rem, 1vw + 1rem, 2rem)',               // 24px → 32px
        'fluid-3xl':   'clamp(2rem, 1vw + 1.5rem, 2.5rem)',             // 32px → 40px
        'fluid-4xl':   'clamp(2.5rem, 1vw + 2rem, 3rem)',               // 40px → 48px
        'fluid-5xl':   'clamp(3rem, 2vw + 2rem, 4rem)',                 // 48px → 64px
        'fluid-6xl':   'clamp(4rem, 2vw + 3rem, 5rem)',                 // 64px → 80px
        'fluid-7xl':   'clamp(5rem, 2vw + 4rem, 6rem)',                 // 80px → 96px
        'fluid-8xl':   'clamp(6rem, 2.5vw + 4.875rem, 7.75rem)',        // 96px → 124px
        'fluid-9xl':   'clamp(7.75rem, 1.5vw + 6.5rem, 8.5rem)',        // 124px → 136px
        'fluid-10xl':  'clamp(8.5rem, 1.5vw + 7.25rem, 9.25rem)',       // 136px → 148px
      },
    
      lineHeight: {
        'tight-fluid': 'clamp(1.1, 1vw + 1, 1.3)',
        '42': '2.625rem', // 42px
      },
      colors: {
        'custom-primary': '#00311F',
        'custom-secondary': '#B89B6B',
        'custom-white': '#F7F0DE',
        'custom-black': '#0D1010',
      },
      spacing: {
        '50': '12.5rem', // 200px
        '104': '26rem', // 416px
      },
      gridTemplateColumns: {
        '4': 'repeat(4, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
    }
  }
}