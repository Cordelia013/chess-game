

import { Separate } from "./components/Separate";

export default function Actuality() {
  return (
    <section className="relative w-full h-screen bg-cyan-700 ">
      <div className="mx-auto px-4 h-full flex flex-col">
        <div>
          <Separate height="h-4 mb-1" />
          <Separate height="h-2.5 mb-1.5" />
          <Separate height="h-2 mb-2" />
          <Separate height="h-1" />
        </div>

        <div>actuality</div>
      </div>
    </section>
  );
}
