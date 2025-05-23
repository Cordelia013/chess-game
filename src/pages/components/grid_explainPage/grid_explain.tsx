import gridData from "./grid_explain.json";

// Interfaces pour typer les données de la grille
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

export default function GridExplainOptimized() {
  const { gridConfig, cellColors } = gridData as GridData;
  const { columns, rows, gap, defaultColor } = gridConfig;

  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-900">
      {/* Container principal avec calculs dynamiques */}
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, calc(100vw / ${columns}))`,
          gridTemplateRows: `repeat(${rows}, calc(100vh / ${rows}))`,
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: columns * rows }, (_, index) => {
          const backgroundColor = cellColors[index.toString()] || defaultColor;

          return (
            <div
              key={index}
              className="flex items-center justify-center text-xs font-mono transition-all duration-300 hover:scale-95"
              style={{
                backgroundColor,
                color: backgroundColor === "#000000" ? "#ffffff" : "#000000",
                width: `calc(100vw / ${columns})`,
                height: `calc(100vh / ${rows})`,
              }}
            >
              {/* Affichage optionnel du numéro de cellule */}
              {/* {index + 1} */}
            </div>
          );
        })}
      </div>

      {/* Indicateur en bas à droite pour montrer les dimensions dynamiques */}
      {/* <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded text-xs font-mono">
        Grille: {columns}x{rows} | Cellule: calc(100vw/{columns}) x calc(100vh/
        {rows})
      </div> */}
    </div>
  );
}
