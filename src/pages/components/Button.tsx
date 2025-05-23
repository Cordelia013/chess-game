interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="bg-custom-secondary uppercase text-custom-white w-auto h-[52px] font-bold px-8 rounded hover:bg-opacity-90 transition-all"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
