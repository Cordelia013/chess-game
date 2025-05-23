interface SeparateProps {
  height: string;
}

export function Separate({ height }: SeparateProps) {
  // Mapping des hauteurs pour s'assurer que les classes sont incluses
  const heightClasses: Record<string, string> = {
    "h-0.5": "h-0.5",
    "h-4": "h-4",
    "h-0.5 my-4": "h-0.5 my-4",
  };

  const appliedHeight = heightClasses[height] || height;

  return (
    <div
      className={`w-full ${appliedHeight}`}
      style={{
        backgroundColor: "#0D1010",
        width: "100%",
      }}
    />
  );
}
