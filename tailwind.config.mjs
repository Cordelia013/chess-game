export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'h-0.5',
    'h-4',
    'my-4',
    'bg-custom-black',
    'mt-4',
    'mt-8',
    'mt-12',
    'mt-50',
    'mx-4',
    'mb-7',
    'pb-4',
    'pb-6',
    'pb-8',
    'pt-2',
    'px-4',
    'px-8',
    'gap-1',
    'gap-2',
    'gap-4',
    'text-sm',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'leading-tight',
    'leading-42',
    'grid-cols-4',
    'grid-cols-8',
    'grid-cols-12',
    'gap-x-4',
    'col-span-1',
    'col-span-3',
    'col-span-6',
    'col-span-12',
    'row-span-1'
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-xs': 'clamp(0.875rem,  1.5vw + 0.5rem,   1rem)',
        'fluid-sm': 'clamp(1rem,      2vw + 0.5rem,     1.25rem)',
        'fluid-base': 'clamp(1.125rem,  2.5vw + 0.625rem, 1.5rem)',
        'fluid-lg': 'clamp(1.25rem,   3vw + 0.75rem,    1.875rem)',
        'fluid-xl': 'clamp(1.5rem,    3.5vw + 1rem,     2.25rem)',
        'fluid-2xl': 'clamp(1.875rem,  4vw + 1.25rem,    2.875rem)',
        'fluid-3xl': 'clamp(2.25rem,   5vw + 1.5rem,     3.5rem)',
        'fluid-4xl': 'clamp(3rem,      6vw + 2rem,       4.5rem)',
      },
      lineHeight: {
        'tight-fluid': 'clamp(1.1, 1vw + 1, 1.3)',
        '42': '2.625rem',
      },
      colors: {
        'custom-primary': '#00311F',
        'custom-secondary': '#B89B6B',
        'custom-white': '#F7F0DE',
        'custom-black': '#0D1010',
      },
      spacing: {
        '50': '12.5rem',
        '104': '26rem',
      },
      width: {
        '4xl': '56rem',
      }
    }
  }
}