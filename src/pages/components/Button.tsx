interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button 
      className="bg-[#B89B6B] text-white w-auto h-[52px] uppercase hover:opacity-90 transition-all px-8 "
      onClick={onClick}
    >
      {text}
    </button>
  );
}