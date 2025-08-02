/** @type {import('tailwindcss').Config} */

// tailwind.config.mjs
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      colors: {
        // Couleurs principales (d'après ton image)
        'primary': '#00311F',           // Vert foncé
        'on-primary': '#F7F0DE',        // Blanc cassé
        
        'secondary': '#B89B6B',         // Or/Bronze
        'on-secondary': '#0D1010',      // Noir
        
        'background': '#F7F0DE',        // Blanc cassé
        'on-background': '#0D1010',     // Noir (implicite)
        
        'surface-light': '#F7F0DE',     // Blanc cassé
        'on-surface-light': '#0D1010',  // Noir
        
        'surface-dark': '#0D1010',      // Noir
        'on-surface-dark': '#F7F0DE',   // Blanc cassé
        
        // Alias pour faciliter l'usage
        'chess': {
          'black': '#0D1010',
          'white': '#F7F0DE',
          'green': '#00311F',
          'gold': '#B89B6B',
        }
      },
      
      fontSize: {
        // D'après tes styles typographiques
        'titre': ['125px', '100px'],      // 125/100
        'sous-titre': ['40px', '98px'],   // 40/98
        'body-125': ['125px', '100px'],   // 125/100
        'body-96': ['96px', '76px'],      // 96/76
        'body-40': ['40px', '36px'],      // 40/36
        'body-18': ['18px', 'auto'],      // 18/auto
        'body-14': ['14px', 'auto'],      // 14/auto
        'body-12': ['12px', 'auto'],      // 12/auto
       
        'label': ['14px', 'auto'],
      },
      
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
