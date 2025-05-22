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
    maxWidth: Infinity,
    columns: 12,
    gutter: 16,
    margin: 16,
  },
} as const;

export type GridBreakpoint = keyof typeof GRID_BREAKPOINTS;
