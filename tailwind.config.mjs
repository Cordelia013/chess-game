export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '48rem',
        'md': '64rem',
        'lg': '90rem',
        'xl': '96rem',
        '2xl': '120rem',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
        'normal': '1.5',
        'relaxed': '1.75',
        'loose': '2',
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
    }
  }
}