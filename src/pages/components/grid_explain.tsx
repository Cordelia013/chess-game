

export  function Grid_explain() {
  return (
    <div className="grid grid-cols-12 gap-1 h-screen ">
      {Array.from({ length: 12 * 12 }, (_, index) => (
        <div
          key={index}
          className={`col-span-1 row-span-1 p-4 ${
            index % 2 === 0 ? "bg-white-0" : "bg-gray-300"
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
