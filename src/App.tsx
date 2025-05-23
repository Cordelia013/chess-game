import { GridProvider, GridOverlay } from "./grid";
import "./App.css";
import Heros from "./pages/Heros";
import Explication from "./pages/Explication";
import About from "./pages/About";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
        touchMultiplier: 1,
        infinite: false,
      }}
    >
      <GridProvider>
        <GridOverlay />
        {/* Container principal avec sections empilées verticalement */}
        <div className="w-full min-h-screen ">
          <Heros />
          <Explication />
          <About />
        </div>
      </GridProvider>
    </ReactLenis>
  );
}
