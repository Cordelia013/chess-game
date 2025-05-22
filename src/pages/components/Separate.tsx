interface SeparateProps {
  height: string;
}

export function Separate({ height }: SeparateProps) {
  return <div className={`w-full ${height} bg-custom-black`} />;
}
