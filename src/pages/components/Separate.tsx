interface SeparateProps {
  height: string;
}

export default function Separate({ height }: SeparateProps) {
  return <div className={`w-full ${height} bg-custom-black`} />;
}
