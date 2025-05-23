interface SeparateProps {
  height: string;
  width?: string;
}

export function Separate({ height, width = "w-full" }: SeparateProps) {
  return <div className={`${height} ${width} bg-[#0D1010]`} />;
}
