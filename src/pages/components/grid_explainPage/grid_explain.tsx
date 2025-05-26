import gridData from "./grid_explain.json";
import { useState, useEffect } from "react";

interface GridConfig {
  columns: number;
  rows: number;
  gap: number;
  defaultColor: string;
}

interface GridData {
  gridConfig: GridConfig;
  cellColors: Record<string, string>;
}

interface GridExplainOptimizedProps {
  mousePosition: { x: number; y: number };
}

export default function GridExplainOptimized({ mousePosition }: GridExplainOptimizedProps) {
  const { gridConfig, cellColors } = gridData as GridData;
  const { gap, defaultColor } = gridConfig;


  // Configuration responsive de la grille
  const [gridDimensions, setGridDimensions] = useState({
    columns: 12,
    rows: 12,
  });



  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile : grille 4x6
        setGridDimensions({ columns: 4, rows: 6 });
      } else if (width < 1024) {
        // Tablette : grille 8x6
        setGridDimensions({ columns: 8, rows: 6 });
      } else {
        // Desktop : grille complète 12x12
        setGridDimensions({
          columns: gridConfig.columns,
          rows: gridConfig.rows,
        });
      }
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);

    return () => window.removeEventListener("resize", updateGrid);
  }, [gridConfig.columns, gridConfig.rows]);

  const { columns, rows } = gridDimensions;

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        className="grid w-full h-full "
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: columns * rows }, (_, index) => {
          // Adapter l'index pour les grilles réduites
          const originalIndex = index % (gridConfig.columns * gridConfig.rows);
          const backgroundColor =
            cellColors[originalIndex.toString()] || defaultColor;

          return (
            <div
              key={index}
              className=" flex items-center justify-center text-xs font-mono transition-all duration-300 hover:scale-95"
              style={{
                backgroundColor,
                color: backgroundColor === "#000000" ? "#ffffff" : "#000000",
              }}
            >
              {/* Optionnel : afficher le numéro de cellule */}
              {/* {index + 1} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
