

interface GridExplainProps {
  rows?: number;
  cols?: number;
}

export default function GridExplain({
  rows = 12,
  cols = 12,
}: GridExplainProps) {
  return (
    <div className="grid grid-cols-12 gap-1 h-screen">
      {Array.from({ length: rows * cols }, (_, index) => (
        <div
          key={index}
          className={`col-span-1 row-span-1 p-4 ${
            index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
