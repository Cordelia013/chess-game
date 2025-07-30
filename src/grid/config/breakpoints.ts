// src/grid/config/breakpoints.ts
export const GRID_BREAKPOINTS = {
  mobile: {
    name: "mobile",
    minWidth: 0,
    maxWidth: 640,
    columns: 4,
    gutter: 10,
    margin: 10,
  },
  tablet: {
    name: "tablet",
    minWidth: 641,
    maxWidth: 1024,
    columns: 8,
    gutter: 16,
    margin: 16,
  },
  desktop: {
    name: "desktop",
    minWidth: 1025,
    maxWidth: 1920, // Limite supérieure pour desktop classique
    columns: 12,
    gutter: 16,
    margin: 16,
  },
  "9xl": {
    name: "9xl",
    minWidth: 1921,
    maxWidth: Infinity,
    columns: 16, // Par exemple, 16 colonnes pour les très grands écrans
    gutter: 24,
    margin: 32,
  },
} as const;

export type GridBreakpoint = keyof typeof GRID_BREAKPOINTS;
